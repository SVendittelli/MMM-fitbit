TODO
==
* Fix need for super user privileges
* Formatting for regions other than central ones
* _Cleanup the code_

## Sample config:
````javascript
{
	module: 'MMM-fitbit',
	position: 'top_center',
	config: [
		credentials: {
			client_id:
			client_key:
			client_secret:
		},
		resources: [
			'steps',
			'floors',
			'caloriesOut',
			'distance',
			'activeMinutes',
			'sleep',
			'heart'
		]
	]
},
````

Files
--
### Javascript
* `MMM-fitbit.js`
* `node_helper.js`

### Python
* `setupAccess.py` - file to get first access and refresh tokens
* `iniHandler.py` - reads and writes `.ini` files
* `authHandler.py` - file to update tokens
* `getData.py` - file to return data

### .ini
* `credentials.ini`
* `tokens.ini`

### CSS
* MMM-fitbit.css

Supported Data
--
* Steps
* Floors
* Calories
* Total distance
* Sleep (api missing goals)
* Resting heartrate
* Active minutes

**WIP**:
* Battery Levels? (need device details, ask user for device?)
* Alarms? (see above)
* Lifetime stats? (interesting but doesn't fit with others)
* Friends leaderboard (api buggy, waiting on fix)
