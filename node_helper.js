/* Magic Mirror
 * Node Helper: MMM-Fitbit2
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
const apiInstance = require('./fitbit_web_api/index');
const fs = require('fs');
const os = require('os');
const path = require('path');

let debugMode = false;
let clientId = null;

module.exports = NodeHelper.create({

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "GET DATA") {
			console.log("MMM-Fitbit2: " + payload.trigger + " request to get data received");
			this.getData(payload.config);
		}
	},

	setDebugState: function(enableDebug) {
	  debugMode = enableDebug;
	},

	printJson: function(type, message, value = "") {
	  if (type === "debug" && !debugMode) {
	    return;
	  }

	  if (value === "") {
	    console.log(JSON.stringify({type, message}));
	  } else {
	    console.log(JSON.stringify({type, message: {[message]: value}}));
	  }
	},

	setTokenClientId: function(idToSet) {
	  if (!idToSet) {
	    throw new Error('idToSet must not be null or undefined');
	  }
	  printJson("debug", "Setting client ID", idToSet);
	  clientId = idToSet;
	},

	tokensFilename: function() {
	  if (!clientId) {
	    throw new Error('clientId must not be null or undefined');
	  }
	  return `tokens-${clientId}.json`;
	},

	tokensFilepath: function() {
	  return path.join(path.dirname(path.realpath(__filename)), tokensFilename());
	},

	tokensFileExists: function() {
	  if (fs.existsSync(tokensFilepath())) {
	    printJson("debug", `'${tokensFilename()}' exists`);
	    return true;
	  } else {
	    printJson("debug", `'${tokensFilename()}' does not exist`);
	    return false;
	  }
	},

	readTokens: async function() {
	  printJson("status", "Attempting to read tokens");

	  if (!tokensFileExists()) {
	    printJson("error", `'${tokensFilename()}' does not exist`);
	    process.exit(1);
	  }

	  printJson("debug", `Reading from '${tokensFilename()}'`);

	  try {
	    let AccToken = null;
	    let RefToken = null;
	    let Expires = null;

	    const data = JSON.parse(fs.readFileSync(tokensFilepath()));
	    AccToken = data["ACC_TOK"];
	    RefToken = data["REF_TOK"];
	    Expires = data["EXPIRES_AT"];
	  } catch (error) {
	    printJson("error", `Cannot read '${tokensFilename()}'`);
	    process.exit(1);
	  }

	  if (!AccToken) {
	    printJson("error", `Cannot read access_token from '${tokensFilename()}'`);
	    process.exit(1);
	  }

	  if (!RefToken) {
	    printJson("error", `Cannot read refresh_token from '${tokensFilename()}'`);
	    process.exit(1);
	  }

	  if (!Expires) {
	    printJson("error", `Cannot read expires_at from '${tokensFilename()}'`);
	    process.exit(1);
	  }

	  printJson("status", "Tokens read successfully");
	  return {AccToken, RefToken, Expires};
	},

	writeTokens: function(AccToken, RefToken, Expires = null) {
	  printJson("status", "Attempting to write tokens");

	  printJson("debug", `Writing tokens to '${tokensFilename()}'`);

	  const debug_print_out = `Writing access token: '${AccToken}', refresh token: '${RefToken}' and expiry Unix timestamp: '${Expires}'`;
	  printJson("debug", debug_print_out);

	  const data = {
	    ACC_TOK: AccToken,
	    REF_TOK: RefToken,
	    EXPIRES_AT: Expires,
	  };

	  fs.writeFileSync(tokensFilepath(), JSON.stringify(data));

	  printJson("status", "Tokens written successfully");
	},

	getData: function (config) {
		const self = this;

		// if (config.test) {
		// 	TODO: get from test/test_data.json
		// }

		if (config.debug) {
			console.log("MMM-Fitbit2: Data to receive: " + JSON.stringify(config));
		}

		console.log(Object.keys(apiInstance));
		apiInstance.getUsers()
		  .then(response => {
		    // Do something with the response
		    if (message.type == "data") {
					message.clientId = config.credentials.clientId
					self.sendSocketNotification("API_DATA_RECEIVED", message);
				}
		  })
		  .catch(error => {
		    throw error;
		  });

		self.sendSocketNotification("UPDATE_VIEW", "Finished getting data from Fitbit API");
		console.log("MMM-Fitbit2: END API CALLS");


		// fitbitPyShell.on("message", function (message) {
		// 	if (config.debug) {
		// 		console.log("MMM-Fitbit2: Message received: " + JSON.stringify(message))
		// 	}
		// if (message.type == "data") {
		// 	message.clientId = config.credentials.clientId
		// 	self.sendSocketNotification("API_DATA_RECEIVED", message);
		// }
		// });
	},
});
