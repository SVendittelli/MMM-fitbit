#!/usr/bin/env python
import fitbit
from fitbit.api import FitbitOauth2Client
import json
from iniHandler import print_data, print_json, ReadCredentials, ReadTokens, WriteTokens
import sys

if __name__ == "__main__":

    # Attempt to determine what data to get by
    # reading an array passed in to stdin
    resource_array = []
    try:
        resource_array = eval(sys.stdin.read())
    except SyntaxError as err:
        print_data(
            resource=str(err).strip("'"),
            data=0,
            goal=1
        )

    # This is the Fitbit URL to use for the API call
    FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

    # Get credentials
    ClientID, ClientSecret = ReadCredentials()
    AccessToken, RefreshToken, ExpiresAt = ReadTokens()

    def WriteTokenWrapper(token):
        print_data(
            resource=token,
            data=0,
            goal=1
        )
        acc_tok = token['access_token']
        ref_tok = token['refresh_token']
        expires_at = token['expires_at']
        WriteTokens(acc_tok, ref_tok, expires_at)

    # Create authorised client and grab step count from one day of steps
    authdClient = fitbit.Fitbit(ClientID, ClientSecret, system="METRIC", oauth2=True, access_token=AccessToken, refresh_token=RefreshToken,
                                expires_at=ExpiresAt, refresh_cb=WriteTokenWrapper, redirect_uri='http://127.0.0.1:8080/')

    # Poll API for data
    try:
        ############
        # ACTIVITY #
        ############
        if len(resource_array) == 0 or \
            "steps" in resource_array or \
            "caloriesOut" in resource_array or \
            "distance" in resource_array or \
            "activeMinutes" in resource_array or \
                "floors" in resource_array:

            activity_list = authdClient.activities()

            activitySummary = activity_list['summary']
            activityGoals = activity_list['goals']
            # --------------
            for resource in ['steps', 'floors', 'caloriesOut']:
                if len(resource_array) == 0 or resource in resource_array:
                    print_data(
                        resource=resource,
                        data=activitySummary[resource],
                        goal=activityGoals[resource]
                    )

            # These require more complicated parsing
            if len(resource_array) == 0 or "activeMinutes" in resource_array:
                activeMinutes = activitySummary['fairlyActiveMinutes'] + \
                    activitySummary['veryActiveMinutes']
                print_data(
                    resource='activeMinutes',
                    data=activeMinutes,
                    goal=activityGoals['activeMinutes']
                )

            if len(resource_array) == 0 or "distance" in resource_array:
                distance = activitySummary['distances'][0]['distance']
                print_data(
                    resource='distance',
                    data=distance,
                    goal=activityGoals['distance']
                )

        #########
        # SLEEP #
        #########
        if len(resource_array) == 0 or "sleep" in resource_array:
            sleep_data = authdClient.sleep()
            sleep_goal_data = authdClient.get_sleep_goal()

            sleep_summary = sleep_data['summary']
            total_minutes_asleep = sleep_summary['totalMinutesAsleep']
            sleep_goal = sleep_goal_data['goal']['minDuration']
            # --------------
            print_data(
                resource='sleep',
                data=total_minutes_asleep,
                goal=sleep_goal
            )

        #########
        # HEART #
        #########
        if len(resource_array) == 0 or "restingHeart" in resource_array:
            heart_time_series_data = authdClient.time_series(
                'activities/heart', period='1d')

            heart_time_series_summary = heart_time_series_data['activities-heart']
            resting_heart_rate = heart_time_series_summary[0]['value']['restingHeartRate']
            # --------------
            print_data(
                resource='restingHeart',
                data=resting_heart_rate,
                goal=0
            )

        ##########
        # WEIGHT #
        ##########
        if len(resource_array) == 0 or "weight" in resource_array:
            weight_data = authdClient.get_bodyweight()
            weight_goal_data = authdClient.body_weight_goal()

            weight = weight_data['weight']
            weight_current_kg = weight[0]['weight']

            weight_start_kg = weight_goal_data['goal']['startWeight']
            weight_goal_kg = weight_goal_data['goal']['weight']
            # --------------
            print_data(
                resource='weight',
                data=weight_current_kg,
                goal=weight_goal_kg
            )

        ########
        # FOOD #
        ########
        if len(resource_array) == 0 or "caloriesIn" in resource_array:
            calories_in_time_series_data = authdClient.time_series(
                'foods/log/caloriesIn', period='1d')
            food_goal_data = authdClient.food_goal()

            calories_in_current = sum(float(c['value'])
                                      for c in calories_in_time_series_data['foods-log-caloriesIn'])
            calories_in_goal = food_goal_data['goals']['calories']
            # --------------
            print_data(
                resource='caloriesIn',
                data=max(int(calories_in_goal - calories_in_current), 0),
                goal=0
            )

        #########
        # WATER #
        #########
        if len(resource_array) == 0 or "water" in resource_array:
            water_time_series_data = authdClient.time_series(
                'foods/log/water', period='1d')
            water_goal_data = authdClient.water_goal()

            water_consumed_today_ml = float(
                water_time_series_data['foods-log-water'][0]['value'])
            water_goal_today_ml = water_goal_data['goal']['goal']

            water_remaining_today_ml = water_goal_today_ml - water_consumed_today_ml
            # --------------
            print_data(
                resource='water',
                data=max(int(round(water_remaining_today_ml)), 0),
                goal=0
            )

    except KeyError as err:
        print_data(
            resource=str(err).strip("'"),
            data=0,
            goal=1
        )
