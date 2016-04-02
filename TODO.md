TODO
==
* Get goals for steps.
* Update data every 15 minutes.
* Change to JSON rather than text from the Python output.
* Get initial tokens automatically?
* Update the step count every 15 minutes.
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
			data: ['steps','floors']
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

**WIP**:
* Floors
* Calories
* Total distance
* Sleep
* Resting heartrate
* Active minutes?
* Battery Levels?
* Alarms?
* Friends leaderboard (Hard)
