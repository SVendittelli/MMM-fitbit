'use strict';
const NodeHelper = require('node_helper');
const PythonShell = require('python-shell');
PythonShell.defaultOptions = { scriptPath: 'modules/MMM-fitbit/python' };

module.exports = NodeHelper.create({
	
	setCreds: function (id,key,secret) {
		var options = {
			mode: 'json',
			args: [id, key, secret]
		}
		PythonShell.run('setCredentials.py', options, function (err, results) {
			if (err) throw err;
			// results is an array consisting of messages collected during execution
			console.log('results: %j', results);
		});
	},
	
	getData: function () {
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
		if (notification === 'SET CREDS') {
			console.log('Set credential request recieved.');
			console.log(payload)
			this.setCreds(payload.client_id,payload.client_key,payload.client_secret);
		};
		if (notification === 'RUN') {
			console.log('Run request recieved.');
			this.getData();
		};
	},
});