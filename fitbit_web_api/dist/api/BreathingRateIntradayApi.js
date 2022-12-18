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
* BreathingRateIntraday service.
* @module api/BreathingRateIntradayApi
* @version 1
*/
var BreathingRateIntradayApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BreathingRateIntradayApi. 
  * @alias module:api/BreathingRateIntradayApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BreathingRateIntradayApi(apiClient) {
    _classCallCheck(this, BreathingRateIntradayApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getBreathingRateIntradayByDate operation.
   * @callback module:api/BreathingRateIntradayApi~getBreathingRateIntradayByDateCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Breathing Rate Intraday by Date
   * This endpoint returns intraday breathing rate data for a single date. It measures the average breathing rate throughout the day and categories your breathing rate by sleep stage. Sleep stages vary between light sleep, deep sleep, REM sleep, and full sleep.
   * @param {Date} date The date in the format of yyyy-MM-dd or today.
   * @param {module:api/BreathingRateIntradayApi~getBreathingRateIntradayByDateCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(BreathingRateIntradayApi, [{
    key: "getBreathingRateIntradayByDate",
    value: function getBreathingRateIntradayByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getBreathingRateIntradayByDate");
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
      return this.apiClient.callApi('/1/user/-/br/date/{date}/all.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getBreathingRateIntradayByInterval operation.
     * @callback module:api/BreathingRateIntradayApi~getBreathingRateIntradayByIntervalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Breathing Rate Intraday by Interval
     * This endpoint returns intraday breathing rate data for a date range. It measures the average breathing rate throughout the day and categories your breathing rate by sleep stage. Sleep stages vary between light sleep, deep sleep, REM sleep, and full sleep.
     * @param {Date} startDate The date in the format of yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format of yyyy-MM-dd or today.
     * @param {module:api/BreathingRateIntradayApi~getBreathingRateIntradayByIntervalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getBreathingRateIntradayByInterval",
    value: function getBreathingRateIntradayByInterval(startDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getBreathingRateIntradayByInterval");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getBreathingRateIntradayByInterval");
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
      return this.apiClient.callApi('/1/user/-/br/date/{startDate}/{endDate}/all.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return BreathingRateIntradayApi;
}();
exports["default"] = BreathingRateIntradayApi;