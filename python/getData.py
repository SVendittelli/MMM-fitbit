#!/usr/bin/env python
import fitbit
import json
from iniHandler import PrintData, PrintJSON, ReadCredentials, ReadTokens
from authHandler import *

if __name__ == "__main__":
	ResourceTypes = ['steps', 'floors', 'caloriesOut']

	#This is the Fitbit URL to use for the API call
	FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

	#Get credentials
	ClientID, ClientSecret = ReadCredentials()

	APICallOK = False
	while not APICallOK:
		#Get tokens
		AccessToken, RefreshToken = ReadTokens()
		#Make the API call
		APICallOK, TokensOK, APIResponse = MakeAPICall(FitbitURL, AccessToken, RefreshToken)
		
		PrintJSON('status',APIResponse)
		if not TokensOK:
			sys.exit(1)
	
	#Create authorised client and grab step count from one day of steps
	authdClient = fitbit.Fitbit(ClientID, ClientSecret, oauth2=True, access_token=AccessToken, refresh_token=RefreshToken)
	activityList = authdClient.activities()
	try:
		activitySummary = activityList['summary'] #Use for steps, floors, calories. Adapt for distance, active minutes
		activityGoals = activityList['goals'] #Goals for steps, floors, calories, distance, active minutes
		sleepSummary = authdClient.sleep()['summary']
		heartTimeSeries = authdClient.time_series('activities/heart',period='1d')
		totalMinutesAsleep = sleepSummary['totalMinutesAsleep']
		
		#Calculate active minutes
		activeMinutes = activitySummary['fairlyActiveMinutes'] + activitySummary['veryActiveMinutes']
		
		for resource in ResourceTypes:
			PrintData(resource,activitySummary[resource],activityGoals[resource])
		
		PrintData('distance',activitySummary['distances'][0]['distance'],activityGoals['distance'])
		PrintData('activeMinutes',activeMinutes,activityGoals['activeMinutes'])
		PrintData('sleep',totalMinutesAsleep,480)
		PrintData('heart',heartTimeSeries['activities-heart'][0]['value']['restingHeartRate'],60)
	except KeyError as err:
		PrintData(str(err).strip("'"),0,1)