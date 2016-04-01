#!/usr/bin/env python
import sys
import ConfigParser
import json

def print_json(type, message):
    # convert to json and print (node helper will read from stdout)
    print(json.dumps({type: message}))
    # stdout has to be flushed manually to prevent delays in the node helper communication
    sys.stdout.flush()

def setCredentials(id,key,secret):
	workingDirectory = './modules/MMM-fitbit/python/'
	credentialParser = ConfigParser.SafeConfigParser()
	credentialParser.read(workingDirectory + 'credentials.ini')
	
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

if __name__ == '__main__':
	setCredentials(sys.argv[1],sys.argv[2],sys.argv[3])