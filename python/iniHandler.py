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

iniDirectory = os.path.dirname(os.path.realpath(__file__)) + "/"
credentialsFile = "credentials.ini"
credentialParser = ConfigParser()
tokensFile = "tokens.ini"
tokenParser = ConfigParser()

debug_mode = False


def set_debug_state(enable_debug):
    global debug_mode
    debug_mode = enable_debug


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


def fileExists(path, file):
    if os.path.isfile(path + file):
        print_json("debug", "'%s' exists" % file)
        return True
    else:
        print_json("debug", "'%s' does not exist" % file)
        return False


def ReadCredentials():
    print_json("status", "Attempting to read credentials")

    # Check if credentials.ini exists
    if not fileExists(iniDirectory, credentialsFile):
        print_json("error", "'%s' does not exist" % credentialsFile)
        sys.exit(1)
    # Reads app credentials from credentials.ini
    print_json("debug", "Reading from '%s'" % credentialsFile)

    try:
        # Open file and read credentials
        credentialParser.read(iniDirectory + credentialsFile)
        client_id = credentialParser.get("Credentials", "C_ID")
        client_secret = credentialParser.get("Credentials", "C_SECRET")
    except NoSectionError:
        # If the credentials file is not correctly formatted
        print_json("error", "Cannot read '%s'" % credentialsFile)
        sys.exit(1)
    else:
        # Return credentials
        print_json("status", "Credentials read successfully")
        return client_id, client_secret


def WriteCredentials(id, secret):
    print_json("status", "Attempting to write credentials")

    def fixBadCredentialsFormatting():
        # If the credentials file is incorrectly formatted
        print_json("error", "'%s' missing section 'Credentials'" %
                   credentialsFile)
        credentialParser.add_section("Credentials")
        with open(iniDirectory + credentialsFile, "wb") as iniFile:
            credentialParser.write(iniFile)

    # If credentials.ini does not exist,
    # create it with correct formatting and try again
    if not fileExists(iniDirectory, credentialsFile):
        print_json("error", "'%s' does not exist" % credentialsFile)
        fixBadCredentialsFormatting()
        WriteCredentials(id, secret)
        return

    print_json("debug", "Writing credentials to '%s'" % credentialsFile)
    print_json("debug", "Writing id: '%s' and secret: '%s'" % (id, secret))

    credentialParser.read(iniDirectory + credentialsFile)

    try:
        # Write the credentials to credentials.ini
        credentialParser.set("Credentials", "C_ID", id)
        credentialParser.set("Credentials", "C_SECRET", secret)
        with open(iniDirectory + credentialsFile, "wb") as iniFile:
            credentialParser.write(iniFile)
    except NoSectionError:
        # Add section if the credentials file is incorrectly formatted
        fixBadCredentialsFormatting()
        WriteCredentials(id, secret)
    else:
        print_json("status", "Credentials written successfully")


def ReadTokens():
    print_json("status", "Attempting to read tokens")

    # Check if tokens.ini exists
    if not fileExists(iniDirectory, tokensFile):
        print_json("error", "'%s' does not exist" % tokensFile)
        sys.exit(1)
    # Reads tokens from tokens.ini
    print_json("debug", "Reading from '%s'" % tokensFile)

    try:
        # Open file and read tokens
        tokenParser.read(iniDirectory + tokensFile)
        AccToken = tokenParser.get("Tokens", "ACC_TOK")
        RefToken = tokenParser.get("Tokens", "REF_TOK")
        Expires = int(tokenParser.get("Tokens", "EXPIRES_AT"))
    except NoSectionError:
        # If the token file is not correctly formatted
        print_json("error", "Cannot read '%s'" % tokensFile)
        sys.exit(1)
    else:
        # Return tokens
        print_json("status", "Tokens read successfully")
        return AccToken, RefToken, Expires


def WriteTokens(AccToken, RefToken, Expires=None):
    print_json("status", "Attempting to write tokens")

    def fixBadTokensFormatting():
        # If the tokens file is incorrectly formatted
        print_json("error", "'%s' missing section 'Tokens'" % tokensFile)
        tokenParser.add_section("Tokens")
        with open(iniDirectory + tokensFile, "wb") as iniFile:
            tokenParser.write(iniFile)

    # If tokens.ini does not exist,
    # create it with correct formatting and try again
    if not fileExists(iniDirectory, tokensFile):
        print_json("error", "'%s' does not exist" % tokensFile)
        fixBadTokensFormatting()
        WriteTokens(AccToken, RefToken, Expires)
        return

    print_json("debug", "Writing tokens to '%s'" % tokensFile)

    debug_print_out = ("Writing access token: '%s', "
                       "refresh token: '%s'"
                       " and expiry Unix timestamp: '%s'" % (
                           AccToken, RefToken, Expires)
                       )
    print_json("debug", debug_print_out)

    tokenParser.read(iniDirectory + tokensFile)

    try:
        # Write token credentials to tokens.ini
        tokenParser.set("Tokens", "REF_TOK", RefToken)
        tokenParser.set("Tokens", "ACC_TOK", AccToken)

        if Expires:
            tokenParser.set("Tokens", "EXPIRES_AT", str(int(Expires)))

        print_json("debug", "Items to write to file: '%s'" %
                   tokenParser.items("Tokens"))

        with open(iniDirectory + tokensFile, "wb") as iniFile:
            tokenParser.write(iniFile)

    except NoSectionError:
        # Add section if the tokens file is incorrectly formatted
        fixBadTokensFormatting()
        WriteTokens(AccToken, RefToken, Expires)

    else:
        print_json("status", "Tokens written successfully")


if __name__ == "__main__":
    WriteCredentials(sys.argv[1], sys.argv[2])
