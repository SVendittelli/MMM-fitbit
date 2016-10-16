TODO
===
List
---
- [x] Fix need for super user privileges
- [ ] Formatting for regions other than central ones
- [ ] _Cleanup the code_

Files
---
### Javascript
* [`MMM-fitbit.js`](MMM-fitbit.js)
* [`node_helper.js`](node_helper.js)

### Python
* [`setupAccess.py`](python/setupAccess.py) - file to get first access and refresh tokens
* [`iniHandler.py`](python/iniHandler.py) - reads and writes `.ini` files
* [`authHandler.py`](python/authHandler.py) - file to update tokens
* [`getData.py`](python/getData.py) - file to return data

### .ini
* `credentials.ini`
* `tokens.ini`

### CSS
* [`MMM-fitbit.css`](MMM-fitbit.css)

Supported Data
--
* Steps
* Floors
* Calories
* Total distance
* Sleep (API missing goals)
* Resting heartrate
* Active minutes

**WIP**:
* Battery Levels? (need device details, ask user for device?)
* Alarms? (see above)
* Lifetime stats? (interesting but doesn't fit with others)
* Friends leaderboard (API buggy, waiting on fix)