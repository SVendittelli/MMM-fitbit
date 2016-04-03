#!/usr/bin/env python
import fitbit
from iniHandler import print_json, ReadCredentials, ReadTokens
from authHandler import *

DataList = ['steps', 'floors', 'caloriesOut']
GoalsList = ['steps', 'floors', 'caloriesOut', 'distance', 'activeMinutes']

#This is the Fitbit URL to use for the API call
FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

#Get credentials
ClientID, ClientKey, ClientSecret = ReadCredentials()

APICallOK = False
try:
	while not APICallOK:
		#Get tokens
		AccessToken, RefreshToken = ReadTokens()
		#Make the API call
		APICallOK, TokensOK, APIResponse = MakeAPICall(FitbitURL, AccessToken, RefreshToken)
	
		if not TokensOK:
			raise ValueError("Error in API")
	
	#Create authorised client and grab step count from one day of steps
	authdClient = fitbit.Fitbit(ClientKey, ClientSecret, oauth2=True, access_token=AccessToken, refresh_token=RefreshToken)
	activitySummary = authdClient.activities()['summary'] #Use for steps, floors, calories. Adapt for distance, active minutes
	activityGoals = authdClient.activities_daily_goal()['goals'] #Goals for steps, floors, calories, distance, active minutes
	sleepSummary = authdClient.sleep()['summary']
	heartTimeSeries = authdClient.time_series('activities/heart',period='1d')
	
	#Format time asleep
	totalMinutesAsleep = sleepSummary['totalMinutesAsleep']
	hoursAsleep = int(totalMinutesAsleep / 60)
	minutesAsleep = totalMinutesAsleep % 60
	totalTimeAsleep = ('0%i:%i' %(hoursAsleep,minutesAsleep)) if (totalMinutesAsleep < 600) else ('%i:%i' %(hoursAsleep,minutesAsleep))
	
	#Calculate active minutes
	activeMinutes = activitySummary['fairlyActiveMinutes'] + activitySummary['veryActiveMinutes']
	
	#Output data
	for data in DataList:
		print_json('data',data,activitySummary[data])
	
	print_json('data','distance',activitySummary['distances'][0]['distance'])
	print_json('data','activeMinutes',activeMinutes)
	print_json('data','sleep',totalTimeAsleep)
	print_json('data','heart',heartTimeSeries['activities-heart'][0]['value']['restingHeartRate'])
	
	#Output goals
	for goal in GoalsList:
		print_json('goal',goal,activityGoals[goal])
except ValueError as err:
	print_json('error', err)