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

	getData: function (resources) {
		const self = this;
		const fileName = "getData.py";

		console.log("MMM-Fitbit2: Data to receive: " + JSON.stringify(resources));
		console.log("MMM-Fitbit2: START " + fileName);

		const fitbitPyShell = new PythonShell(
			fileName, {
				mode: "json", scriptPath: "modules/MMM-Fitbit2/python"
			}
		);

		// Pass data to get from API to getData.py via stdin
		fitbitPyShell.send(resources)

		// Return response from API
		fitbitPyShell.on("message", function (message) {
			if (message.type == "data") {
				console.log("MMM-Fitbit2: Data received: " + JSON.stringify(message))
				// self.sendSocketNotification("DATA", message);
			}
		});

		fitbitPyShell.end(function (err) {
			if (err) {
                throw err;
            }
			// self.sendSocketNotification("UPDATE", "Finished getting data from Fitbit API");
			console.log("MMM-Fitbit2: END " + fileName);
		});
	},
});
