#!/usr/bin/env python
#I adapted this code from Geek Dad:
#(http://pdwhomeautomation.blogspot.co.uk/2015/03/using-fitbit-api-on-raspberry-pi-with.html)
import base64
import urllib
import urllib2
import json
import os
import sys

from iniHandler import print_json, ReadCredentials, WriteTokens

#Get credentials from file
client_id, client_secret = ReadCredentials()

#URL to refresh the access token
TokenURL = "https://api.fitbit.com/oauth2/token"

#Some reponces defining API error handling responses
Authorised = "Tokens valid"
TokenRefreshedOK = "Token refreshed OK"
Reauthorise = "Invalid token, reauthorise fitbit API"
ErrorInAPI = "Error when making API call that I couldn't handle"

#Make a HTTP POST to get new tokens
def GetNewAccessToken(RefToken):
	print_json('status','Getting a new access token')
	
	#Form the data payload
	BodyText = {'grant_type' : 'refresh_token',
				'refresh_token' : RefToken}
	#URL Encode it
	BodyURLEncoded = urllib.urlencode(BodyText)
	#print "Using this as the body when getting access token >>" + BodyURLEncoded
	
	#Start the request
	tokenreq = urllib2.Request(TokenURL,BodyURLEncoded)
	
	#Add the headers, first we base64 encode the client id and client secret with a : inbetween and create the authorisation header
	tokenreq.add_header('Authorization', 'Basic ' + base64.b64encode(client_id + ":" + client_secret))
	tokenreq.add_header('Content-Type', 'application/x-www-form-urlencoded')
	
	#Fire off the request
	try:
		tokenresponse = urllib2.urlopen(tokenreq)
		
		#See what we got back. If it's this part of the code it was OK
		FullResponse = tokenresponse.read()
		
		#Use JSON to extract tokens
		ResponseJSON = json.loads(FullResponse)
		
		#Read the access token as a string
		NewAccessToken = str(ResponseJSON['access_token'])
		NewRefreshToken = str(ResponseJSON['refresh_token'])
		#print ResponseJSON['expires_at']
		#Write the access token to the ini file
		WriteTokens(NewAccessToken,NewRefreshToken)
		
		print_json('status', 'Tokens refreshed')
	except urllib2.URLError as err:
		print_json('error', 'Error getting new access token')
		print_json('error', err.code, json.loads(err.read()))
		sys.exit(1)

#This makes an API call. It also catches errors and tries to deal with them
def MakeAPICall(InURL,AccToken,RefToken):
	#Start forming the request
	print_json('status', 'Making API call')
	req = urllib2.Request(InURL)
	
	#Add the access token in the header
	req.add_header('Authorization', 'Bearer %s' %AccToken)
	
	#Fire off the request
	try:
		response = urllib2.urlopen(req)
		#Read the response
		FullResponse = response.read()
		
		#Return values for successful request, tokens good, and the data recieved
		print_json('status', 'API call okay')
		return True, True, Authorised
	#Catch errors, e.g. A 401 error that signifies the need for a new access token
	except urllib2.URLError as err:
		HTTPErrorMessage = err.read()
		print_json('error', err.code, json.loads(HTTPErrorMessage))
		#See what the error was
		if (err.code == 401) and (HTTPErrorMessage.find("expired_token") > 0):
			GetNewAccessToken(RefToken)
			print_json('status', 'Can run again')
			return False, True, TokenRefreshedOK
		if (err.code == 401) and (HTTPErrorMessage.find("invalid_token") > 0):
			return False, False, Reauthorise
		#Return that this didn't work, allowing the calling function to handle it
		print_json('status', 'API call failed')
		return False, False, ErrorInAPI