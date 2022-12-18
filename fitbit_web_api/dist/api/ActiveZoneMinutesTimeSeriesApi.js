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
* ActiveZoneMinutesTimeSeries service.
* @module api/ActiveZoneMinutesTimeSeriesApi
* @version 1
*/
var ActiveZoneMinutesTimeSeriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActiveZoneMinutesTimeSeriesApi. 
  * @alias module:api/ActiveZoneMinutesTimeSeriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActiveZoneMinutesTimeSeriesApi(apiClient) {
    _classCallCheck(this, ActiveZoneMinutesTimeSeriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getAZMTimeSeriesByDate operation.
   * @callback module:api/ActiveZoneMinutesTimeSeriesApi~getAZMTimeSeriesByDateCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get AZM Time Series by Date
   * Returns the daily summary values over a period of time by specifying a date and time period.
   * @param {Date} date The date in the format yyyy-MM-dd or today
   * @param {module:model/String} period The range for which data will be returned. **Supported:** 1d | 7d | 30d | 1w | 1m | 3m | 6m | 1y
   * @param {module:api/ActiveZoneMinutesTimeSeriesApi~getAZMTimeSeriesByDateCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(ActiveZoneMinutesTimeSeriesApi, [{
    key: "getAZMTimeSeriesByDate",
    value: function getAZMTimeSeriesByDate(date, period, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getAZMTimeSeriesByDate");
      }
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getAZMTimeSeriesByDate");
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
      return this.apiClient.callApi('/1/user/-/activities/active-zone-minutes/date/{date}/{period}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getAZMTimeSeriesByInterval operation.
     * @callback module:api/ActiveZoneMinutesTimeSeriesApi~getAZMTimeSeriesByIntervalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get AZM Time Series by Interval
     * Returns the daily summary values over an interval by specifying a date range.
     * @param {Date} startDate The date in the format yyyy-MM-dd or today
     * @param {Date} endDate The date in the format yyyy-MM-dd or today
     * @param {module:api/ActiveZoneMinutesTimeSeriesApi~getAZMTimeSeriesByIntervalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getAZMTimeSeriesByInterval",
    value: function getAZMTimeSeriesByInterval(startDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getAZMTimeSeriesByInterval");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getAZMTimeSeriesByInterval");
      }
      var pathParams = {
        'start-date': startDate,
        'end-date': endDate
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/active-zone-minutes/date/{start-date}/{end-date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ActiveZoneMinutesTimeSeriesApi;
}();
exports["default"] = ActiveZoneMinutesTimeSeriesApi;