#!/usr/bin/env python
import fitbit
from fitbit.api import FitbitOauth2Client
import json
from iniHandler import print_data, print_json, ReadCredentials, ReadTokens, WriteTokens

if __name__ == "__main__":
	ResourceTypes = ['steps', 'floors', 'caloriesOut']

	#This is the Fitbit URL to use for the API call
	FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

	#Get credentials
	ClientID, ClientSecret = ReadCredentials()
	AccessToken, RefreshToken, ExpiresAt = ReadTokens()

	def WriteTokenWrapper(token):
		print_data(token,0,1)
		acc_tok = token['access_token']
		ref_tok = token['refresh_token']
		expires_at = token['expires_at']
		WriteTokens(acc_tok,ref_tok,expires_at)
	
	#Create authorised client and grab step count from one day of steps
	authdClient = fitbit.Fitbit(ClientID, ClientSecret, oauth2=True, access_token=AccessToken, refresh_token=RefreshToken,
				expires_at=ExpiresAt, refresh_cb=WriteTokenWrapper, redirect_uri='http://127.0.0.1:8080/')
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
			print_data(resource,activitySummary[resource],activityGoals[resource])
		
		print_data('distance',activitySummary['distances'][0]['distance'],activityGoals['distance'])
		print_data('activeMinutes',activeMinutes,activityGoals['activeMinutes'])
		print_data('sleep',totalMinutesAsleep,480)
		print_data('heart',heartTimeSeries['activities-heart'][0]['value']['restingHeartRate'],60)
	except KeyError as err:
		print_data(str(err).strip("'"),0,1)