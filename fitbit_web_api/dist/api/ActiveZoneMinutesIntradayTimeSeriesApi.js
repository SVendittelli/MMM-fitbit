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
* ActiveZoneMinutesIntradayTimeSeries service.
* @module api/ActiveZoneMinutesIntradayTimeSeriesApi
* @version 1
*/
var ActiveZoneMinutesIntradayTimeSeriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActiveZoneMinutesIntradayTimeSeriesApi. 
  * @alias module:api/ActiveZoneMinutesIntradayTimeSeriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActiveZoneMinutesIntradayTimeSeriesApi(apiClient) {
    _classCallCheck(this, ActiveZoneMinutesIntradayTimeSeriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getAZMByDateIntraday operation.
   * @callback module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByDateIntradayCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get AZM Intraday by Date
   * Returns the active zone minutes intraday data for a 24 hour period by specifying a date and/or time range.
   * @param {Date} date The date in the format yyyy-MM-dd or today
   * @param {module:model/String} detailLevel The detail for which data will be returned. **Supported:** 1min | 5min | 15min
   * @param {module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByDateIntradayCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(ActiveZoneMinutesIntradayTimeSeriesApi, [{
    key: "getAZMByDateIntraday",
    value: function getAZMByDateIntraday(date, detailLevel, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getAZMByDateIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getAZMByDateIntraday");
      }
      var pathParams = {
        'date': date,
        'detail-level': detailLevel
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/active-zone-minutes/date/{date}/1d/{detail-level}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAZMByDateTimeSeriesIntraday operation.
     * @callback module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByDateTimeSeriesIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AZM Intraday by Date
     * Returns the active zone minutes intraday data for a 24 hour period by specifying a date and/or time range.
     * @param {Date} date The date in the format yyyy-MM-dd or today
     * @param {module:model/String} detailLevel The detail for which data will be returned. **Supported:** 1min | 5min | 15min
     * @param {String} startTime The start of the period in the format HH:mm.
     * @param {String} endTime The end of the period in the format HH:mm.
     * @param {module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByDateTimeSeriesIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getAZMByDateTimeSeriesIntraday",
    value: function getAZMByDateTimeSeriesIntraday(date, detailLevel, startTime, endTime, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getAZMByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getAZMByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getAZMByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getAZMByDateTimeSeriesIntraday");
      }
      var pathParams = {
        'date': date,
        'detail-level': detailLevel,
        'start-time': startTime,
        'end-time': endTime
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/active-zone-minutes/date/{date}/1d/{detail-level}/time/{start-time}/{end-time}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAZMByIntervalIntraday operation.
     * @callback module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByIntervalIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AZM Intraday by Interval
     * Returns the active zone minutes intraday data for a 24 hour period by specifying a date range and/or time range.
     * @param {Date} startDate The date in the format yyyy-MM-dd or today
     * @param {Date} endDate The date in the format yyyy-MM-dd or today
     * @param {module:model/String} detailLevel The detail for which data will be returned. **Support:** 1min | 5min | 15min
     * @param {module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByIntervalIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getAZMByIntervalIntraday",
    value: function getAZMByIntervalIntraday(startDate, endDate, detailLevel, callback) {
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getAZMByIntervalIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getAZMByIntervalIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getAZMByIntervalIntraday");
      }
      var pathParams = {
        'start-date': startDate,
        'end-date': endDate,
        'detail-level': detailLevel
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/active-zone-minutes/date/{start-date}/{end-date}/{detail-level}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAZMByIntervalTimeSeriesIntraday operation.
     * @callback module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByIntervalTimeSeriesIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AZM Intraday by Interval
     * Returns the active zone minutes intraday data for a 24 hour period by specifying a date range and/or time range.
     * @param {Date} startDate The date in the format yyyy-MM-dd or today
     * @param {Date} endDate The date in the format yyyy-MM-dd or today
     * @param {module:model/String} detailLevel The detail for which data will be returned. **Support:** 1min | 5min | 15min
     * @param {String} startTime The start of the period in the format HH:mm.
     * @param {String} endTime The end of the period in the format HH:mm.
     * @param {module:api/ActiveZoneMinutesIntradayTimeSeriesApi~getAZMByIntervalTimeSeriesIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getAZMByIntervalTimeSeriesIntraday",
    value: function getAZMByIntervalTimeSeriesIntraday(startDate, endDate, detailLevel, startTime, endTime, callback) {
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getAZMByIntervalTimeSeriesIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getAZMByIntervalTimeSeriesIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getAZMByIntervalTimeSeriesIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getAZMByIntervalTimeSeriesIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getAZMByIntervalTimeSeriesIntraday");
      }
      var pathParams = {
        'start-date': startDate,
        'end-date': endDate,
        'detail-level': detailLevel,
        'start-time': startTime,
        'end-time': endTime
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/active-zone-minutes/date/{start-date}/{end-date}/time/{start-time}/{end-time}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ActiveZoneMinutesIntradayTimeSeriesApi;
}();
exports["default"] = ActiveZoneMinutesIntradayTimeSeriesApi;