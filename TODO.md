TODO
==
* Get goals for steps
* Update data every 15 minutes

## Sample config:
````javascript
{
	module: 'MMM-fitbit',
	position: 'top_center',
	config: [
		{
			client_id:
			client_secret:
			display: ['steps','sleep']
		}
	]
},````

Files
--
## Javascript
* `MMM-fitbit.js`
* `node_helper.js`

## Python
* `setCredenitals.py`
* `clientAuth.py` - file to get first access and refresh tokens
* `tokens.py` - file to update tokens
* `getData.py` - file to return data

## .ini
* `credentials.ini`
* `tokens.ini`

Support
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
