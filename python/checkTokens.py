#!/usr/bin/env python
#I addapted this code from Geek Dad:
#(http://pdwhomeautomation.blogspot.co.uk/2015/03/using-fitbit-api-on-raspberry-pi-with.html)
#So most of the credit goes to him...

import ConfigParser
import base64
import urllib2
import urllib
import json

#Where the ini files are stored
workingDirectory = './modules/MMM-fitbit/python/'

#Get keys and secrets
keyParser = ConfigParser.SafeConfigParser()
keyParser.read(workingDirectory + 'app_access.ini')
client_id = keyParser.get('Login Parameters', 'C_ID')
consumer_key = keyParser.get('Login Parameters', 'C_KEY')
consumer_secret = keyParser.get('Login Parameters', 'C_SECRET')

#This is the Fitbit URL to use for the API call
FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

#Use this URL to refresh the access token
TokenURL = "https://api.fitbit.com/oauth2/token"

#Get and write the tokens from here
IniFile = "tokens.ini"

#Some contants defining API error handling responses
TokenRefreshedOK = "Token refreshed OK"
ErrorInAPI = "Error when making API call that I couldn't handle"

#Get the tokens from the tokens.ini file.  This is the access and refresh tokens
def ReadTokens():
	print "Reading from the tokens file..."
	
	#try:
	tokenParser = ConfigParser.SafeConfigParser()
	tokenParser.read(workingDirectory + IniFile)
	AccToken = tokenParser.get('Tokens', 'ACC_TOK')
	RefToken = tokenParser.get('Tokens', 'REF_TOK')
	#except ConfigParser.NoSectionError:
	#raise ValueError("tokens.ini file not found.")
	#else:
	#Return values
	print "Read successful."
	return AccToken, RefToken

def WriteTokens(AccToken,RefToken):
	print "Writing new token to the config file..."
	print "Writing this: " + AccToken + " and " + RefToken
	
	tokenParser = ConfigParser.SafeConfigParser()
	tokenParser.read(workingDirectory + IniFile)
	
	try:
		tokenParser.set('Tokens','REF_TOK',RefToken)
		tokenParser.set('Tokens','ACC_TOK',AccToken)
		with open(workingDirectory + IniFile, 'wb') as tokenFile:
			tokenParser.write(tokenFile)
	except ConfigParser.NoSectionError:
		print 'No Section Error'
		tokenParser.add_section('Tokens')
		with open(workingDirectory + IniFile, 'wb') as tokenFile:
			tokenParser.write(tokenFile)
		WriteTokens(AccToken,RefToken)
	else:
		print "Write successful."

#Make a HTTP POST to get new tokens
def GetNewAccessToken(RefToken):
	print "Getting a new access token..."
	
	#Form the data payload
	BodyText = {'grant_type' : 'refresh_token',
				'refresh_token' : RefToken}
	#URL Encode it
	BodyURLEncoded = urllib.urlencode(BodyText)
	#print "Using this as the body when getting access token >>" + BodyURLEncoded
	
	#Start the request
	tokenreq = urllib2.Request(TokenURL,BodyURLEncoded)
	
	#Add the headers, first we base64 encode the client id and client secret with a : inbetween and create the authorisation header
	tokenreq.add_header('Authorization', 'Basic ' + base64.b64encode(client_id + ":" + consumer_secret))
	tokenreq.add_header('Content-Type', 'application/x-www-form-urlencoded')
	
	#Fire off the request
	try:
		tokenresponse = urllib2.urlopen(tokenreq)
	
		#See what we got back.  If it's this part of  the code it was OK
		FullResponse = tokenresponse.read()
		
		#Need to pick out the access token and write it to the config file.  Use a JSON manipluation module
		ResponseJSON = json.loads(FullResponse)
		
		#Read the access token as a string
		NewAccessToken = str(ResponseJSON['access_token'])
		NewRefreshToken = str(ResponseJSON['refresh_token'])
		#Write the access token to the ini file
		WriteTokens(NewAccessToken,NewRefreshToken)
		
		print "New access token output >>> " + FullResponse
	except urllib2.URLError as e:
		#Gettin to this part of the code means we got an error
		print "An error was raised when getting the access token.  Need to stop here."
		print e.code
		print e.read()
		sys.exit()

#This makes an API call.  It also catches errors and tries to deal with them
def MakeAPICall(InURL,AccToken,RefToken):
	#Start the request
	req = urllib2.Request(InURL)
	
	#Add the access token in the header
	req.add_header('Authorization', 'Bearer ' + AccToken)
	
	print "I used this access token " + AccToken
	#Fire off the request
	try:
		#Do the request
		response = urllib2.urlopen(req)
		#Read the response
		FullResponse = response.read()
		
		#Return values
		return True, FullResponse
	#Catch errors, e.g. A 401 error that signifies the need for a new access token
	except urllib2.URLError as e:
		print "Got this HTTP error: " + str(e.code)
		HTTPErrorMessage = e.read()
		print "This was in the HTTP error message: " + HTTPErrorMessage
		#See what the error was
		if (e.code == 401) and (HTTPErrorMessage.find("expired_token") > 0):
			GetNewAccessToken(RefToken)
			return False, TokenRefreshedOK
		#Return that this didn't work, allowing the calling function to handle it
		return False, ErrorInAPI