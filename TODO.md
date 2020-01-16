TODO
==

## High priority
* Icons
	* Get water icons
	* Get food icons
	* Fix weight icons
* Find out if it's possible to set a different callback port for Fitbit authorisation to avoid needing to kill MagicMirror when getting credentials

## Medium priority
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

## Low priority
* Formatting for regions other than central ones
* 'Nice to have' information
	* Device battery levels
	* Friends leaderboard (api buggy, waiting on fix)
* _Clean up the code_
