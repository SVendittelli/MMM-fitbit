/* global Module */

/* Magic Mirror
 * Module: MMM-Fitbit2
 *
 * Forked from MMM-fitbit by Sam Vendittelli
 * MMM-Fitbit2 modifications by Mike Roberts
 * MIT Licensed.
 */

Module.register("MMM-Fitbit2", {
	// Initial values
	userData: {
		steps: {
			value: 0,
			goal: 10000,
			unit: "steps"
		},
		caloriesOut: {
			value: 0,
			goal: 2000,
			unit: "cals"
		},
		distance: {
			value: 0,
			goal: 5,
			unit: "km"
		},
		activeMinutes: {
			value: 0,
			goal: 30,
			unit: "mins"
		},
		floors: {
			value: 0,
			goal: 10,
			unit: "floors"
		},
		restingHeart: {
			value: 0,
			goal: 0,
			unit: "bpm"
		},
		water: {
			value: 0,
			goal: 2000,
			unit: "ml"
		},
		caloriesIn: {
			value: 0,
			goal: 2000,
			unit: "cals"
		},
		sleep: {
			value: 0,
			goal: 480,
			unit: "" // Formatted as HH:MM - no explicit unit
		},
		weight: {
			value: 0,
			goal: 0,
			unit: "kg"
		}
	},

	// Default module config.
	defaults: {
		credentials: {
			clientId: "",
			clientSecret: ""
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
		test: false,
		showLastSynced: false,
		updateInterval: 10
	},

	// Define required scripts.
	getStyles: function() {
		return ["MMM-Fitbit2.css"];
	},

	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "API_DATA_RECEIVED") {
			resource = payload.resource;
			if (this.inResources(resource)) {
				this.userData[resource]["value"] = payload.values.data;
				this.userData[resource]["goal"] = payload.values.goal;
				Log.log("Writing " + resource + " (data/goal): " + this.userData[resource]["value"] + "/" + this.userData[resource]["goal"]);
			}
		}
		if (notification === "UPDATE_VIEW") {
			Log.log("Updating DOM");
			this.loaded = true;
			this.updateDom(this.fadeSpeed);
		}
	},

	getData: function(trigger) {
		payload = {};
		payload.config = this.config;
		payload.trigger = trigger;
		this.sendSocketNotification("GET DATA", payload);
	},

	// Initialisation
	start: function() {
		Log.info("Starting module: " + this.name);
		this.getData("Initial");

		this.loaded = false;
		this.fadeSpeed = 500;

		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateData();
		}, this.config.updateInterval*60*1000);
	},

	// Updates the data from fitbit
	updateData: function() {
		this.getData("Update");
	},

	// Checks whether the user wants to lookup a resource type
	inResources: function(resource) {
		return this.config.resources.indexOf(resource) > -1;
	},

	// Generate div for icon
	iconDiv: function(resource) {
		const iconPath = "/img/" + resource + ".png";

		var iconDiv = document.createElement("img");
		iconDiv.className = "widgeticon";
		iconDiv.src = "modules/" + this.name + iconPath;

		return iconDiv
	},

	// Add commas to step and calorie count
	formatNumberWithCommas: function(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},

	// Converts minutes into HH:MM
	formatMinsToHourMin: function(number) {
		hours = Math.floor(number / 60);
		minutes = number % 60;
		return ("00" + hours.toString()).slice(-2) + ":" + ("00" + minutes.toString()).slice(-2);
	},

	// Generate div for first part of text div
	userDataValueDiv: function(resource) {
		var userDataValueDiv = document.createElement("div");
		userDataValueDiv.className = "normal medium";

		if (["steps", "caloriesOut", "caloriesIn"].indexOf(resource) > -1) {
			userDataValueDiv.innerHTML = this.formatNumberWithCommas(this.userData[resource]["value"]);
		} else if (resource == "sleep") {
			userDataValueDiv.innerHTML = this.formatMinsToHourMin(this.userData[resource]["value"]);
		} else {
			userDataValueDiv.innerHTML = this.userData[resource]["value"];
		}

		return userDataValueDiv;
	},

	// Generate div for second part of text div
	userDataUnitDiv: function(resource) {
		var userDataMeasurementUnit = document.createElement("div");
		userDataMeasurementUnit.className = "dimmed small";
		userDataMeasurementUnit.innerHTML = this.userData[resource]["unit"];

		return userDataMeasurementUnit;
	},

	// Generate div for text (data + unit)
	textDiv: function(resource) {
		var textDiv = document.createElement("div");
		textDiv.className = "widgettext";


		textDiv.appendChild(this.userDataValueDiv(resource));
		textDiv.appendChild(this.userDataUnitDiv(resource));

		return textDiv
	},

	// Generate div for progress (grey background line and white overlay)
	progressBarDiv: function(resource) {
		// Start with background
		var progressBarMasterDiv = document.createElement("div");
		progressBarMasterDiv.className = "widgetprogbarbkg";

		// Overlay actual progress
		var progressBarChildDiv = document.createElement("div");
		progressBarChildDiv.className = "widgetprogbar";

		var width;
		const exceededGoal = this.userData[resource]["value"] >= this.userData[resource]["goal"];
		if (exceededGoal) {
			width = 100;
		} else {
			width = Math.round(
				Number(this.userData[resource]["value"]) / this.userData[resource]["goal"] * 100
			)
		}
		progressBarChildDiv.style.width = width + "%";

		progressBarMasterDiv.appendChild(progressBarChildDiv);

		return progressBarMasterDiv;
	},

	// Make each resource element for the UI
	UIElement: function(resource) {
		var widgetDiv = document.createElement("div");
		widgetDiv.className = "widget"

		widgetDiv.appendChild(this.iconDiv(resource));
		widgetDiv.appendChild(this.textDiv(resource));
		widgetDiv.appendChild(this.progressBarDiv(resource));

		return widgetDiv;
	},

	LastSyncedElement: function(resource) {
		var lastSyncedWrapperDiv = document.createElement("div");
		lastSyncedWrapperDiv.className = "lastsynced";

		var textBottomWrapperDiv = document.createElement("div");
		textBottomWrapperDiv.className = "textbottomwrapper";

		var currentDate = new Date();

		var date = ('0' + currentDate.getDate()).slice(-2) + "/"
			+ ('0' + (currentDate.getMonth()+1)).slice(-2) + "/"
			+ currentDate.getFullYear();

		var lastSyncedDateDiv = document.createElement("div");
		lastSyncedDateDiv.innerHTML = date;
		lastSyncedDateDiv.className = "dimmed light xsmall textbottom";

		var time = ('0' + currentDate.getHours()).slice(-2) + ":"
			+ ('0' + currentDate.getMinutes()).slice(-2) + ":"
			+ ('0' + currentDate.getSeconds()).slice(-2);

		var lastSyncedTimeDiv = document.createElement("div");
		lastSyncedTimeDiv.innerHTML = time;
		lastSyncedTimeDiv.className = "dimmed light xsmall textbottom";

		textBottomWrapperDiv.appendChild(lastSyncedDateDiv);
		textBottomWrapperDiv.appendChild(lastSyncedTimeDiv);

		lastSyncedWrapperDiv.appendChild(textBottomWrapperDiv);

		return lastSyncedWrapperDiv;
	},

	// Override DOM generator
	getDom: function() {
		var wrapper = document.createElement("div");

		if (this.loaded) {
			wrapper.className = "wrapper"

			for (resource in this.config.resources) {
				wrapper.appendChild(this.UIElement(this.config.resources[resource]));
			}

			if (this.config.showLastSynced) {
				wrapper.appendChild(this.LastSyncedElement());
			}
		}
		else {
			wrapper.innerHTML = "Loading...";
			wrapper.className = "dimmed light small";
		}
		return wrapper;
	},
});
