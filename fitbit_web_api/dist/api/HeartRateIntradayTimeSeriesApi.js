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
* HeartRateIntradayTimeSeries service.
* @module api/HeartRateIntradayTimeSeriesApi
* @version 1
*/
var HeartRateIntradayTimeSeriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new HeartRateIntradayTimeSeriesApi. 
  * @alias module:api/HeartRateIntradayTimeSeriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function HeartRateIntradayTimeSeriesApi(apiClient) {
    _classCallCheck(this, HeartRateIntradayTimeSeriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getHeartByDateIntraday operation.
   * @callback module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateIntradayCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Heart Rate Intraday Time Series
   * Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.
   * @param {Date} date The date in the format of yyyy-MM-dd or today.
   * @param {String} detailLevel The number of data points to include either 1sec, 1min, 5min or 15min.
   * @param {module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateIntradayCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(HeartRateIntradayTimeSeriesApi, [{
    key: "getHeartByDateIntraday",
    value: function getHeartByDateIntraday(date, detailLevel, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getHeartByDateIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getHeartByDateIntraday");
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
      return this.apiClient.callApi('/1/user/-/activities/heart/date/{date}/1d/{detail-level}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getHeartByDateRangeIntraday operation.
     * @callback module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateRangeIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Heart Rate Intraday Time Series
     * Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.
     * @param {Date} date The date in the format of yyyy-MM-dd or today.
     * @param {Date} endDate The end date in the format of yyyy-MM-dd or today.
     * @param {String} detailLevel The number of data points to include either 1sec, 1min, 5min or 15min.
     * @param {module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateRangeIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getHeartByDateRangeIntraday",
    value: function getHeartByDateRangeIntraday(date, endDate, detailLevel, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getHeartByDateRangeIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getHeartByDateRangeIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getHeartByDateRangeIntraday");
      }
      var pathParams = {
        'date': date,
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
      return this.apiClient.callApi('/1/user/-/activities/heart/date/{date}/{end-date}/{detail-level}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getHeartByDateRangeTimestampIntraday operation.
     * @callback module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateRangeTimestampIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Heart Rate Intraday Time Series
     * Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.
     * @param {Date} date The date in the format of yyyy-MM-dd or today.
     * @param {Date} endDate The end date in the format of yyyy-MM-dd or today.
     * @param {String} detailLevel The number of data points to include either 1sec, 1min, 5min or 15min.
     * @param {String} startTime The start of the period in the format of HH:mm.
     * @param {String} endTime The end time of the period in the format of HH:mm.
     * @param {module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateRangeTimestampIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getHeartByDateRangeTimestampIntraday",
    value: function getHeartByDateRangeTimestampIntraday(date, endDate, detailLevel, startTime, endTime, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getHeartByDateRangeTimestampIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getHeartByDateRangeTimestampIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getHeartByDateRangeTimestampIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getHeartByDateRangeTimestampIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getHeartByDateRangeTimestampIntraday");
      }
      var pathParams = {
        'date': date,
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
      return this.apiClient.callApi('/1/user/-/activities/heart/date/{date}/{end-date}/{detail-level}/time/{start-time}/{end-time}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getHeartByDateTimestampIntraday operation.
     * @callback module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateTimestampIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Heart Rate Intraday Time Series
     * Returns the intraday time series for a given resource in the format requested. If your application has the appropriate access, your calls to a time series endpoint for a specific day (by using start and end dates on the same day or a period of 1d), the response will include extended intraday values with a one-minute detail level for that day. Unlike other time series calls that allow fetching data of other users, intraday data is available only for and to the authorized user.
     * @param {Date} date The date in the format of yyyy-MM-dd or today.
     * @param {String} detailLevel The number of data points to include either 1sec, 1min, 5min or 15min.
     * @param {String} startTime The start of the period in the format of HH:mm.
     * @param {String} endTime The end time of the period in the format of HH:mm.
     * @param {module:api/HeartRateIntradayTimeSeriesApi~getHeartByDateTimestampIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getHeartByDateTimestampIntraday",
    value: function getHeartByDateTimestampIntraday(date, detailLevel, startTime, endTime, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getHeartByDateTimestampIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getHeartByDateTimestampIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getHeartByDateTimestampIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getHeartByDateTimestampIntraday");
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
      return this.apiClient.callApi('/1/user/-/activities/heart/date/{date}/1d/{detail-level}/time/{start-time}/{end-time}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return HeartRateIntradayTimeSeriesApi;
}();
exports["default"] = HeartRateIntradayTimeSeriesApi;