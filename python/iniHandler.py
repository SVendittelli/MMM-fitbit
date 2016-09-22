#!/usr/bin/env python
import sys
import os
import json
if (sys.version_info > (3,0)):
	import configparser as ConfigParser
else:
	import ConfigParser

iniDirectory = os.path.dirname(os.path.realpath(__file__)) + '/'
credentialsFile = 'credentials.ini'
credentialParser = ConfigParser.SafeConfigParser()
tokensFile = 'tokens.ini'
tokenParser = ConfigParser.SafeConfigParser()

def print_json(type, message, value=""):
	if value == "":
		#Convert output to json and print (node_helper reads from stdout)
		print(json.dumps({'type': type, 'message': message}))
	else:
		print(json.dumps({'type': type, 'message': {message: value}}))
	#stdout has to be flushed manually to prevent delays in the node helper communication
	sys.stdout.flush()

def print_data(resource, data, goal):
	print(json.dumps({'type': 'data', 'resource': resource, 'values': {'data': data, 'goal': goal}}))
	sys.stdout.flush()

def fileExists(path,file):
	if os.path.isfile(path + file):
		print_json("status","%s exists" %file)
		return True
	else:
		print_json("status","%s does not exist" %file)
		return False

def ReadCredentials():
	#Check if credentials.ini exists
	if not fileExists(iniDirectory, credentialsFile):
		print_json('error', '%s does not exist' %credentialsFile)
		sys.exit(1)
	#Reads app credentials from credentials.ini
	print_json("status", "Reading from %s" %credentialsFile)
	
	try:
		#Open file and read credentials
		credentialParser.read(iniDirectory + credentialsFile)
		client_id = credentialParser.get('Credentials', 'C_ID')
		client_secret = credentialParser.get('Credentials', 'C_SECRET')
	except ConfigParser.NoSectionError:
		#If the credentials file is not correctly formatted
		print_json("error","Cannot read %s" %credentialsFile)
		sys.exit(1)
	else:
		#Return credentials
		print_json("status", "Read of %s successful." %credentialsFile)
		return client_id, client_secret
	
def WriteCredentials(id,secret):
	#Check if credentials.ini exists
	if not fileExists(iniDirectory, credentialsFile):
		print_json('error', '%s does not exist' %credentialsFile)
		sys.exit(1)
	
	print_json("status", "Writing credentials to %s" %credentialsFile)
	print_json("status", "Writing id: %s and secret: %s" %(id, secret))
	
	credentialParser.read(iniDirectory + credentialsFile)
	
	try:
		#Write the credentials to credentials.ini
		credentialParser.set('Credentials', 'C_ID', id)
		credentialParser.set('Credentials', 'C_SECRET', secret)
		with open(iniDirectory + credentialsFile, 'wb') as iniFile:
			credentialParser.write(iniFile)
	except ConfigParser.NoSectionError:
		#If the credentials file is incorrectly formatted
		print_json("error", "%s missing section 'Credentials'" %tokensFile)
		credentialParser.add_section('Credentials')
		with open(iniDirectory + credentialsFile, 'wb') as iniFile:
			credentialParser.write(iniFile)
		WriteCredentials(id,secret)
	else:
		print_json("status", "Credentials write successful")
		
def ReadTokens():
	#Check if tokens.ini exists
	if not fileExists(iniDirectory, tokensFile):
		print_json('error', '%s does not exist' %tokensFile)
		sys.exit(1)
	#Reads tokens from tokens.ini
	print_json("status", "Reading from %s" %tokensFile)
	
	try:
		#Open file and read tokens
		tokenParser.read(iniDirectory + tokensFile)
		AccToken = tokenParser.get('Tokens', 'ACC_TOK')
		RefToken = tokenParser.get('Tokens', 'REF_TOK')
	except ConfigParser.NoSectionError:
		#If the token file is not correctly formatted
		print_json("error","Cannot read %s" %tokensFile)
		sys.exit(1)
	else:
		#Return tokens
		print_json("status", "Read of %s successful." %tokensFile)
		return AccToken, RefToken

def WriteTokens(AccToken,RefToken):
	#Check if tokens.ini exists
	if not fileExists(iniDirectory, tokensFile):
		print_json('error', '%s does not exist' %tokensFile)
		sys.exit(1)
	
	print_json("status", "Writing tokens to %s" %tokensFile)
	print_json("status", "Writing access token: %s and refresh token: %s" %(AccToken, RefToken))
	
	tokenParser.read(iniDirectory + tokensFile)
	
	try:
		#Write the access and refresh tokens tokens.ini
		tokenParser.set('Tokens','REF_TOK',RefToken)
		tokenParser.set('Tokens','ACC_TOK',AccToken)
		with open(iniDirectory + tokensFile, 'wb') as iniFile:
			tokenParser.write(iniFile)
	except ConfigParser.NoSectionError:
		#If the tokens file is incorrectly formatted
		print_json("error", "%s missing section 'Tokens'" %tokensFile)
		tokenParser.add_section('Tokens')
		with open(iniDirectory + tokensFile, 'wb') as iniFile:
			tokenParser.write(iniFile)
		WriteTokens(AccToken,RefToken)
	else:
		print_json("status", "Write of %s successful." %tokensFile)

if __name__ == "__main__":
	WriteCredentials(sys.argv[1],sys.argv[2])