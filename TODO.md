TODO
==

## High priority
* Check that nothing breaks if data is missing
	* e.g. no weight data for 30 days
	* e.g. no heart data for the day
* Improve look
	* Fix spacing and text, etc.
	* Icons
		* Get water icons
		* Get food icons
		* Fix weight icons

## Medium priority
* Handle missing or corrupted ini files
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
* Migrate to using Python 3
	* Fix iniHandler saving tokens
* Simpler dependency installation

## Low priority
* Formatting for regions other than central ones
* 'Nice to have' information
	* Device battery levels
	* Friends leaderboard (api buggy, waiting on fix)
* _Clean up the code_
