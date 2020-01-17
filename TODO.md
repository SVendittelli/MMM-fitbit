TODO
==

## High priority
* Check that assumed list elements (such as [0]) are correct
* Fix detecting expired tokens and refreshing
	* Check for 'print(response.content)' when there is an expired token
* Add better handling of KeyErrors
	* Reduce assumed list elements (e.g. what if there is no weight data?)
* Improve look
	* Fix spacing and text, etc.
	* Icons
		* Get water icons
		* Get food icons
		* Fix weight icons

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
