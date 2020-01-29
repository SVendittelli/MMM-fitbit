/* global Module */

/* Magic Mirror
 * Module: MMM-Fitbit2
 *
 * Forked from MMM-fitbit by Sam Vendittelli
 * MMM-Fitbit2 modifications by Mike Roberts
 * MIT Licensed.
 */

Module.register("MMM-Fitbit2",{
	userData: {
		steps: 0,
		caloriesOut: 0,
		distance: 0,
		activeMinutes: 0,
		floors: 0,
		restingHeart: 0,
		water: 0,
		caloriesIn: 0,
		sleep: 0,
		weight: 0
	},

	// Defaults
	goals: {
		steps: 10000,
		caloriesOut: 2000,
		distance: 5,
		activeMinutes: 30,
		floors: 10,
		restingHeart: 0,
		water: 2000,
		caloriesIn: 2000,
		sleep: 480,
		weight: 0
	},

	// Default module config.
	defaults: {
		credentials: {
			client_id: "",
			client_secret: ""
		},
		resources: [
			"steps",
			"caloriesOut",
			"distance",
			"activeMinutes",
			"floors",
			"restingHeart",
			"water",
			"caloriesIn",
			"sleep",
			"weight"
		],
		debug: false,
		update_interval: 10
	},

	// Define required scripts.
	getStyles: function() {
		return ["MMM-Fitbit2.css"];
	},

	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "DATA"){
			resource = payload.resource;
			if (this.inResources(resource)) {
				this.userData[resource] = payload.values.data;
				this.goals[resource] = payload.values.goal;
				Log.log("Writing " + resource + " (data/goal): " + this.userData[resource] + "/" + this.goals[resource]);
			}
		}
		if (notification === "UPDATE") {
			Log.log("Updating DOM");
			this.updateDom(this.fadeSpeed);
		}
	},

	// Initialisation
	start: function() {
		Log.info("Starting module: " + this.name);
		get_data_payload = {}

		config = {}
		config.client_id = this.config.credentials.client_id
		config.client_secret = this.config.credentials.client_secret
		config.resources = this.config.resources
		config.debug = this.config.debug

		get_data_payload.config = config
		get_data_payload.trigger = "Initial"
		this.sendSocketNotification("GET DATA", get_data_payload);

		this.fadeSpeed = 500;

		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateData();
		}, this.config.update_interval*60*1000);
	},

	// Updates the data from fitbit
	updateData: function() {
		get_data_payload = {}
		get_data_payload.config = this.config.resources
		get_data_payload.trigger = "Update"
		this.sendSocketNotification("GET DATA", get_data_payload);
	},

	// Checks whether the user wants to lookup a resource type
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

	// Width of the progress bar
	progressBar: function(resource) {
		if (this.userData[resource] >= this.goals[resource]) {
			return 100;
		} else {
			return Math.round(Number(this.userData[resource]) / this.goals[resource] * 100)
		}
	},

	// Make each resource element for the UI
	UIElement: function(resource) {
		iconPath = "/img/" + resource + "White.png";
		// Create wrappers
		var wrapper = document.createElement("div");
		var icon = document.createElement("img");
		var text = document.createElement("div");
		var userData = document.createElement("div");
		var measurementUnit = document.createElement("div");
		var progress = document.createElement("div");
		var bar = document.createElement("div");

		// Icon
		icon.className = "fitbiticon";
		icon.src = "modules/" + this.name + iconPath;

		// Text to display
		userData.className = "normal medium";
		measurementUnit.className = "dimmed small";
		if (resource == "steps" || resource == "caloriesOut" || resource == "caloriesIn") {
			userData.innerHTML = this.numberWithCommas(this.userData[resource]);
		} else if (resource == "sleep") {
			userData.innerHTML = this.minsToHourMin(this.userData[resource]);
		} else {
			userData.innerHTML = this.userData[resource];
		}
		switch(resource) {
			case "steps":
				measurementUnit.innerHTML = "steps";
				break;
			case "caloriesOut":
				measurementUnit.innerHTML = "cals";
				break;
			case "distance":
				measurementUnit.innerHTML = "km";
				break;
			case "activeMinutes":
				measurementUnit.innerHTML = "mins";
				break;
			case "floors":
				measurementUnit.innerHTML = "floors";
				break;
			case "restingHeart":
				measurementUnit.innerHTML = "bpm";
				break;
			case "water":
				measurementUnit.innerHTML = "ml";
				break;
			case "caloriesIn":
				measurementUnit.innerHTML = "cals";
				break;
			case "sleep":
				measurementUnit.innerHTML = "zzz";
				break;
			case "weight":
				measurementUnit.innerHTML = "kg";
				break;
			default:
				measurementUnit.innerHTML = "";
		}

		// Assemble text
		text.appendChild(userData);
		text.appendChild(measurementUnit);

		// Assemble progress bar
		progress.className = "progbarbkg";

		bar.className = "progbar";
		bar.style.width = this.progressBar(resource) + "%";

		progress.appendChild(bar);

		// Put them all together
		wrapper.appendChild(icon);
		wrapper.appendChild(text);
		wrapper.appendChild(progress);

		// Make each "widget" align horizontally
		wrapper.style.display = "inline-block";
		wrapper.style.paddingLeft = "5px";
		wrapper.style.paddingRight = "5px";

		return wrapper;
	},

	// Override DOM generator.
	getDom: function() {
		// Create Wrappers
		var wrapper = document.createElement("div");

		for (resource in this.config.resources) {
			wrapper.appendChild(this.UIElement(this.config.resources[resource]));
		}

		return wrapper;
	},
});
