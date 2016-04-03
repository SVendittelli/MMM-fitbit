TODO
==
* Front end.
* Update data every 15 minutes.
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
			resources: ['steps','floors']
		}
	]
},
````

Files
--
## Javascript
* `MMM-fitbit.js`
* `node_helper.js`

## Python
* `setup.py` - file to get first access and refresh tokens
* `iniHandler.py` - reads and writes `.ini` files
* `authHandler.py` - file to update tokens
* `getData.py` - file to return data

## .ini
* `credentials.ini`
* `tokens.ini`

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
* Battery Levels?
* Alarms?
* Lifetime stats?
* Friends leaderboard (api buggy, waiting on fix)
