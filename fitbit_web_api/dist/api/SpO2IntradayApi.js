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
* SpO2Intraday service.
* @module api/SpO2IntradayApi
* @version 1
*/
var SpO2IntradayApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SpO2IntradayApi. 
  * @alias module:api/SpO2IntradayApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SpO2IntradayApi(apiClient) {
    _classCallCheck(this, SpO2IntradayApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getSpO2IntradayByDate operation.
   * @callback module:api/SpO2IntradayApi~getSpO2IntradayByDateCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get SpO2 Intraday by Date
   * This endpoint returns the SpO2 intraday data for a single date. SpO2 applies specifically to a user’s “main sleep”, which is the longest single period of time asleep on a given date.
   * @param {Date} date The date in the format of yyyy-MM-dd or today.
   * @param {module:api/SpO2IntradayApi~getSpO2IntradayByDateCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(SpO2IntradayApi, [{
    key: "getSpO2IntradayByDate",
    value: function getSpO2IntradayByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getSpO2IntradayByDate");
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
      return this.apiClient.callApi('/1/user/-/spo2/date/{date}/all.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSpO2IntradayByInterval operation.
     * @callback module:api/SpO2IntradayApi~getSpO2IntradayByIntervalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get SpO2 Intraday by Interval
     * This endpoint returns the SpO2 intraday data for a specified date range. SpO2 applies specifically to a user’s “main sleep”, which is the longest single period of time asleep on a given date.
     * @param {Date} startDate The date in the format of yyyy-MM-dd or today.
     * @param {Date} endDate The date in the format of yyyy-MM-dd or today.
     * @param {module:api/SpO2IntradayApi~getSpO2IntradayByIntervalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getSpO2IntradayByInterval",
    value: function getSpO2IntradayByInterval(startDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getSpO2IntradayByInterval");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getSpO2IntradayByInterval");
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
      return this.apiClient.callApi('/1/user/-/spo2/date/{startDate}/{endDate}/all.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return SpO2IntradayApi;
}();
exports["default"] = SpO2IntradayApi;