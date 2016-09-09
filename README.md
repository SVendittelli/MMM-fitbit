MMM-fitbit
===
[MagicMirror](https://github.com/MichMich/MagicMirror) Module for getting fitbit data. First time users follow setup instructions, if your tokens get lost run `setupAccess.py` again without arguments and accept reading from `credentials.ini`.

**_WARNING_**: you must start your magic mirror with `sudo npm start`. I am currently working on a fix for this.

Dependencies
---
* [python-shell](https://www.npmjs.com/package/python-shell) --- `npm install python-shell`
* [python-fitbit](https://github.com/orcasgit/python-fitbit) --- `sudo pip install -r python/fitbit/requirements.txt`

Setup
---
* Goto [fitbit](https://dev.fitbit.com/) to register a new app (sign in with your fitbit account)
    * Give your app a catchy name and description
    * Your personal website, organisation, and organisation website can be whatever you like
    * Check browser and personal for OAuth settings
    * Callback URL **MUST BE** `http://127.0.0.1:8080/`
    * Give your app read & write permissions (read-only untested)
    * Note your:
        * "OAuth 2.0 Client ID" --- (client_id)
        * "Client (Consumer) Secret" --- (client_secret)
    * (You can access these again later via manage my apps at the same link as above)
* Install dependancies (run these in MMM-fitbit directory)
* Run `sudo python setupAccess.py` in the python directory. You can either:
    * Pass it your client_id and client_secret as arguments
    * Run it without arguments and have it read from credentials.ini (you can use this if you have already setup the module but need a fresh set of tokens)
    * Run it without arguments and enter your client_id and client_secret when prompted
* Login to fitbit (if you are not already) and allow access to all (if you do not some features may not work, but you may revoke app access and rerun `sudo python setupAccess.py` to change these)
* Add the example config to your config (entering relavent credentials)
* Start your MagicMirror!

Config
---
### Example config
````javascript
{
	module: 'MMM-fitbit',
	position: 'top_center',
	config: [
		credentials: {
			client_id: <client_id>,
			client_secret: <client_secret>,
		},
		resources: [
			'steps',
			'floors',
			'caloriesOut',
			'distance',
			'activeMinutes',
			'sleep',
			'heart'
		],
		update_interval: 60*60
	]
},
````
### Explanation
* (Required) `credentials`:
	* (Required) `client_id`: From https://dev.fitbit.com/
	* (Required) `client_secret`: From https://dev.fitbit.com/
* (Required) `resources`: List of resources to display on Mirror. May take any combination of `'steps', 'floors', 'caloriesOut', 'distance', 'activeMinutes', 'sleep', 'heart'`
* (Optional) `update_interval` - (default value of `60*60`): in the amount of time in seconds waited before fetching new fitbit data. This must not be done too often otherwise fitbit will not send new tokens.

TODO
---
See [here](TODO.md).
