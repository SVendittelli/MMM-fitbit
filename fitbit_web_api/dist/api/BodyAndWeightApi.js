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
* BodyAndWeight service.
* @module api/BodyAndWeightApi
* @version 1
*/
var BodyAndWeightApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BodyAndWeightApi. 
  * @alias module:api/BodyAndWeightApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BodyAndWeightApi(apiClient) {
    _classCallCheck(this, BodyAndWeightApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addBodyFatLog operation.
   * @callback module:api/BodyAndWeightApi~addBodyFatLogCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Log Body Fat
   * Creates a log entry for body fat and returns a response in the format requested.
   * @param {Number} fat Body fat in the format of X.XX in the unit system that corresponds to the Accept-Language header provided.
   * @param {Date} date Log entry date in the format yyyy-MM-dd.
   * @param {String} time Time of the measurement in hours and minutes in the format HH:mm:ss that is set to the last second of the day if not provided.
   * @param {module:api/BodyAndWeightApi~addBodyFatLogCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(BodyAndWeightApi, [{
    key: "addBodyFatLog",
    value: function addBodyFatLog(fat, date, time, callback) {
      var postBody = null;
      // verify the required parameter 'fat' is set
      if (fat === undefined || fat === null) {
        throw new Error("Missing the required parameter 'fat' when calling addBodyFatLog");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling addBodyFatLog");
      }
      // verify the required parameter 'time' is set
      if (time === undefined || time === null) {
        throw new Error("Missing the required parameter 'time' when calling addBodyFatLog");
      }
      var pathParams = {};
      var queryParams = {
        'fat': fat,
        'date': date,
        'time': time
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/fat.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addWeightLog operation.
     * @callback module:api/BodyAndWeightApi~addWeightLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log Weight
     * Creates log entry for a body weight using units in the unit systems that corresponds to the Accept-Language header provided and gets a response in the format requested.
     * @param {Number} weight Weight in the format of X.XX.
     * @param {Date} date Log entry date in the format yyyy-MM-dd.
     * @param {Object} opts Optional parameters
     * @param {String} opts.time Time of the measurement; hours and minutes in the format of HH:mm:ss, which is set to the last second of the day if not provided.
     * @param {module:api/BodyAndWeightApi~addWeightLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addWeightLog",
    value: function addWeightLog(weight, date, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'weight' is set
      if (weight === undefined || weight === null) {
        throw new Error("Missing the required parameter 'weight' when calling addWeightLog");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling addWeightLog");
      }
      var pathParams = {};
      var queryParams = {
        'weight': weight,
        'date': date,
        'time': opts['time']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/weight.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteBodyFatLog operation.
     * @callback module:api/BodyAndWeightApi~deleteBodyFatLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Body Fat Log
     * Deletes a user's body fat log entry with the given ID.
     * @param {Number} bodyFatLogId The ID of the body fat log entry.
     * @param {module:api/BodyAndWeightApi~deleteBodyFatLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteBodyFatLog",
    value: function deleteBodyFatLog(bodyFatLogId, callback) {
      var postBody = null;
      // verify the required parameter 'bodyFatLogId' is set
      if (bodyFatLogId === undefined || bodyFatLogId === null) {
        throw new Error("Missing the required parameter 'bodyFatLogId' when calling deleteBodyFatLog");
      }
      var pathParams = {
        'body-fat-log-id': bodyFatLogId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/fat/{body-fat-log-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteWeightLog operation.
     * @callback module:api/BodyAndWeightApi~deleteWeightLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Weight Log
     * Deletes a user's body weight log entrywith the given ID.
     * @param {Number} bodyWeightLogId The ID of the body weight log entry.
     * @param {module:api/BodyAndWeightApi~deleteWeightLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteWeightLog",
    value: function deleteWeightLog(bodyWeightLogId, callback) {
      var postBody = null;
      // verify the required parameter 'bodyWeightLogId' is set
      if (bodyWeightLogId === undefined || bodyWeightLogId === null) {
        throw new Error("Missing the required parameter 'bodyWeightLogId' when calling deleteWeightLog");
      }
      var pathParams = {
        'body-weight-log-id': bodyWeightLogId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/weight/{body-weight-log-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getBodyFatByDate operation.
     * @callback module:api/BodyAndWeightApi~getBodyFatByDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Fat Logs
     * Retreives a list of all user's body fat log entries for a given day in the format requested.
     * @param {Date} date The date in the format yyyy-MM-dd.
     * @param {module:api/BodyAndWeightApi~getBodyFatByDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getBodyFatByDate",
    value: function getBodyFatByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getBodyFatByDate");
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
      return this.apiClient.callApi('/1/user/-/body/log/fat/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getBodyFatByDatePeriod operation.
     * @callback module:api/BodyAndWeightApi~getBodyFatByDatePeriodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Fat Logs
     * Retreives a list of all user's body fat log entries for a given day in the format requested.
     * @param {Date} date The date in the format yyyy-MM-dd.
     * @param {String} period The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
     * @param {module:api/BodyAndWeightApi~getBodyFatByDatePeriodCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getBodyFatByDatePeriod",
    value: function getBodyFatByDatePeriod(date, period, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getBodyFatByDatePeriod");
      }
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getBodyFatByDatePeriod");
      }
      var pathParams = {
        'date': date,
        'period': period
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/fat/date/{date}/{period}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getBodyFatByDateRange operation.
     * @callback module:api/BodyAndWeightApi~getBodyFatByDateRangeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Fat Logs
     * Retreives a list of all user's body fat log entries for a given day in the format requested.
     * @param {Date} baseDate The range start date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The end date of the range.
     * @param {module:api/BodyAndWeightApi~getBodyFatByDateRangeCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getBodyFatByDateRange",
    value: function getBodyFatByDateRange(baseDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'baseDate' is set
      if (baseDate === undefined || baseDate === null) {
        throw new Error("Missing the required parameter 'baseDate' when calling getBodyFatByDateRange");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getBodyFatByDateRange");
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
      return this.apiClient.callApi('/1/user/-/body/log/fat/date/{base-date}/{end-date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getBodyGoals operation.
     * @callback module:api/BodyAndWeightApi~getBodyGoalsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Goals
     * Retreives a user's current body fat percentage or weight goal using units in the unit systems that corresponds to the Accept-Language header providedin the format requested.
     * @param {String} goalType weight or fat.
     * @param {module:api/BodyAndWeightApi~getBodyGoalsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getBodyGoals",
    value: function getBodyGoals(goalType, callback) {
      var postBody = null;
      // verify the required parameter 'goalType' is set
      if (goalType === undefined || goalType === null) {
        throw new Error("Missing the required parameter 'goalType' when calling getBodyGoals");
      }
      var pathParams = {
        'goal-type': goalType
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/{goal-type}/goal.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWeightByDate operation.
     * @callback module:api/BodyAndWeightApi~getWeightByDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Weight Logs
     * Retreives a list of all user's body weight log entries for a given day using units in the unit systems which corresponds to the Accept-Language header provided.
     * @param {Date} date The date in the format yyyy-MM-dd.
     * @param {module:api/BodyAndWeightApi~getWeightByDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getWeightByDate",
    value: function getWeightByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getWeightByDate");
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
      return this.apiClient.callApi('/1/user/-/body/log/weight/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWeightByDatePeriod operation.
     * @callback module:api/BodyAndWeightApi~getWeightByDatePeriodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Fat Logs
     * Retreives a list of all user's body weight log entries for a given day in the format requested.
     * @param {Date} date The date in the format yyyy-MM-dd.
     * @param {String} period The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
     * @param {module:api/BodyAndWeightApi~getWeightByDatePeriodCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getWeightByDatePeriod",
    value: function getWeightByDatePeriod(date, period, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getWeightByDatePeriod");
      }
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getWeightByDatePeriod");
      }
      var pathParams = {
        'date': date,
        'period': period
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/weight/date/{date}/{period}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWeightByDateRange operation.
     * @callback module:api/BodyAndWeightApi~getWeightByDateRangeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Fat Logs
     * Retreives a list of all user's body fat log entries for a given day in the format requested.
     * @param {Date} baseDate The range start date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The end date of the range.
     * @param {module:api/BodyAndWeightApi~getWeightByDateRangeCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getWeightByDateRange",
    value: function getWeightByDateRange(baseDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'baseDate' is set
      if (baseDate === undefined || baseDate === null) {
        throw new Error("Missing the required parameter 'baseDate' when calling getWeightByDateRange");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getWeightByDateRange");
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
      return this.apiClient.callApi('/1/user/-/body/log/weight/date/{base-date}/{end-date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateBodyFatGoal operation.
     * @callback module:api/BodyAndWeightApi~updateBodyFatGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Body Fat Goal
     * Updates user's fat percentage goal.
     * @param {String} fat Target body fat percentage; in the format X.XX.
     * @param {module:api/BodyAndWeightApi~updateBodyFatGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateBodyFatGoal",
    value: function updateBodyFatGoal(fat, callback) {
      var postBody = null;
      // verify the required parameter 'fat' is set
      if (fat === undefined || fat === null) {
        throw new Error("Missing the required parameter 'fat' when calling updateBodyFatGoal");
      }
      var pathParams = {};
      var queryParams = {
        'fat': fat
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/fat/goal.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateWeightGoal operation.
     * @callback module:api/BodyAndWeightApi~updateWeightGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Weight Goal
     * Updates user's fat percentage goal.
     * @param {String} startDate Weight goal start date; in the format yyyy-MM-dd.
     * @param {String} startWeight Weight goal start weight; in the format X.XX, in the unit systems that corresponds to the Accept-Language header provided.
     * @param {Object} opts Optional parameters
     * @param {String} opts.weight Weight goal target weight; in the format X.XX, in the unit systems that corresponds to the Accept-Language header provided; required if user doesn't have an existing weight goal.
     * @param {module:api/BodyAndWeightApi~updateWeightGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateWeightGoal",
    value: function updateWeightGoal(startDate, startWeight, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling updateWeightGoal");
      }
      // verify the required parameter 'startWeight' is set
      if (startWeight === undefined || startWeight === null) {
        throw new Error("Missing the required parameter 'startWeight' when calling updateWeightGoal");
      }
      var pathParams = {};
      var queryParams = {
        'startDate': startDate,
        'startWeight': startWeight,
        'weight': opts['weight']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/body/log/weight/goal.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return BodyAndWeightApi;
}();
exports["default"] = BodyAndWeightApi;