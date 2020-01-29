import sys
import os
import json

debug_mode = False

client_id = None


def set_debug_state(enable_debug):
    global debug_mode
    debug_mode = enable_debug


# Convert print output to json (node_helper reads from stdout)
def print_json(type, message, value=""):
    if type == "debug" and not debug_mode:
        return

    if value == "":
        print((json.dumps({"type": type, "message": message})))
    else:
        print((json.dumps({"type": type, "message": {message: value}})))


def set_token_client_id(id_to_set):
    global client_id
    assert(id_to_set is not None)
    print_json("debug", "Setting client ID", id_to_set)
    client_id = id_to_set


def tokens_file_name():
    assert(client_id is not None)
    return "tokens-" + str(client_id) + ".json"


def tokens_file_path():
    tokens_dir = os.path.dirname(os.path.realpath(__file__)) + "/"
    return tokens_dir + tokens_file_name()


def tokens_file_exists():
    if os.path.isfile(tokens_file_path()):
        print_json("debug", "'%s' exists" % tokens_file_name())
        return True
    else:
        print_json("debug", "'%s' does not exist" % tokens_file_name())
        return False


def read_tokens():
    print_json("status", "Attempting to read tokens")

    # Check if tokens file exists
    if not tokens_file_exists():
        print_json("error", "'%s' does not exist" % tokens_file_name())
        sys.exit(1)

    # Reads tokens from tokens file
    print_json("debug", "Reading from '%s'" % tokens_file_name())

    try:
        AccToken = None
        RefToken = None
        Expires = None

        # Open file and read tokens
        with open(tokens_file_path()) as tokens_f:
            data = json.load(tokens_f)

            AccToken = data["ACC_TOK"]
            RefToken = data["REF_TOK"]
            Expires = data["EXPIRES_AT"]

    except:
        print_json("error", "Cannot read '%s'" % tokens_file_name())
        sys.exit(1)

    if AccToken is None:
        print_json("error", "Cannot read access_token from '%s'" % tokens_file_name())
        sys.exit(1)

    if RefToken is None:
        print_json("error", "Cannot read refresh_token from '%s'" % tokens_file_name())
        sys.exit(1)

    if Expires is None:
        print_json("error", "Cannot read expires_at from '%s'" % tokens_file_name())
        sys.exit(1)

    # Return tokens
    print_json("status", "Tokens read successfully")
    return AccToken, RefToken, Expires


def write_tokens(AccToken, RefToken, Expires=None):
    print_json("status", "Attempting to write tokens")

    print_json("debug", "Writing tokens to '%s'" % tokens_file_name())

    debug_print_out = ("Writing access token: '%s', "
                       "refresh token: '%s'"
                       " and expiry Unix timestamp: '%s'" % (
                           AccToken, RefToken, Expires)
                       )
    print_json("debug", debug_print_out)

    data = {}
    data["ACC_TOK"] = AccToken
    data["REF_TOK"] = RefToken
    data["EXPIRES_AT"] = Expires

    with open(tokens_file_path(), "w") as tokens_f:
        json.dump(data, tokens_f)

    print_json("status", "Tokens written successfully")
