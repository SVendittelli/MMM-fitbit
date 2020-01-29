#!/usr/bin/env python
import sys
import os
import json
if (sys.version_info >= (3, 2)):
    from configparser import ConfigParser
    from configparser import NoSectionError
elif (sys.version_info >= (3, 0)):
    from configparser import SafeConfigParser as ConfigParser
    from configparser import NoSectionError
else:
    from ConfigParser import SafeConfigParser as ConfigParser
    from ConfigParser import NoSectionError

ini_directory = os.path.dirname(os.path.realpath(__file__)) + "/"
token_parser = ConfigParser()

debug_mode = False

client_id = None


def set_client_id(id_to_set):
    global client_id
    print_json("debug", "Setting client ID", id_to_set)
    client_id = id_to_set


def set_debug_state(enable_debug):
    global debug_mode
    debug_mode = enable_debug


def tokens_file():
    assert(client_id is not None)
    return "tokens-" + str(client_id) + ".ini"


def print_json(type, message, value=""):
    if type == "debug" and not debug_mode:
        return

    if value == "":
        # Convert output to json and print (node_helper reads from stdout)
        print(json.dumps({"type": type, "message": message}))
    else:
        print(json.dumps({"type": type, "message": {message: value}}))
    # stdout has to be flushed manually to prevent delays in the node helper communication
    sys.stdout.flush()


def print_data(resource, data, goal, debug=False):
    if debug is True and not debug_mode:
        return

    print(json.dumps({"type": "data", "resource": resource,
                      "values": {"data": data, "goal": goal}}))
    sys.stdout.flush()


def file_exists(path, file):
    if os.path.isfile(path + file):
        print_json("debug", "'%s' exists" % file)
        return True
    else:
        print_json("debug", "'%s' does not exist" % file)
        return False


def read_tokens():
    print_json("status", "Attempting to read tokens")

    # Check if tokens.ini exists
    if not file_exists(ini_directory, tokens_file()):
        print_json("error", "'%s' does not exist" % tokens_file())
        sys.exit(1)
    # Reads tokens from tokens.ini
    print_json("debug", "Reading from '%s'" % tokens_file())

    try:
        # Open file and read tokens
        token_parser.read(ini_directory + tokens_file())
        AccToken = token_parser.get("Tokens", "ACC_TOK")
        RefToken = token_parser.get("Tokens", "REF_TOK")
        Expires = int(token_parser.get("Tokens", "EXPIRES_AT"))
    except NoSectionError:
        # If the token file is not correctly formatted
        print_json("error", "Cannot read '%s'" % tokens_file())
        sys.exit(1)
    else:
        # Return tokens
        print_json("status", "Tokens read successfully")
        return AccToken, RefToken, Expires


def write_tokens(AccToken, RefToken, Expires=None):
    print_json("status", "Attempting to write tokens")

    def fix_bad_tokens_formatting():
        # If the tokens file is incorrectly formatted
        print_json("error", "'%s' missing section 'Tokens'" % tokens_file())
        token_parser.add_section("Tokens")
        with open(ini_directory + tokens_file(), "wb") as iniFile:
            token_parser.write(iniFile)

    # If tokens.ini does not exist,
    # create it with correct formatting and try again
    if not file_exists(ini_directory, tokens_file()):
        print_json("error", "'%s' does not exist" % tokens_file())
        fix_bad_tokens_formatting()
        write_tokens(AccToken, RefToken, Expires)
        return

    print_json("debug", "Writing tokens to '%s'" % tokens_file())

    debug_print_out = ("Writing access token: '%s', "
                       "refresh token: '%s'"
                       " and expiry Unix timestamp: '%s'" % (
                           AccToken, RefToken, Expires)
                       )
    print_json("debug", debug_print_out)

    token_parser.read(ini_directory + tokens_file())

    try:
        # Write token data to tokens.ini
        token_parser.set("Tokens", "REF_TOK", RefToken)
        token_parser.set("Tokens", "ACC_TOK", AccToken)

        if Expires:
            token_parser.set("Tokens", "EXPIRES_AT", str(int(Expires)))

        print_json("debug", "Items to write to file: '%s'" %
                   token_parser.items("Tokens"))

        with open(ini_directory + tokens_file(), "wb") as iniFile:
            token_parser.write(iniFile)

    except NoSectionError:
        # Add section if the tokens file is incorrectly formatted
        fix_bad_tokens_formatting()
        write_tokens(AccToken, RefToken, Expires)

    else:
        print_json("status", "Tokens written successfully")
