/* global Module */

/* Magic Mirror
 * Module: fitbit
 *
 * By Sam Vendittelli
 * MIT Licensed.
 */

Module.register(MMM-fitbit,{

	// Default module config.
	defaults: {
		STEPS: 0,
	},
	
	// Define required scripts.
	/*getScripts: function() {
		return ['moment.js'];
	},*/
	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "COUNTED"){
			this.config.STEPS = payload.steps;
			console.log("Steps counted: " + payload.steps + ".");
			this.updateDom();
		}
	},
	
	start: function() {
		Log.info('Starting module: ' + this.name);
		
		this.sendSocketNotification('RUN', 'forest');
		
		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 15*60*1000);
	},
	
	// Override dom generator.
	getDom: function() {
		// Create Wrappers
		var wrapper = document.createElement("div");
		var feet = document.createElement("img");
		var steps = document.createElement("div");
		// Feet image
		feet.style.opacity = "0.6";
		feet.src = 'modules/' + this.name + '/img/shoeNeg.png';
		feet.height = '35';
		// Step count
		steps.className = "normal medium";
		steps.innerHTML = this.config.STEPS;
		
		wrapper.appendChild(feet);
		wrapper.appendChild(steps);
		return wrapper;
	},
});

