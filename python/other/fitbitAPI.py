#!/usr/bin/env python
#I addapted this code from Geek Dad:
#(http://pdwhomeautomation.blogspot.co.uk/2015/03/using-fitbit-api-on-raspberry-pi-with.html)
#So most of the credit goes to him...

import fitbit
import ConfigParser
import base64
import urllib2
import urllib
import sys
import json
import os
from datetime import datetime, date, time, timedelta

#Get keys and secrets
parser = ConfigParser.SafeConfigParser()
parser.read('./app_access.ini')
client_id = parser.get('Login Parameters', 'C_ID')
consumer_key = parser.get('Login Parameters', 'C_KEY')
consumer_secret = parser.get('Login Parameters', 'C_SECRET')

#Get tokens:
#This is the Fitbit URL to use for the API call
FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

#Use this URL to refresh the access token
TokenURL = "https://api.fitbit.com/oauth2/token"

#Get and write the tokens from here
IniFile = "./tokens.txt"

#Some contants defining API error handling responses
TokenRefreshedOK = "Token refreshed OK"
ErrorInAPI = "Error when making API call that I couldn't handle"

#Get the config from the config file.  This is the access and refresh tokens
def GetConfig():
  #print "Reading from the config file"

  #Open the file
  FileObj = open(IniFile,'r')

  #Read first two lines - first is the access token, second is the refresh token
  AccToken = FileObj.readline()
  RefToken = FileObj.readline()

  #Close the file
  FileObj.close()

  #See if the strings have newline characters on the end.  If so, strip them
  if (AccToken.find("\n") > 0):
    AccToken = AccToken[:-1]
  if (RefToken.find("\n") > 0):
    RefToken = RefToken[:-1]

  #Return values
  return AccToken, RefToken

def WriteConfig(AccToken,RefToken):
  #print "Writing new token to the config file"
  #print "Writing this: " + AccToken + " and " + RefToken

  #Delete the old config file
  os.remove(IniFile)

  #Open and write to the file
  FileObj = open(IniFile,'w')
  FileObj.write(AccToken + "\n")
  FileObj.write(RefToken + "\n")
  FileObj.close()

#Make a HTTP POST to get new tokens
def GetNewAccessToken(RefToken):
  #print "Getting a new access token"

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
    WriteConfig(NewAccessToken,NewRefreshToken)

    print "New access token output >>> " + FullResponse
  except urllib2.URLError as e:
    #Gettin to this part of the code means we got an error
    print "An error was raised when getting the access token.  Need to stop here"
    print e.code
    print e.read()
    sys.exit()

#This makes an API call.  It also catches errors and tries to deal with them
def MakeAPICall(InURL,AccToken,RefToken):
  #Start the request
  req = urllib2.Request(InURL)

  #Add the access token in the header
  req.add_header('Authorization', 'Bearer ' + AccToken)

  #print "I used this access token " + AccToken
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

#Main part of the code
if __name__ == "__main__":
	#Declare these global variables that we'll use for the access and refresh tokens
	AccessToken = ""
	RefreshToken = ""

	#Get the config
	AccessToken, RefreshToken = GetConfig()

	#Make the API call
	APICallOK, APIResponse = MakeAPICall(FitbitURL, AccessToken, RefreshToken)

	if APICallOK:
		#print APIResponse
		
		#Make a authorised client, list activities, and grab the step count.
		authd_client = fitbit.Fitbit(consumer_key, consumer_secret, oauth2=True, access_token=AccessToken, refresh_token=RefreshToken)
		#activityList = authd_client._COLLECTION_RESOURCE('activities')
		#stepCount = activityList['summary']['steps']
		#print stepCount
		timeSeriesSteps = authd_client.time_series('activities/steps',period='1d')
		stepCount = timeSeriesSteps['activities-steps'][0]['value']
		print 'Steps: ' + stepCount
		totalSteps = authd_client.activity_stats(qualifier='')['lifetime']['total']['steps']
		print 'Lifetime steps: ' + str(totalSteps)
		userProfile = authd_client.user_profile_get()
		startDate = userProfile['user']['memberSince']
		print 'Member since: ' + startDate
		totalDays = abs((datetime.today() - datetime.strptime(startDate, "%Y-%m-%d")).days)
		print 'Average Steps (per day): ' + str(int(round(float(totalSteps) / totalDays)))
		minsAsleep = authd_client.get_sleep(datetime.today())['summary']['totalMinutesAsleep']
		hoursAsleep = int(minsAsleep / 60.0)
		print 'Time asleep: ' + str(hoursAsleep) + ':' + str(minsAsleep % 60)
		
		#Write the step count to a file
		#os.remove("./stepCount.txt")
		#stepCountFile = open("./stepCount.txt",'w')
		#stepCountFile.write(str(stepCount))
		#stepCountFile.close()
	else:
		if (APIResponse == TokenRefreshedOK):
			print "Refreshed the access token.  Can go again"
		else:
			print ErrorInAPI