#!/usr/bin/env python
import sys
import os
import ConfigParser
import json

credentialFile = 'credentials.ini'
workingDirectory = './' + os.path.dirname(os.path.relpath(os.path.realpath(__file__))) + '/'

def print_json(type, message):
    # convert to json and print (node helper will read from stdout)
    print(json.dumps({type: message}))
    # stdout has to be flushed manually to prevent delays in the node helper communication
    sys.stdout.flush()

def WriteCredentials(id,key,secret):
	credentialParser = ConfigParser.SafeConfigParser()
	credentialParser.read(workingDirectory + credentialFile)
	
	try:
		credentialParser.set('Credentials', 'C_ID', id)
		credentialParser.set('Credentials', 'C_KEY', key)
		credentialParser.set('Credentials', 'C_SECRET', secret)
		with open(workingDirectory + 'credentials.ini', 'wb') as iniFile:
			credentialParser.write(iniFile)
	except ConfigParser.NoSectionError:
		credentialParser.add_section('Credentials')
		with open(workingDirectory + 'credentials.ini', 'wb') as iniFile:
			credentialParser.write(iniFile)
		setCredentials(id,secret)
	else:
		print_json('status', 'credentials write successful')

def ReadCredentials():
	credentialParser = ConfigParser.SafeConfigParser()
	credentialParser.read(workingDirectory + credentialFile)
	client_id = credentialParser.get('Credentials', 'C_ID')
	client_key = credentialParser.get('Credentials', 'C_KEY')
	client_secret = credentialParser.get('Credentials', 'C_SECRET')
	
	return client_id, client_key, client_secret

if __name__ == '__main__':
	WriteCredentials(sys.argv[1],sys.argv[2],sys.argv[3])