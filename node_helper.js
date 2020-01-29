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
		let fileName;
		if (config.test) {
			fileName = "test_data.py";
		} else {
			fileName = "get_data.py";
		}

		if (config.debug) {
			console.log("MMM-Fitbit2: Data to receive: " + JSON.stringify(config));
		}
		console.log("MMM-Fitbit2: START " + fileName);

		var clientId = config.clientId;
		var clientSecret = config.clientSecret;
		var resources = config.resources;
		var debug = config.debug;
		var test = config.test;

		var pyArgs = []

		if (config.debug) {
			pyArgs.push("--debug")
		}

		if (config.test) {
			pyArgs.push("--test")
		}

		pyArgs.push(clientId)
		pyArgs.push(clientSecret)

		pyArgs.push("--resources")
		pyArgs = pyArgs.concat(config.resources)

		console.log(pyArgs)

		const fitbitPyShell = new PythonShell(
			fileName, {
				mode: "json",
				scriptPath: "modules/MMM-Fitbit2/python",
				pythonPath: "python3",
				pythonOptions: ["-u"], // get print results in real-time
				args: pyArgs
			}
		);

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
