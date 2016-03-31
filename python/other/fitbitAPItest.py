import base64
import urllib2
import urllib
import sys
import json
import os

#This is the Fitbit URL to use for the API call
FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

#Use this URL to refresh the access token
TokenURL = "https://api.fitbit.com/oauth2/token"

#Get and write the tokens from here
IniFile = "./tokens.txt"

#From the developer site
OAuthTwoClientID = "227NQG"
ClientOrConsumerSecret = "e70983f95affff6262d94c9e40cf6d66"

#Some contants defining API error handling responses
TokenRefreshedOK = "Token refreshed OK"
ErrorInAPI = "Error when making API call that I couldn't handle"

#Get the config from the config file.  This is the access and refresh tokens
def GetConfig():
  print "Reading from the config file"

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
  print "Writing new token to the config file"
  print "Writing this: " + AccToken + " and " + RefToken

  #Delete the old config file
  os.remove(IniFile)

  #Open and write to the file
  FileObj = open(IniFile,'w')
  FileObj.write(AccToken + "\n")
  FileObj.write(RefToken + "\n")
  FileObj.close()

#Make a HTTP POST to get new tokens
def GetNewAccessToken(RefToken):
  print "Getting a new access token"

  #Form the data payload
  BodyText = {'grant_type' : 'refresh_token',
              'refresh_token' : RefToken}
  #URL Encode it
  BodyURLEncoded = urllib.urlencode(BodyText)
  print "Using this as the body when getting access token >>" + BodyURLEncoded

  #Start the request
  tokenreq = urllib2.Request(TokenURL,BodyURLEncoded)

  #Add the headers, first we base64 encode the client id and client secret with a : inbetween and create the authorisation header
  tokenreq.add_header('Authorization', 'Basic ' + base64.b64encode(OAuthTwoClientID + ":" + ClientOrConsumerSecret))
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

#Main part of the code
#Declare these global variables that we'll use for the access and refresh tokens
AccessToken = ""
RefreshToken = ""

print "Fitbit API Test Code"

#Get the config
AccessToken, RefreshToken = GetConfig()

#Make the API call
APICallOK, APIResponse = MakeAPICall(FitbitURL, AccessToken, RefreshToken)

if APICallOK:
  print APIResponse
else:
  if (APIResponse == TokenRefreshedOK):
    print "Refreshed the access token.  Can go again"
  else:
   print ErrorInAPI