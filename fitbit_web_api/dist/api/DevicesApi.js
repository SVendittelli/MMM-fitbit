"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Devices service.
* @module api/DevicesApi
* @version 1
*/
var DevicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DevicesApi. 
  * @alias module:api/DevicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DevicesApi(apiClient) {
    _classCallCheck(this, DevicesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addAlarms operation.
   * @callback module:api/DevicesApi~addAlarmsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add Alarm
   * Adds the alarm settings to a given ID for a given device.
   * @param {Number} trackerId The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint.
   * @param {String} time Time of day that the alarm vibrates with a UTC timezone offset, e.g. 07:15-08:00.
   * @param {Boolean} enabled true or false. If false, alarm does not vibrate until enabled is set to true.
   * @param {String} recurring true or false. If false, the alarm is a single event.
   * @param {String} weekDays Comma separated list of days of the week on which the alarm vibrates, e.g. MONDAY, TUESDAY.
   * @param {module:api/DevicesApi~addAlarmsCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(DevicesApi, [{
    key: "addAlarms",
    value: function addAlarms(trackerId, time, enabled, recurring, weekDays, callback) {
      var postBody = null;
      // verify the required parameter 'trackerId' is set
      if (trackerId === undefined || trackerId === null) {
        throw new Error("Missing the required parameter 'trackerId' when calling addAlarms");
      }
      // verify the required parameter 'time' is set
      if (time === undefined || time === null) {
        throw new Error("Missing the required parameter 'time' when calling addAlarms");
      }
      // verify the required parameter 'enabled' is set
      if (enabled === undefined || enabled === null) {
        throw new Error("Missing the required parameter 'enabled' when calling addAlarms");
      }
      // verify the required parameter 'recurring' is set
      if (recurring === undefined || recurring === null) {
        throw new Error("Missing the required parameter 'recurring' when calling addAlarms");
      }
      // verify the required parameter 'weekDays' is set
      if (weekDays === undefined || weekDays === null) {
        throw new Error("Missing the required parameter 'weekDays' when calling addAlarms");
      }
      var pathParams = {
        'tracker-id': trackerId
      };
      var queryParams = {
        'time': time,
        'enabled': enabled,
        'recurring': recurring,
        'weekDays': weekDays
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/devices/tracker/{tracker-id}/alarms.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteAlarms operation.
     * @callback module:api/DevicesApi~deleteAlarmsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Alarm
     * Deletes the user's device alarm entry with the given ID for a given device.
     * @param {Number} trackerId The ID of the tracker whose alarms is managed. The tracker-id value is found via the Get Devices endpoint.
     * @param {Number} alarmId The ID of the alarm to be updated. The alarm-id value is found via the Get Alarms endpoint.
     * @param {module:api/DevicesApi~deleteAlarmsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteAlarms",
    value: function deleteAlarms(trackerId, alarmId, callback) {
      var postBody = null;
      // verify the required parameter 'trackerId' is set
      if (trackerId === undefined || trackerId === null) {
        throw new Error("Missing the required parameter 'trackerId' when calling deleteAlarms");
      }
      // verify the required parameter 'alarmId' is set
      if (alarmId === undefined || alarmId === null) {
        throw new Error("Missing the required parameter 'alarmId' when calling deleteAlarms");
      }
      var pathParams = {
        'tracker-id': trackerId,
        'alarm-id': alarmId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/devices/tracker/{tracker-id}/alarms/{alarm-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAlarms operation.
     * @callback module:api/DevicesApi~getAlarmsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Alarms
     * Returns alarms for a device
     * @param {Number} trackerId The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint.
     * @param {module:api/DevicesApi~getAlarmsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getAlarms",
    value: function getAlarms(trackerId, callback) {
      var postBody = null;
      // verify the required parameter 'trackerId' is set
      if (trackerId === undefined || trackerId === null) {
        throw new Error("Missing the required parameter 'trackerId' when calling getAlarms");
      }
      var pathParams = {
        'tracker-id': trackerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/devices/tracker/{tracker-id}/alarms.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getDevices operation.
     * @callback module:api/DevicesApi~getDevicesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Devices
     * Returns a list of the Fitbit devices connected to a user's account.
     * @param {module:api/DevicesApi~getDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getDevices",
    value: function getDevices(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/devices.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateAlarms operation.
     * @callback module:api/DevicesApi~updateAlarmsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Alarm
     * Updates the alarm entry with a given ID for a given device. It also gets a response in the format requested.
     * @param {Number} trackerId The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint.
     * @param {Number} alarmId The ID of the alarm to be updated. The alarm-id value is found in the response of the Get Activity endpoint.
     * @param {String} time Time of day that the alarm vibrates with a UTC timezone offset, e.g. 07:15-08:00.
     * @param {Boolean} enabled true or false. If false, the alarm does not vibrate until enabled is set to true.
     * @param {String} recurring true or false. If false, the alarm is a single event.
     * @param {String} weekDays Comma seperated list of days of the week on which the alarm vibrates, e.g. MONDAY, TUESDAY.
     * @param {Number} snoozeLength Minutes between alarms.
     * @param {Number} snoozeCount Maximum snooze count.
     * @param {module:api/DevicesApi~updateAlarmsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateAlarms",
    value: function updateAlarms(trackerId, alarmId, time, enabled, recurring, weekDays, snoozeLength, snoozeCount, callback) {
      var postBody = null;
      // verify the required parameter 'trackerId' is set
      if (trackerId === undefined || trackerId === null) {
        throw new Error("Missing the required parameter 'trackerId' when calling updateAlarms");
      }
      // verify the required parameter 'alarmId' is set
      if (alarmId === undefined || alarmId === null) {
        throw new Error("Missing the required parameter 'alarmId' when calling updateAlarms");
      }
      // verify the required parameter 'time' is set
      if (time === undefined || time === null) {
        throw new Error("Missing the required parameter 'time' when calling updateAlarms");
      }
      // verify the required parameter 'enabled' is set
      if (enabled === undefined || enabled === null) {
        throw new Error("Missing the required parameter 'enabled' when calling updateAlarms");
      }
      // verify the required parameter 'recurring' is set
      if (recurring === undefined || recurring === null) {
        throw new Error("Missing the required parameter 'recurring' when calling updateAlarms");
      }
      // verify the required parameter 'weekDays' is set
      if (weekDays === undefined || weekDays === null) {
        throw new Error("Missing the required parameter 'weekDays' when calling updateAlarms");
      }
      // verify the required parameter 'snoozeLength' is set
      if (snoozeLength === undefined || snoozeLength === null) {
        throw new Error("Missing the required parameter 'snoozeLength' when calling updateAlarms");
      }
      // verify the required parameter 'snoozeCount' is set
      if (snoozeCount === undefined || snoozeCount === null) {
        throw new Error("Missing the required parameter 'snoozeCount' when calling updateAlarms");
      }
      var pathParams = {
        'tracker-id': trackerId,
        'alarm-id': alarmId
      };
      var queryParams = {
        'time': time,
        'enabled': enabled,
        'recurring': recurring,
        'weekDays': weekDays,
        'snoozeLength': snoozeLength,
        'snoozeCount': snoozeCount
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/devices/tracker/{tracker-id}/alarms/{alarm-id}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return DevicesApi;
}();
exports["default"] = DevicesApi;