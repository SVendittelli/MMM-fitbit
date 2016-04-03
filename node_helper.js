'use strict';
const NodeHelper = require('node_helper');
const PythonShell = require('python-shell');
PythonShell.defaultOptions = { mode: 'json', scriptPath: 'modules/MMM-fitbit/python' };

module.exports = NodeHelper.create({
	
	setCreds: function (id,key,secret) {
		var options = {
			args: [id, key, secret]
		}
		PythonShell.run('iniHandler.py', options, function (err, results) {
			if (err) throw err;
			// results is an array consisting of messages collected during execution
			console.log('results: %j', results);
		});
	},
	
	getData: function () {
		var stepCount = 0;
		const self = this;
		const fileName = 'getData.py';
		console.log('Running ' + fileName);
		const pyshell = new PythonShell(fileName);
		
		pyshell.on('message', function (message) {
			if (message['type'] == 'data') {
				self.sendSocketNotification('DATA', message);
			}
		});
		
		pyshell.end(function (err) {
			if (err) throw err;
			
			self.sendSocketNotification('UPDATE', 'Data recieved.');
			console.log('Finished running.');
		});
	},
	
	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		if (notification === 'SET CREDS') {
			console.log('Set credential request recieved.');
			console.log(payload);
			this.setCreds(payload.client_id,payload.client_key,payload.client_secret);
		};
		if (notification === 'RUN') {
			console.log('Run request recieved.');
			this.getData();
		};
		if (notification === 'TESTING') {
			console.log(payload);
		};
	},
});