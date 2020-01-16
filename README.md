MMM-Fitbit2
===
### _Current Development Status: Work In Progress_

[MagicMirror](https://github.com/MichMich/MagicMirror) Module for displaying Fitbit data, retrieved from Fitbit API ([https://api.fitbit.com](https://dev.fitbit.com/build/reference/web-api/)).

![](screenshot.png)

**Note: this module requires that you set up your own "Fitbit app" using a free Fitbit account, in order to generate OAuth 2.0 credentials for accessing your data from Fitbit.**

This extends upon SVendittelli's original [MMM-fitbit](https://github.com/SVendittelli/MMM-fitbit) module and intends to build on top of the following changes that were incorporated from the efforts of others who forked the original repository:

* adding weight data ([engeld's fork](https://github.com/engeld/MMM-fitbit))
* updating python-fitbit to 0.3.0 ([shbatm's fork](https://github.com/shbatm/MMM-fitbit))
* automatic re-authorisation when tokens have expired ([shbatm's fork](https://github.com/shbatm/MMM-fitbit))

Dependencies
---
* [python-shell](https://www.npmjs.com/package/python-shell) --- `npm install python-shell@0.5.0`
* [python-fitbit](https://github.com/orcasgit/python-fitbit) --- `sudo pip install -r python/fitbit/requirements.txt`

Setup
---
* As with all modules, use `git clone <this url>` in the `modules` directory to download the module
* Go to [Fitbit](https://dev.fitbit.com/) to register a new app (sign in with your Fitbit account)
	* Give your app a catchy name and description
	* Your personal website, organisation, and organisation website can be whatever you like
	* Check browser and personal for OAuth settings
	* Callback URL **MUST BE** `http://127.0.0.1:8080/`
	* Give your app read & write permissions (read-only untested)
	* Note your:
		* "OAuth 2.0 Client ID" --- (client_id)
		* "Client (Consumer) Secret" --- (client_secret)
	* (You can access these again later via manage my apps at the same link as above)
* Navigate to `MMM-Fitbit2` in the modules directory
* Install dependancies using the listed commands
* Navigate to the `python` directory in `MMM-Fitbit2`
* Create blank files `tokens.ini` and `credentials.ini` or duplicate their `.sample` files
* Via the command line on your Pi (**NOT via SSH**), run `sudo python setupAccess.py`. You must either:
	* Pass it your client_id and client_secret as arguments
	* Run it without arguments and have it read from `credentials.ini` (you can use this if you have already setup the module but need a fresh set of tokens)
	* Run it without arguments and enter your client_id and client_secret when prompted
	* **IMPORTANT NOTE** MagicMirror² can not be running when you run the `setupAccess.py` script since it uses the same port: `8080`. After running setup, you can restart MM².
* Log in using your Fitbit credentials (if you are not already) and allow access to all options (if you do not some features may not work, but you may revoke app access and re-run `sudo python setupAccess.py` to change these).
* Add the example config to your config (entering relevant credentials)
* Start your MagicMirror!

Config
---
### Example
````javascript
{
		module: 'MMM-Fitbit2',
		position: 'top_center',
		config: {
				credentials: {
						client_id: <client_id>,
						client_secret: <client_secret>,
				},
				resources: [
						'steps',
						'caloriesOut',
						'distance',
						'activeMinutes',
						'floors',
						'restingHeart',
						'water',
						'caloriesIn',
						'sleep',
						'weight'

				],
				update_interval: 10
		}
},

````
### Explanation
* (Required) `credentials`:
	* (Required) `client_id`: From https://dev.fitbit.com/
	* (Required) `client_secret`: From https://dev.fitbit.com/
* (Required) `resources`: List of resources to display on Mirror. May take any combination of `'steps', 'floors', 'caloriesOut', 'distance', 'activeMinutes', 'sleep', 'heart'`
* (Optional) `update_interval` - (default value of `60`): in the amount of time in minutes to wait before fetching new Fitbit data. This must not be done too often otherwise Fitbit will not send new tokens and an uncaught exception will be thrown. This happens after approximately 150 requests in an hour, so updates should be no more frequent than once every minute for safety.

Files
--
### Javascript
* `MMM-Fitbit2.js`
* `node_helper.js`

### Python
* `setupAccess.py` - file to get first access and refresh tokens
* `iniHandler.py` - reads and writes `.ini` files
* `getData.py` - file to return data

### .ini
* `credentials.ini`
* `tokens.ini`

### CSS
* MMM-Fitbit2.css

Currently Supported Data
----
* Steps Walked (compared to goal)
* Calories Burned (compared to goal)
* Total Distance Walked (compared to goal)
* # of Active Minutes (compared to goal)
* # of Floors Climbed (compared to goal)
* Resting Heart Rate (average for the day)
* Current Water Intake (compared to goal)
* Calories Consumed (compared to goal)
* Sleep Time (compared to goal)
* Current Weight (last weigh-in)

TODO
---
See [here](TODO.md).
