TODO
==

### High priority
* BLOCKED: Improve look
	* Fix spacing and text, etc.
		* Remove "zzz" from sleep, keep spacing
		* Give icons more room
	* Icons
		* Get water icons
		* Get food icons
		* Fix weight icons
	* Update screenshot

### Medium priority
* Check that nothing breaks if data is missing
	* e.g. no weight data for 30 days
	* e.g. no heart data for the day
* Look into forking python-fitbit and add new features
	* https://github.com/orcasgit/python-fitbit/pull/136/
	* https://github.com/orcasgit/python-fitbit/pull/64/
	* https://github.com/orcasgit/python-fitbit/pull/104/
	* https://github.com/orcasgit/python-fitbit/pull/138/?
	* https://github.com/orcasgit/python-fitbit/pull/146/?
* Add more complicated ways of representing progress
	* Currently, only have value and goal, and it is assumed that progress % is value / goal
	* e.g. "cals left to eat"
	* e.g. "weight left to lose"
	* e.g. "which hours were active"
	* e.g. "histogram of heart activity"
	* e.g. "how much I overate if I went over my goal"
	* show additional information
		* e.g. mins awake during sleep
* Add additional information using more advanced views
	* Active hours during the day
	* Sleep - start/end times, time awake
	* Body fat percentage (compared to goal)
* Add more config parameters for controlling the view
	* Add "Configuration Options" to README
* Add tests

### Low priority
* Regional formatting options
* 'Nice to have' information
	* e.g. Device battery levels
	* e.g. Friends leaderboard
* Fix to use latest version of python-shell
* Add instructions for safe uninstall to protect data


## Troubleshooting
### General help
Add `debug: true` to your module config, and restart MagicMirror.

### Invalid refresh token
If you are getting `oauthlib.oauth2.rfc6749.errors.InvalidGrantError: (invalid_grant)` when running `get_data.py`, it likely means that your access token has expired and your refresh token is not the latest one associated with your account. Try running `setup_access.py` again, and seeing if this helps.
