/* Magic Mirror
 * Node Helper: MMM-fitbit
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var NodeHelper = require('node_helper');
var PythonShell = require('python-shell');

module.exports = NodeHelper.create({
	
	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		if (notification === 'SET CREDS') {
			console.log('Set credential request recieved.');
			console.log(payload);
			this.setCreds(payload.client_id,payload.client_secret);
		};
		if (notification === 'GET DATA') {
			console.log('Initial run request recieved.');
			this.getData();
		};
	},
	
	setCreds: function (id,secret) {
		var options = {
			mode: 'json',
			scriptPath: 'modules/MMM-fitbit/python',
			args: [id, secret]
		}
		PythonShell.run('iniHandler.py', options, function (err, results) {
			if (err) throw err;
			// results is an array consisting of messages collected during execution
			console.log('results: %j', results);
		});
	},
	
	getData: function () {
		const self = this;
		const fileName = 'getData.py';
		console.log('Running ' + fileName);
		const fitbitPyShell = new PythonShell(fileName, {mode: 'json', scriptPath: 'modules/MMM-fitbit/python'});
		
		fitbitPyShell.on('message', function (message) {
			if (message['type'] == 'data') {
				self.sendSocketNotification('DATA', message);
			}
		});
		
		fitbitPyShell.end(function (err) {
			if (err) throw err;
			self.sendSocketNotification('UPDATE', 'Finished getting data');
			console.log('Finished getting data');
		});
	},
});