/* global Module */

/* Magic Mirror
 * Module: fitbit
 *
 * By Sam Vendittelli
 * MIT Licensed.
 */
 
Module.register('MMM-fitbit',{
	
	userData: {
		steps: 0,
		floors: 0,
		caloriesOut: 0,
		distance: 0,
		activeMinutes: 0,
		sleep: '00:00',
		heart: 0
	},
	
	goals: {
		steps: 10000,
		floors: 10,
		caloriesOut: 2000,
		distance: 5,
		activeMinutes: 30,
		sleep: 0,
		heart: 0
	},
	
	// Default module config.
	defaults: {
		credentials: {
			client_id: '',
			client_key: '',
			client_secret: ''
		},
	},
	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "DATA"){
			resource = payload['resource'];
			Log.log("Writing " + resource)
			this.userData[resource] = payload['values']['data'];
			this.goals[resource] = payload['values']['goal']
		}
		if (notification === "UPDATE") {
			Log.log('Updating Dom')
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
		
		wrapper.appendChild(this.UIElementWithBar('steps'));
		wrapper.appendChild(this.UIElementWithBar('floors'));
		wrapper.appendChild(this.UIElementWithBar('distance'));
		wrapper.appendChild(this.UIElementWithBar('activeMinutes'));
		wrapper.appendChild(this.UIElementWithBar('caloriesOut'));
		return wrapper;
	},
	
	// To add commas to the step count
	numberWithCommas: function(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	
	progressBar: function(resource) {
		if (this.userData[resource] >= this.goals[resource]) {
			return 100;
		} else {
			return Math.round(Number(this.userData[resource]) / this.goals[resource] * 100)
		}
	},
	
	UIElementWithBar: function(resource) {
		iconPath = '/img/' + resource + 'White.png';
		// Create wrappers
		var wrapper = document.createElement("div");
		var icon = document.createElement("img");
		var text = document.createElement("div");
		var progress = document.createElement("div");
		var bar = document.createElement("div");
		
		// Icon
		icon.style.opacity = "0.6";
		icon.style.marginTop = '-5px';
		icon.style.marginBottom = '-5px';
		icon.src = 'modules/' + this.name + iconPath;
		icon.height = '40';
		
		// Text to display
		text.className = 'normal medium';
		text.innerHTML = this.numberWithCommas(this.userData[resource]);
		
		// Progress bar
		progress.style.position = 'relative';
		progress.style.width = '75px';
		progress.style.height = '5px';
		progress.style.backgroundColor = 'grey';
		
		bar.style.position = 'absolute';
    	bar.style.width = this.progressBar(resource) + '%';
    	bar.style.height = '100%';
    	bar.style.backgroundColor = 'lightgrey';
		
		progress.appendChild(bar);
		
		wrapper.appendChild(icon);
		wrapper.appendChild(text);
		wrapper.appendChild(progress);
		
		wrapper.style.display = 'inline-block';
		wrapper.style.paddingLeft = '5px';
		wrapper.style.paddingRight = '5px';
		
		return wrapper;
	}
});

