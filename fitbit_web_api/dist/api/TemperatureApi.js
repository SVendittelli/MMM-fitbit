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
* Temperature service.
* @module api/TemperatureApi
* @version 1
*/
var TemperatureApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TemperatureApi. 
  * @alias module:api/TemperatureApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TemperatureApi(apiClient) {
    _classCallCheck(this, TemperatureApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getTempCoreSummaryByDate operation.
   * @callback module:api/TemperatureApi~getTempCoreSummaryByDateCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Temperature (Core) Summary by Date
   * Returns the Temperature (Core) data for a single date. Temperature (Core) data applies specifically to data logged manually by the user throughout the day.
   * @param {Date} date The date in the format of yyyy-MM-dd or today.
   * @param {module:api/TemperatureApi~getTempCoreSummaryByDateCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(TemperatureApi, [{
    key: "getTempCoreSummaryByDate",
    value: function getTempCoreSummaryByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getTempCoreSummaryByDate");
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
      return this.apiClient.callApi('/1/user/-/temp/core/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTempCoreSummaryByInterval operation.
     * @callback module:api/TemperatureApi~getTempCoreSummaryByIntervalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Temperature (Core) Summary by Interval
     * Returns Temperature (Core) data for a date range. Temperature (Core) data applies specifically to data logged manually by the user throughout the day and the maximum date range cannot exceed 30 days.
     * @param {Date} startDate The date in the format of yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format of yyyy-MM-dd or today.
     * @param {module:api/TemperatureApi~getTempCoreSummaryByIntervalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getTempCoreSummaryByInterval",
    value: function getTempCoreSummaryByInterval(startDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getTempCoreSummaryByInterval");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getTempCoreSummaryByInterval");
      }
      var pathParams = {
        'startDate': startDate,
        'endDate': endDate
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/temp/core/date/{startDate}/{endDate}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTempSkinSummaryByInterval operation.
     * @callback module:api/TemperatureApi~getTempSkinSummaryByIntervalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Temperature (Skin) Summary by Interval
     * Returns Temperature (Skin) data for a date range. It only returns a value for dates on which the Fitbit device was able to record Temperature (skin) data and the maximum date range cannot exceed 30 days.
     * @param {Date} startDate The date in the format of yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format of yyyy-MM-dd or today.
     * @param {module:api/TemperatureApi~getTempSkinSummaryByIntervalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getTempSkinSummaryByInterval",
    value: function getTempSkinSummaryByInterval(startDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getTempSkinSummaryByInterval");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getTempSkinSummaryByInterval");
      }
      var pathParams = {
        'startDate': startDate,
        'endDate': endDate
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/temp/skin/date/{startDate}/{endDate}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getTempSkinSummaryDate operation.
     * @callback module:api/TemperatureApi~getTempSkinSummaryDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Temperature (Skin) Summary by Date
     * Returns the Temperature (Skin) data for a single date. Temperature (Skin) data applies specifically to a user’s “main sleep”, which is the longest single period of time asleep on a given date.
     * @param {Date} date The date in the format of yyyy-MM-dd or today.
     * @param {module:api/TemperatureApi~getTempSkinSummaryDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getTempSkinSummaryDate",
    value: function getTempSkinSummaryDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getTempSkinSummaryDate");
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
      return this.apiClient.callApi('/1/user/-/temp/skin/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return TemperatureApi;
}();
exports["default"] = TemperatureApi;