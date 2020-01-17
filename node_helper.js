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
        if (notification === "SET CREDS") {
			console.log("Set credential request recieved.");
			console.log(payload);
			this.setCreds(payload.client_id,payload.client_secret);
		}
        if (notification === "GET DATA") {
			console.log(payload);
			console.log(payload.trigger + " request to get data received.");
			this.getData(payload.config);
		}
    },

	setCreds: function (id, secret) {
		var options = {
			mode: "json",
			scriptPath: "modules/MMM-Fitbit2/python",
			args: [id, secret]
		}
		PythonShell.run("iniHandler.py", options, function (err, results) {
			if (err) {
                throw err;
            }
			// results is an array consisting of messages collected during execution
			console.log("results: %j", results);
		});
	},

	getData: function (resources) {
		const self = this;
		const fileName = "getData.py";
		console.log("Running " + fileName);

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
				console.log(JSON.stringify(message))
				self.sendSocketNotification("DATA", message);
			}
		});

		fitbitPyShell.end(function (err) {
			if (err) {
                throw err;
            }
			self.sendSocketNotification("UPDATE", "Finished getting data");
			console.log("Finished getting data");
		});
	},
});
