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
		// SOME BLACK MAGIC I DON'T KNOW!
	},
	
	// Override dom generator.
	getDom: function() {
		// Create Wrappers
		var wrapper = document.createElement("div");
		
		wrapper.appendChild(this.UIElementWithBar('steps',true));
		wrapper.appendChild(this.UIElementWithBar('floors',true));
		wrapper.appendChild(this.UIElementWithBar('distance',true,'mi'));
		wrapper.appendChild(this.UIElementWithBar('activeMinutes',true,'mins'));
		wrapper.appendChild(this.UIElementWithBar('caloriesOut',true));
		wrapper.appendChild(this.UIElementWithBar('sleep',false));
		wrapper.appendChild(this.UIElementWithBar('heart',false,'bpm'));
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
	
	UIElementWithBar: function(resource,withBar,suffix) {
		iconPath = '/img/' + resource + 'White.png';
		// Create wrappers
		var wrapper = document.createElement("div");
		var icon = document.createElement("img");
		var text = document.createElement("div");
		var userData = document.createElement("div")
		var suff = document.createElement("div");
		var progress = document.createElement("div");
		var bar = document.createElement("div");
		
		// Icon
		icon.style.opacity = "0.6";
		icon.style.marginTop = '-5px';
		icon.style.marginBottom = '-5px';
		icon.src = 'modules/' + this.name + iconPath;
		icon.height = '40';
		
		// Text to display
		userData.className = 'normal medium';
		userData.innerHTML = this.numberWithCommas(this.userData[resource]);
		suff.className = "dimmed small"
		suff.innerHTML = suffix;
		
		// Make text on the same line
		userData.style.display = 'inline-block';
		suff.style.display = 'inline-block';
		
		// Progress bar
		progress.style.position = 'relative';
		progress.style.width = '75px';
		progress.style.height = '5px';
		progress.style.backgroundColor = 'grey';
		
		bar.style.position = 'absolute';
		bar.style.width = this.progressBar(resource) + '%';
		bar.style.height = '100%';
		bar.style.backgroundColor = 'lightgrey';
		
		if (withBar) {
			progress.appendChild(bar);
		}
		
		// Put them all together
		wrapper.appendChild(icon);
		text.appendChild(userData);
		if (suffix !== undefined) {
			text.appendChild(suff);
		}
		wrapper.appendChild(text);
		wrapper.appendChild(progress);
		
		wrapper.style.display = 'inline-block';
		wrapper.style.paddingLeft = '5px';
		wrapper.style.paddingRight = '5px';
		
		return wrapper;
	},
});

