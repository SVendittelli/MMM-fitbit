MMM-fitbit
===
MMM-fitibt is a module for the [MagicMirror](https://github.com/MichMich/MagicMirror). After authorising your modle, it will get your step count and various other stats from the fitbit servers. First time users follow setup instructions, if your tokens get lost run `setupAccess.py` again without arguments and accept reading from `credentials.ini`.

Features
---
Automatically gets your fitbit data and displays your selection of:
* Step count
* Floors climbed
* Calories burned
* Distance walked (in miles)
* Number of active minutes
* Time asleep
* Resting heartrate

The result looks something like this:
![UI](https://forum.magicmirror.builders/uploads/files/1462206171732-fitbiteg.png)

Installation
---
As with all modules, use `git clone <this url>` in the `modules` directory to download the module. Then, inside the module folder, install the following dependancies using the corresponding commands. Once you have done that, follow the instructions to setup your app!

### Dependencies
* [python-shell](https://www.npmjs.com/package/python-shell) --- `npm install python-shell`
* [python-fitbit](https://github.com/orcasgit/python-fitbit) --- `sudo pip install -r python/fitbit/requirements.txt`

Setup
---
Goto [fitbit](https://dev.fitbit.com/) to register a new app. You can sign in with your fitbit account. To create your new app, do the following.
* Give your app a catchy name and description
* Provide your personal website, organisation, and organisation website can be whatever you like
* Check "browser" and "personal" for OAuth settings
* **IMPORTANT**: Callback URL **MUST BE** `http://127.0.0.1:8080/`
* Give your app read & write permissions (read-only may work but is untested)

Now, take note of your:
* "OAuth 2.0 Client ID" --- (`client_id`)
* "Client (Consumer) Secret" --- (`client_secret`)

You can access these again later via manage my apps at the same [link](https://dev.fitbit.com/) as above. You have successfully created your app. So navigate to the `MMM-fitbit/python` directory in `modules` and create blank files called `tokens.ini` and `credentials.ini` or duplicate their `.sample` files.

In the commandline, run `sudo python setupAccess.py`. Remebering your `client_id` and `client_secret`, you can either:
* Pass it your `client_id` and `client_secret` as arguments;
* Run it without arguments and enter your client_id and client_secret when prompted;
* Or, run it without arguments and have it read from `credentials.ini` (you can use this if you have already setup the module but need a fresh set of tokens).

This will ope a browser window where you should login to fitbit (if you are not already) and allow access to all. You may revoke app access from the fitbit wesite and rerun `sudo python setupAccess.py` to change thesis settings if you make a mistake here.

Now all that's left is to add the example config to your config (entering relavent credentials) and start your MagicMirror!

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
		update_interval: 60
	]
},
````
### Configuration Options
The following can be configured:

| Option | Necessity | Description |
|--------|-----------|-------------|
| `credentials` | _Required_ | `client_id`: From https://dev.fitbit.com/ <br> `client_secret`: From https://dev.fitbit.com/ |
| `resources` | _Required_ | List of resources to display on Mirror. May take any combination of: <ul><li>`'steps'`,</li><li>`'floors'`,</li><li>`'caloriesOut'`,</li><li>`'distance'`,</li><li>`'activeMinutes'`,</li><li>`'sleep'`,</li><li>`'heart'`.</li></ul> |
| `update_interval` | _Optional_ | The amount of time in minutes to wait before fetching new fitbit data. This must not be done too often otherwise fitbit will not send new tokens and an uncaught exception will be thrown. This happens after approximately 150 requests in an hour, so updates should be no more frequent than once every minute for safety. <br> **Default:** 60.

TODO
---
See [here](TODO.md).
