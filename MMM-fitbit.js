/* global Module */

/* Magic Mirror
 * Module: MMM-fitbit
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
		sleep: 0,
		heart: 0
	},
	
	goals: {
		steps: 10000,
		floors: 10,
		caloriesOut: 2000,
		distance: 5,
		activeMinutes: 30,
		sleep: 480,
		heart: 0
	},
	
	// Default module config.
	defaults: {
		credentials: {
			client_id: '',
			client_secret: ''
		},
		resources: [
			'steps',
			'floors',
			'caloriesOut',
			'distance',
			'activeMinutes',
			'sleep',
			'heart'
		],
		update_interval: 60
	},
	
	// Define required scripts.
	getStyles: function() {
		return ["MMM-fitbit.css"];
	},
	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "DATA"){
			resource = payload['resource'];
			if (this.inResources(resource)) {
				this.userData[resource] = payload['values']['data'];
				this.goals[resource] = payload['values']['goal'];
				Log.log("Writing " + resource + " (data/goal): " + this.userData[resource] + "/" + this.goals[resource]);
			}
		}
		if (notification === "UPDATE") {
			Log.log('Updating Dom');
			this.updateDom(this.fadeSpeed);
		}
	},
	
	// Initialisation
	start: function() {
		Log.info('Starting module: ' + this.name);
		this.sendSocketNotification('SET CREDS',this.config.credentials)
		this.sendSocketNotification('GET DATA', 'intial');
		
		this.fadeSpeed = 500;
		
		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateData();
		}, this.config.update_interval*60*1000);
	},
	
	// Updates the data from fitbit
	updateData: function() {
		this.sendSocketNotification('GET DATA', 'Update');
	},
	
	// Checks whether the user wants to lookup a resourse type
	inResources: function(resource) {
		return this.config.resources.indexOf(resource) > -1;
	},
	
	// To add commas to the step and calorie count
	numberWithCommas: function(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	
	// Converts minutes into HH:MM
	minsToHourMin: function(number) {
		hours = Math.floor(number / 60);
		minutes = number % 60;
		return ("00" + hours.toString()).slice(-2) + ":" + ("00" + minutes.toString()).slice(-2);
	},
	
	// WIdth of the progress bar
	progressBar: function(resource) {
		if (this.userData[resource] >= this.goals[resource]) {
			return 100;
		} else {
			return Math.round(Number(this.userData[resource]) / this.goals[resource] * 100)
		}
	},
	
	// Make each resource element for the UI
	UIElement: function(resource) {
		iconPath = '/img/' + resource + 'White.png';
		// Create wrappers
		var wrapper = document.createElement("div");
		var icon = document.createElement("img");
		var text = document.createElement("div");
		var userData = document.createElement("div")
		var suffix = document.createElement("div");
		var progress = document.createElement("div");
		var bar = document.createElement("div");
		
		// Icon
		icon.className = 'fitbiticon';
		icon.src = 'modules/' + this.name + iconPath;
		
		// Text to display
		userData.className = 'normal medium';
		suffix.className = "dimmed small"
		if (resource == 'steps' || resource == 'caloriesOut') {
			userData.innerHTML = this.numberWithCommas(this.userData[resource]);
		} else if (resource == 'sleep') {
			userData.innerHTML = this.minsToHourMin(this.userData[resource]);
		} else {
			userData.innerHTML = this.userData[resource];
		};
		switch(resource) {
			case 'distance':
				suffix.innerHTML = 'mi';
				break;
			case 'activeMinutes':
				suffix.innerHTML = 'mins';
				break;
			case 'heart':
				suffix.innerHTML = 'bpm';
				break;
			default:
				suffix.innerHTML = '';
		}
		
		// Make text on the same line
		userData.style.display = 'inline-block';
		suffix.style.display = 'inline-block';
		
		// Progress bar
		progress.className = 'progbarbkg';
		
		bar.className = 'progbar';
		bar.style.width = this.progressBar(resource) + '%';
		
		if (resource !== 'heart') {
			progress.appendChild(bar);
		}
		
		// Put them all together
		wrapper.appendChild(icon);
		text.appendChild(userData);
		if (['distance','activeMinutes','heart'].indexOf(resource) > -1) {
			text.appendChild(suffix);
		}
		wrapper.appendChild(text);
		wrapper.appendChild(progress);
		
		wrapper.style.display = 'inline-block';
		wrapper.style.paddingLeft = '5px';
		wrapper.style.paddingRight = '5px';
		
		return wrapper;
	},
	
	// Override dom generator.
	getDom: function() {
		// Create Wrappers
		var wrapper = document.createElement("div");
		
		for (resource in this.config.resources) {
			wrapper.appendChild(this.UIElement(this.config.resources[resource]));
		}
		
		return wrapper;
	},
});
