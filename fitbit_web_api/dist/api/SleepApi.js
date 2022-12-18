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
* Sleep service.
* @module api/SleepApi
* @version 1
*/
var SleepApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SleepApi. 
  * @alias module:api/SleepApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SleepApi(apiClient) {
    _classCallCheck(this, SleepApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addSleep operation.
   * @callback module:api/SleepApi~addSleepCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Log Sleep
   * Creates a log entry for a sleep event and returns a response in the format requested.
   * @param {String} startTime Start time includes hours and minutes in the format HH:mm.
   * @param {Number} duration Duration in milliseconds.
   * @param {Date} date Log entry in the format yyyy-MM-dd.
   * @param {module:api/SleepApi~addSleepCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(SleepApi, [{
    key: "addSleep",
    value: function addSleep(startTime, duration, date, callback) {
      var postBody = null;
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling addSleep");
      }
      // verify the required parameter 'duration' is set
      if (duration === undefined || duration === null) {
        throw new Error("Missing the required parameter 'duration' when calling addSleep");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling addSleep");
      }
      var pathParams = {};
      var queryParams = {
        'startTime': startTime,
        'duration': duration,
        'date': date
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.2/user/-/sleep.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteSleep operation.
     * @callback module:api/SleepApi~deleteSleepCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Sleep Log
     * Deletes a user's sleep log entry with the given ID.
     * @param {String} logId The ID of the sleep log to be deleted.
     * @param {module:api/SleepApi~deleteSleepCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteSleep",
    value: function deleteSleep(logId, callback) {
      var postBody = null;
      // verify the required parameter 'logId' is set
      if (logId === undefined || logId === null) {
        throw new Error("Missing the required parameter 'logId' when calling deleteSleep");
      }
      var pathParams = {
        'log-id': logId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.2/user/-/sleep/{log-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSleepByDate operation.
     * @callback module:api/SleepApi~getSleepByDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sleep Log
     * The Get Sleep Logs by Date endpoint returns a summary and list of a user's sleep log entries (including naps) as well as detailed sleep entry data for a given day.
     * @param {Date} date The date of records to be returned. In the format yyyy-MM-dd.
     * @param {module:api/SleepApi~getSleepByDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getSleepByDate",
    value: function getSleepByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getSleepByDate");
      }
      var pathParams = {
        'date': date
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.2/user/-/sleep/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSleepByDateRange operation.
     * @callback module:api/SleepApi~getSleepByDateRangeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sleep Logs by Date Range
     * The Get Sleep Logs by Date Range endpoint returns a list of a user's sleep log entries (including naps) as well as detailed sleep entry data for a given date range (inclusive of start and end dates).
     * @param {Date} baseDate The date of records to be returned. In the format yyyy-MM-dd.
     * @param {Date} endDate The date of records to be returned. In the format yyyy-MM-dd.
     * @param {module:api/SleepApi~getSleepByDateRangeCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getSleepByDateRange",
    value: function getSleepByDateRange(baseDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'baseDate' is set
      if (baseDate === undefined || baseDate === null) {
        throw new Error("Missing the required parameter 'baseDate' when calling getSleepByDateRange");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getSleepByDateRange");
      }
      var pathParams = {
        'base-date': baseDate,
        'end-date': endDate
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.2/user/-/sleep/date/{base-date}/{end-date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSleepGoal operation.
     * @callback module:api/SleepApi~getSleepGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sleep Goal
     * Returns the user's sleep goal.
     * @param {module:api/SleepApi~getSleepGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getSleepGoal",
    value: function getSleepGoal(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.2/user/-/sleep/goal.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSleepList operation.
     * @callback module:api/SleepApi~getSleepListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sleep Logs List
     * The Get Sleep Logs List endpoint returns a list of a user's sleep logs (including naps) before or after a given day with offset, limit, and sort order.
     * @param {String} sort The sort order of entries by date asc (ascending) or desc (descending).
     * @param {Number} offset The offset number of entries.
     * @param {Number} limit The maximum number of entries returned (maximum;100).
     * @param {Object} opts Optional parameters
     * @param {Date} opts.beforeDate The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified.
     * @param {Date} opts.afterDate The date in the format yyyy-MM-ddTHH:mm:ss.
     * @param {module:api/SleepApi~getSleepListCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getSleepList",
    value: function getSleepList(sort, offset, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling getSleepList");
      }
      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getSleepList");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getSleepList");
      }
      var pathParams = {};
      var queryParams = {
        'beforeDate': opts['beforeDate'],
        'afterDate': opts['afterDate'],
        'sort': sort,
        'offset': offset,
        'limit': limit
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.2/user/-/sleep/list.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateSleepGoal operation.
     * @callback module:api/SleepApi~updateSleepGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Sleep Goal
     * Create or update the user's sleep goal and get a response in the JSON format.
     * @param {String} minDuration Duration of sleep goal.
     * @param {module:api/SleepApi~updateSleepGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateSleepGoal",
    value: function updateSleepGoal(minDuration, callback) {
      var postBody = null;
      // verify the required parameter 'minDuration' is set
      if (minDuration === undefined || minDuration === null) {
        throw new Error("Missing the required parameter 'minDuration' when calling updateSleepGoal");
      }
      var pathParams = {};
      var queryParams = {
        'minDuration': minDuration
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.2/user/-/sleep/goal.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return SleepApi;
}();
exports["default"] = SleepApi;