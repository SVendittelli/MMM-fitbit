MMM-fitbit
==
MagicMirror Module for fitbit. You must create your application and store its details in `app_access.ini`. You must then authorise it at the appropriate url and get your first tokens. Store those in `tokens.ini`.

**WIP**: Currently only provides step count. Plan to expand to pretty much anything.

Dependencies
--
* [python-shell](https://www.npmjs.com/package/python-shell) (npm install python-shell)

TODO
--
* Change to JSON rather than text from the Python output.
* Possibly swich to JS API for fitbit.
* Get initial tokens automatically.
* Update the step count every 15 minutes
* _Cleanup the code_
