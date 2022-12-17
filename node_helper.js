/* Magic Mirror
 * Node Helper: MMM-Fitbit2
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
const api = require('./fitbit_web_api/index');
const fs = require('fs');

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

		if (config.debug) {
			console.log("MMM-Fitbit2: Data to receive: " + JSON.stringify(config));
		}

		console.log(Object.keys(api));
		api.getUsers()
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
