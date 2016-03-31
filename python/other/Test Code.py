#Main part of the code
if __name__ == "__main__":
	#Declare these global variables that we'll use for the access and refresh tokens
	AccessToken = ""
	RefreshToken = ""

	#Get the config
	AccessToken, RefreshToken = ReadTokens()

	#Make the API call
	APICallOK, APIResponse = MakeAPICall(FitbitURL, AccessToken, RefreshToken)

	if APICallOK:
		print APIResponse
		
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
			print "Refreshed the access token.  Running again..."
		else:
			print ErrorInAPI