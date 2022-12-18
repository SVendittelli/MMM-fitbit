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
* ActivityIntradayTimeSeries service.
* @module api/ActivityIntradayTimeSeriesApi
* @version 1
*/
var ActivityIntradayTimeSeriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActivityIntradayTimeSeriesApi. 
  * @alias module:api/ActivityIntradayTimeSeriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActivityIntradayTimeSeriesApi(apiClient) {
    _classCallCheck(this, ActivityIntradayTimeSeriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getActivitiesResourceByDateIntraday operation.
   * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateIntradayCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Intraday Time Series
   * Returns the Intraday Time Series for a given resource in the format requested.
   * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
   * @param {Date} date The date in the format yyyy-MM-dd or today.
   * @param {String} detailLevel Number of data points to include. Either 1min or 15min. Optional.
   * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateIntradayCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(ActivityIntradayTimeSeriesApi, [{
    key: "getActivitiesResourceByDateIntraday",
    value: function getActivitiesResourceByDateIntraday(resourcePath, date, detailLevel, callback) {
      var postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateIntraday");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getActivitiesResourceByDateIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateIntraday");
      }
      var pathParams = {
        'resource-path': resourcePath,
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
      return this.apiClient.callApi('/1/user/-/activities/{resource-path}/date/{date}/1d/{detail-level}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesResourceByDateRangeIntraday operation.
     * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Intraday Time Series
     * Returns the Activity Intraday Time Series for a given resource in the format requested.
     * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
     * @param {Date} baseDate The date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format yyyy-MM-dd or today.
     * @param {String} detailLevel Number of data points to include. Either 1min or 15min. Optional.
     * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesResourceByDateRangeIntraday",
    value: function getActivitiesResourceByDateRangeIntraday(resourcePath, baseDate, endDate, detailLevel, callback) {
      var postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateRangeIntraday");
      }
      // verify the required parameter 'baseDate' is set
      if (baseDate === undefined || baseDate === null) {
        throw new Error("Missing the required parameter 'baseDate' when calling getActivitiesResourceByDateRangeIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getActivitiesResourceByDateRangeIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateRangeIntraday");
      }
      var pathParams = {
        'resource-path': resourcePath,
        'base-date': baseDate,
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
      return this.apiClient.callApi('/1/user/-/activities/{resource-path}/date/{base-date}/{end-date}/{detail-level}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesResourceByDateRangeTimeSeriesIntraday operation.
     * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeTimeSeriesIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Intraday Time Series
     * Returns the Intraday Time Series for a given resource in the format requested.
     * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
     * @param {Date} date The date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format yyyy-MM-dd or today.
     * @param {String} detailLevel Number of data points to include. Either 1min or 15min.
     * @param {String} startTime The start of the period in the format HH:mm.
     * @param {String} endTime The end of the period in the format HH:mm.
     * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateRangeTimeSeriesIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesResourceByDateRangeTimeSeriesIntraday",
    value: function getActivitiesResourceByDateRangeTimeSeriesIntraday(resourcePath, date, endDate, detailLevel, startTime, endTime, callback) {
      var postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getActivitiesResourceByDateRangeTimeSeriesIntraday");
      }
      var pathParams = {
        'resource-path': resourcePath,
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
      return this.apiClient.callApi('/1/user/-/activities/{resource-path}/date/{date}/{end-date}/{detail-level}/time/{start-time}/{end-time}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesResourceByDateTimeSeriesIntraday operation.
     * @callback module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateTimeSeriesIntradayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Intraday Time Series
     * Returns the Intraday Time Series for a given resource in the format requested.
     * @param {module:model/String} resourcePath The resource-path; see options in the Resource Path Options section in the full documentation.
     * @param {Date} date The date in the format yyyy-MM-dd or today.
     * @param {String} detailLevel Number of data points to include. Either 1min or 15min.
     * @param {String} startTime The start of the period in the format HH:mm.
     * @param {String} endTime The end of the period in the format HH:mm.
     * @param {module:api/ActivityIntradayTimeSeriesApi~getActivitiesResourceByDateTimeSeriesIntradayCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesResourceByDateTimeSeriesIntraday",
    value: function getActivitiesResourceByDateTimeSeriesIntraday(resourcePath, date, detailLevel, startTime, endTime, callback) {
      var postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'detailLevel' is set
      if (detailLevel === undefined || detailLevel === null) {
        throw new Error("Missing the required parameter 'detailLevel' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getActivitiesResourceByDateTimeSeriesIntraday");
      }
      var pathParams = {
        'resource-path': resourcePath,
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
      return this.apiClient.callApi('/1/user/-/activities/{resource-path}/date/{date}/1d/{detail-level}/time/{start-time}/{end-time}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ActivityIntradayTimeSeriesApi;
}();
exports["default"] = ActivityIntradayTimeSeriesApi;