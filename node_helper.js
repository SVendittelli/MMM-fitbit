'use strict';
const NodeHelper = require('node_helper');
const PythonShell = require('python-shell');

module.exports = NodeHelper.create({
	
	pythonRun: function () {
		var stepCount = 0;
		const self = this;
		const fileName = 'getFitbitData.py';
		const options = {
			//mode: 'json',
			scriptPath: 'modules/' + this.name + '/python',
		};
		console.log('Running ' + fileName);
		const pyshell = new PythonShell(fileName, options);
		
		pyshell.on('message', function (message) {
			if (message.indexOf('steps') > -1) {
				stepCount = message.slice(7);
				console.log("Step count recorded.");
				self.sendSocketNotification('COUNTED', {steps: stepCount});
			}
		});
		
		pyshell.end(function (err) {
			if (err) throw err;
			console.log('Finished running.');
		});
	},
	
	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		if (notification === 'RUN') {
			this.pythonRun()
			//var stepCount = 10;
			//this.sendSocketNotification('COUNTED', {"steps": stepCount});
			//console.log("Updating steps to " + stepCount);
		};
	},
});