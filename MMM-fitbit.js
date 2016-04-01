/* global Module */

/* Magic Mirror
 * Module: fitbit
 *
 * By Sam Vendittelli
 * MIT Licensed.
 */

Module.register('MMM-fitbit',{

	// Default module config.
	defaults: {
		credentials: {
			client_id: '',
			client_key: '',
			client_secret: ''
		},
		STEPS: 0,
	},
	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "COUNTED"){
			this.config.STEPS = payload.steps;
			this.updateDom();
		}
	},
	
	start: function() {
		Log.info('Starting module: ' + this.name);
		this.sendSocketNotification('SET CREDS',this.config.credentials)
		this.sendSocketNotification('RUN', 'intial');
		
		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.sendSocketNotification('RUN', 'refresh');
			self.updateDom();
		}, 15*60*1000);
	},
	
	// Override dom generator.
	getDom: function() {
		// Create Wrappers
		var wrapper = document.createElement("div");
		var feet = document.createElement("img");
		var steps = document.createElement("div");
		var progress = document.createElement("div");
		var bar = document.createElement("div");
		
		// Feet image
		feet.style.opacity = "0.6";
		feet.src = 'modules/' + this.name + '/img/shoeNeg.png';
		feet.height = '35';
		
		// Step count
		steps.className = "normal medium";
		steps.innerHTML = this.numberWithCommas(this.config.STEPS);
		
		// Progress bar
		progress.style.position = 'relative';
		progress.style.width = '80px';
		progress.style.height = '5px';
		progress.style.backgroundColor = 'grey';
		
		bar.style.position = 'absolute';
    	bar.style.width = this.progressBar() + '%';
    	bar.style.height = '100%';
    	bar.style.backgroundColor = 'lightgrey';
		
		progress.appendChild(bar);
		
		wrapper.appendChild(feet);
		wrapper.appendChild(steps);
		wrapper.appendChild(progress);
		return wrapper;
	},
	
	// To add commas to the step count
	numberWithCommas: function(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	
	progressBar: function() {
		if (this.config.STEPS >= 10000) {
			return 100;
		} else {
			return Math.round(Number(this.config.STEPS) / 100)
		}
	}
});

