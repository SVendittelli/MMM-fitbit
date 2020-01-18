/* Magic Mirror
 * Node Helper: MMM-Fitbit2
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
var PythonShell = require("python-shell");

module.exports = NodeHelper.create({

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
        if (notification === "GET DATA") {
			console.log("MMM-Fitbit2: " + payload.trigger + " request to get data received");
			this.getData(payload.config);
		}
    },

	getData: function (config) {
		const self = this;
		const fileName = "getData.py";

		if (config.debug) {
			console.log("MMM-Fitbit2: Data to receive: " + JSON.stringify(config));
		}
		console.log("MMM-Fitbit2: START " + fileName);

		const fitbitPyShell = new PythonShell(
			fileName, {
				mode: "json", scriptPath: "modules/MMM-Fitbit2/python"
			}
		);

		// Pass data to get from API to getData.py via stdin
		fitbitPyShell.send(JSON.stringify(config))

		// Return response from API
		fitbitPyShell.on("message", function (message) {
			if (message.type == "data") {
				if (config.debug) {
					console.log("MMM-Fitbit2: Data received: " + JSON.stringify(message))
				}
				self.sendSocketNotification("DATA", message);
			}
			else if (config.debug) {
				console.log("MMM-Fitbit2: Message received: " + JSON.stringify(message))
			}
		});

		fitbitPyShell.end(function (err) {
			if (err) {
                throw err;
            }
			self.sendSocketNotification("UPDATE", "Finished getting data from Fitbit API");
			console.log("MMM-Fitbit2: END " + fileName);
		});
	},
});
