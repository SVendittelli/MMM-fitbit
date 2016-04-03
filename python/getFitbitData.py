#!/usr/bin/env python
import fitbit
import checkTokens

#This is the Fitbit URL to use for the API call
FitbitURL = "https://api.fitbit.com/1/user/-/profile.json"

APICallOK = False
attempts = 0
try:
	while not APICallOK:
		#Make the API call
		AccessToken, RefreshToken = checkTokens.ReadTokens()
		APICallOK, APIResponse = checkTokens.MakeAPICall(FitbitURL, AccessToken, RefreshToken)
		
		attempts += 1
		if attempts > 4:
			raise ValueError("Stopping after 5 failed attempts.")
			break
	
	#Create authorised client and grab step count from one day of steps
	authd_client = fitbit.Fitbit(checkTokens.client_key, checkTokens.client_secret, oauth2=True, access_token=AccessToken, refresh_token=RefreshToken)
	activitySummary = authd_client.activities()['summary'] #Use for steps, floors, distance, active minutes, calories
	activityGoals = authd_client.activities_daily_goal() #Goals for the above
	print "steps: %s" %activitySummary['steps']
	print "mins asleep: %s" %authd_client.sleep()['summary']['totalMinutesAsleep']
	print authd_client.heart()
except ValueError as err:
	print err