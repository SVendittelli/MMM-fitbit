MMM-Fitbit2
===
### _Current Development Status: Work In Progress_

[MagicMirror](https://github.com/MichMich/MagicMirror) Module for displaying Fitbit data, retrieved from Fitbit API ([https://api.fitbit.com](https://dev.fitbit.com/build/reference/web-api/)).

![](screenshot.png)

**Note: this module requires that you set up your own "Fitbit app" using a free Fitbit account, in order to generate OAuth 2.0 credentials for accessing your data from Fitbit.**

This extends SVendittelli's original [MMM-fitbit](https://github.com/SVendittelli/MMM-fitbit) module and intends to build on top of the following changes that were incorporated from the efforts of others who forked the original repository:

* adding weight data ([engeld's fork](https://github.com/engeld/MMM-fitbit))
* updating python-fitbit to 0.3.0 ([shbatm's fork](https://github.com/shbatm/MMM-fitbit))
* automatic re-authorisation when tokens have expired ([shbatm's fork](https://github.com/shbatm/MMM-fitbit))

Dependencies
---
* [python-shell](https://www.npmjs.com/package/python-shell)
* [python-fitbit](https://github.com/orcasgit/python-fitbit)

Setup
---
* Go to [Fitbit](https://dev.fitbit.com/apps/new/) and register a new app (sign in with your Fitbit account if needed).
	* Give your app a catchy name and description
	* Your personal website, organisation, and organisation website can be whatever you like
	* Ensure that OAuth 2.0 Application Type is set to "personal"
	* Callback URL **MUST BE** `http://127.0.0.1:8080/`
	* Give your app read & write permissions (read-only untested)
	* Note your OAuth 2.0 credentials (you'll need them in a moment!)
		* "OAuth 2.0 Client ID" --- (this is your `client_id`)
		* "Client (Consumer) Secret" --- (this is your `client_secret`)
			* You can access these again later via [Manage My Apps](https://dev.fitbit.com/apps)

Installation
---

```
cd ~/MagicMirror # or whatever your path to Magic Mirror is
cd modules
git clone https://github.com/m-roberts/MMM-Fitbit2
cd MMM-Fitbit2
npm install python-shell@0.5.0  # Requires this version to work - see https://github.com/SVendittelli/MMM-fitbit/issues/23#issuecomment-464319931
pip install --user -r python/fitbit/requirements.txt
cd python
cp tokens.ini.sample tokens.ini
cp credentials.ini.sample credentials.ini

# Edit credentials.ini to include your personal client_id and client_secret

# Stop MagicMirror before this next step - it won't work!
pm2 stop MagicMirror

python setupAccess.py

# A web browser will open - log in using your Fitbit username and password, if you are not logged in already, and allow access to all options

# Close the window when instructed

# Re-enable MagicMirror
pm2 start MagicMirror

# Add the example config below to your config file in ~/MagicMirror/config/config.json (oror whatever your path to Magic Mirror is)

# Add your client_id and client_secret to the config file, and customise as you like

# Start your MagicMirror!
```

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
### Notice
The Fitbit API explains:
> You can make 150 API requests per hour for each user that has authorized your application to access their data. This rate limit is applied when you make an API request using the user's access token.

The default configuration is designed to fetch new Fitbit data every 10 minutes. Depending on the number of resources that are selected, it is likely that multiple API requests are made each time that new Fitbit data is fetched.

This must not be done too often otherwise the rate limit will be exceeded, and Fitbit will not send new tokens and an uncaught exception will be thrown. It is not recommended that a value of less than 10 be used, unless fewer resources are selected. Try setting this to a higher number if you are experiencing problems.

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
