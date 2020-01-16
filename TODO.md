TODO
==

## High priority
* Only poll API for resources that are required
* Rewrite README
	* Make setup steps clearer
	* Make it clear that multiple API calls are made on each refresh
* MIT LICENSE.md

* Get goals from API; don't hard-code
* _Clean up the code_

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
* Finish completing information shown on Fitbit dashboard
	* Active hours during the day
	* Sleep - start/end times, time awake
* Fix the need for super user privileges
* Fix "img/weight.png"
* Use Python 3
	* Fix iniHandler saving tokens

## Low priority
* Formatting for regions other than central ones
* 'Nice to have' information
	* Device battery levels
	* Friends leaderboard (api buggy, waiting on fix)
