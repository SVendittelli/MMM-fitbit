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
* BodyAndWeightTimeSeries service.
* @module api/BodyAndWeightTimeSeriesApi
* @version 1
*/
var BodyAndWeightTimeSeriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BodyAndWeightTimeSeriesApi. 
  * @alias module:api/BodyAndWeightTimeSeriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BodyAndWeightTimeSeriesApi(apiClient) {
    _classCallCheck(this, BodyAndWeightTimeSeriesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getBodyResourceByDatePeriod operation.
   * @callback module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDatePeriodCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Body Time Series
   * Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.
   * @param {module:model/String} resourcePath The resource path, which incudes the bmi, fat, or weight options.
   * @param {Date} date The range start date in the format yyyy-MM-dd or today.
   * @param {String} period The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
   * @param {module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDatePeriodCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(BodyAndWeightTimeSeriesApi, [{
    key: "getBodyResourceByDatePeriod",
    value: function getBodyResourceByDatePeriod(resourcePath, date, period, callback) {
      var postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getBodyResourceByDatePeriod");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getBodyResourceByDatePeriod");
      }
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getBodyResourceByDatePeriod");
      }
      var pathParams = {
        'resource-path': resourcePath,
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
      return this.apiClient.callApi('/1/user/-/body/{resource-path}/date/{date}/{period}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getBodyResourceByDateRange operation.
     * @callback module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDateRangeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Body Time Series
     * Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.
     * @param {module:model/String} resourcePath The resource path, which incudes the bmi, fat, or weight options.
     * @param {Date} baseDate The range start date in the format yyyy-MM-dd or today.
     * @param {Date} endDate The end date of the range.
     * @param {module:api/BodyAndWeightTimeSeriesApi~getBodyResourceByDateRangeCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getBodyResourceByDateRange",
    value: function getBodyResourceByDateRange(resourcePath, baseDate, endDate, callback) {
      var postBody = null;
      // verify the required parameter 'resourcePath' is set
      if (resourcePath === undefined || resourcePath === null) {
        throw new Error("Missing the required parameter 'resourcePath' when calling getBodyResourceByDateRange");
      }
      // verify the required parameter 'baseDate' is set
      if (baseDate === undefined || baseDate === null) {
        throw new Error("Missing the required parameter 'baseDate' when calling getBodyResourceByDateRange");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getBodyResourceByDateRange");
      }
      var pathParams = {
        'resource-path': resourcePath,
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
      return this.apiClient.callApi('/1/user/-/body/{resource-path}/date/{base-date}/{end-date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return BodyAndWeightTimeSeriesApi;
}();
exports["default"] = BodyAndWeightTimeSeriesApi;