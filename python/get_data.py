import fitbit
import json
from json_handler import set_token_client_id, set_debug_state, print_json, read_tokens, write_tokens
from sys import stdin
from platform import python_version
import select


##############################################
# All output must be printed in JSON format, #
# as it is read in by node_helper.js         #
##############################################


def print_data(resource, data, goal, debug=False):
    if debug is True and not debug_mode:
        return

    print(json.dumps({"type": "data", "resource": resource,
                      "values": {"data": data, "goal": goal}}))


def print_empty_resource(resource):
    # Print out resource value anyway. This will show as empty
    # in the module and allows other data to be fetched
    print_data(
        resource=resource,
        data=0,
        goal=1
    )


def handle_key_error(key_error, resource=None):
    print_json("error", str(key_error))
    if resource is not None:
        print_empty_resource(resource)


if __name__ == "__main__":

    print_json("debug", "Python Version", python_version())

    debug_mode = False

    client_id = None
    client_secret = None

    resource_list = []

    # Attempt to determine what data to get by
    # reading an array passed in to stdin
    if select.select([stdin, ], [], [], 0.0)[0]:
        try:
            print_json("status", "Attempting to read data from stdin")

            stdin_read = stdin.read()
            stdin_fixed = stdin_read\
                .strip("\n")\
                .strip("\"")\
                .replace("\\\"", "\"")

            config = json.loads(stdin_fixed)

            print_json("status", "Parsed stdin - extracting data")

            debug_mode = config.get("debug", debug_mode)

            client_id = config.get("client_id", client_id)
            client_secret = config.get("client_secret", client_secret)

            resource_list = config.get("resources", resource_list)
        except SyntaxError as err:
            warning_text = ("Debug mode and resource list"
                            " from stdin cannot be evaluated")
            print_json(
                "warning", warning_text, stdin_read)
    else:
        print_json("status", "Nothing to read from stdin - using defaults")

    set_debug_state(debug_mode)
    print_json("status", "Debug Mode", str(debug_mode))

    set_token_client_id(client_id)
    print_json("status", "Client ID", str(client_id))

    print_json("debug", "Client Secret", str(client_secret))

    resource_list_str = ", ".join(resource_list) \
        if len(resource_list) > 0 else "All"
    print_json("status", "Resources to get", resource_list_str)

    access_token, refresh_token, expires_at = read_tokens()
    print_json("debug", "access_token", access_token)
    print_json("debug", "refresh_token", refresh_token)
    print_json("debug", "expires_at", expires_at)

    def WriteTokenWrapper(token):
        print_json("status", "Access token expired - refreshing tokens")
        print_data(
            resource=token,
            data=0,
            goal=1,
            debug=True
        )
        acc_tok = token["access_token"]
        ref_tok = token["refresh_token"]
        expires_at = token["expires_at"]
        write_tokens(acc_tok, ref_tok, expires_at)

    print_json("debug", "Creating authorised client")
    authd_client = fitbit.Fitbit(client_id,
                                 client_secret,
                                 system="METRIC",
                                 oauth2=True,
                                 access_token=access_token,
                                 refresh_token=refresh_token,
                                 expires_at=expires_at,
                                 refresh_cb=WriteTokenWrapper,
                                 redirect_uri="http://127.0.0.1:8888/"
                                 )

    print_json("debug", "Polling API for data")
    #####################################################
    print_json("status", "API polling stage", "Activity")
    #####################################################
    activity_resources_all = [
        "steps", "caloriesOut", "distance", "activeMinutes", "floors"]
    activity_resources_easy_parse = ["steps", "caloriesOut", "floors"]

    if len(resource_list) == 0 or \
            any(item in activity_resources_all for item in resource_list):

        activity_list = authd_client.activities()

        activity_summary = activity_list["summary"]
        activity_goals = activity_list["goals"]
        # --------------
        if len(resource_list) == 0:
            activity_resources_selected = activity_resources_easy_parse
        else:
            activity_resources_selected = set(resource_list) & \
                set(activity_resources_easy_parse)

        # Get resources that are easy to parse
        for resource in activity_resources_selected:
            try:
                print_data(
                    resource=resource,
                    data=activity_summary[resource],
                    goal=activity_goals[resource]
                )
            except KeyError as err:
                handle_key_error(err, resource)

        # These require more complicated parsing
        if len(resource_list) == 0 or "activeMinutes" in resource_list:
            try:
                active_minutes = activity_summary["fairlyActiveMinutes"] + \
                    activity_summary["veryActiveMinutes"]
                print_data(
                    resource="activeMinutes",
                    data=active_minutes,
                    goal=activity_goals["activeMinutes"]
                )
            except KeyError as err:
                handle_key_error(err, "activeMinutes")

        if len(resource_list) == 0 or "distance" in resource_list:
            try:
                distances_data = activity_summary["distances"]

                # Get total distance
                distance = None
                for x in distances_data:
                    if x["activity"] == "total":
                        distance = x["distance"]
                        break

                if distance is None:
                    print_empty_resource("distance")
                else:
                    print_data(
                        resource="distance",
                        data=distance,
                        goal=activity_goals["distance"]
                    )
            except KeyError as err:
                handle_key_error(err, "distance")

    ##################################################
    print_json("status", "API polling stage", "Sleep")
    ##################################################
    if len(resource_list) == 0 or "sleep" in resource_list:
        try:
            sleep_data = authd_client.sleep()

            # python-fitbit does not have this function
            # so we make it ourselves
            def get_sleep_goal(fitbit_client):
                """
                https://dev.fitbit.com/build/reference/web-api/sleep/#sleep-goals
                """
                url = "{0}/{1}/user/-/sleep/goal.json".format(
                    *fitbit_client._get_common_args()
                )
                return fitbit_client.make_request(url)

            sleep_goal_data = get_sleep_goal(authd_client)

            sleep_summary = sleep_data["summary"]
            total_minutes_asleep = sleep_summary["totalMinutesAsleep"]
            sleep_goal = sleep_goal_data["goal"]["minDuration"]
            # --------------
            print_data(
                resource="sleep",
                data=total_minutes_asleep,
                goal=sleep_goal
            )
        except KeyError as err:
            handle_key_error(err, "sleep")

    ##################################################
    print_json("status", "API polling stage", "Heart")
    ##################################################
    if len(resource_list) == 0 or "restingHeart" in resource_list:
        try:
            heart_time_series_data = authd_client.time_series(
                "activities/heart", period="1d")
            heart_summary_time_series = heart_time_series_data["activities-heart"]

            heart_summary_today = heart_summary_time_series[0]["value"]
            resting_heart_rate = heart_summary_today["restingHeartRate"]

            # --------------
            print_data(
                resource="restingHeart",
                data=resting_heart_rate,
                goal=0
            )
        except KeyError as err:
            handle_key_error(err, "restingHeart")

    ###################################################
    print_json("status", "API polling stage", "Weight")
    ###################################################
    if len(resource_list) == 0 or "weight" in resource_list:
        try:
            weight_data = authd_client.get_bodyweight(period="1m")["weight"]
            weight_goal_data = authd_client.body_weight_goal()

            last_weight_log = weight_data[-1]
            weight_current_kg = last_weight_log["weight"]

            weight_start_kg = weight_goal_data["goal"]["startWeight"]
            weight_goal_kg = weight_goal_data["goal"]["weight"]
            # --------------
            print_data(
                resource="weight",
                data=weight_current_kg,
                goal=weight_goal_kg
            )
        except KeyError as err:
            handle_key_error(err, "weight")

    #################################################
    print_json("status", "API polling stage", "Food")
    #################################################
    if len(resource_list) == 0 or "caloriesIn" in resource_list:
        try:
            calories_in_time_series_data = authd_client.time_series(
                "foods/log/caloriesIn", period="1d")
            food_goal_data = authd_client.food_goal()

            calories_in_current = sum(float(c["value"])
                                      for c in calories_in_time_series_data["foods-log-caloriesIn"])
            calories_in_goal = food_goal_data["goals"]["calories"]
            # --------------
            print_data(
                resource="caloriesIn",
                data=max(int(calories_in_goal - calories_in_current), 0),
                goal=0
            )
        except KeyError as err:
            handle_key_error(err, "caloriesIn")

    ##################################################
    print_json("status", "API polling stage", "Water")
    ##################################################
    if len(resource_list) == 0 or "water" in resource_list:
        try:
            water_time_series_data = authd_client.time_series(
                "foods/log/water", period="1d")
            water_goal_data = authd_client.water_goal()

            water_summary_time_series = water_time_series_data["foods-log-water"]

            water_summary_today = water_summary_time_series[0]["value"]

            water_consumed_today_ml = float(water_summary_today)
            water_goal_today_ml = water_goal_data["goal"]["goal"]

            water_remaining_today_ml = water_goal_today_ml - water_consumed_today_ml
            # --------------
            print_data(
                resource="water",
                data=max(int(round(water_remaining_today_ml)), 0),
                goal=0
            )
        except KeyError as err:
            handle_key_error(err, "water")
