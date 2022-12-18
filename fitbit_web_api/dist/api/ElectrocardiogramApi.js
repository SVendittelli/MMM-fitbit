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
* Electrocardiogram service.
* @module api/ElectrocardiogramApi
* @version 1
*/
var ElectrocardiogramApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ElectrocardiogramApi. 
  * @alias module:api/ElectrocardiogramApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ElectrocardiogramApi(apiClient) {
    _classCallCheck(this, ElectrocardiogramApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getEcgLogList operation.
   * @callback module:api/ElectrocardiogramApi~getEcgLogListCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get ECG Log List
   * This endpoint is used for querying the user's on-device ECG readings.
   * @param {String} sort The sort order of entries by date asc (ascending) or desc (descending).
   * @param {Number} offset The offset number of entries.
   * @param {Number} limit The maximum number of entries returned (maximum;10).
   * @param {Object} opts Optional parameters
   * @param {Date} opts.beforeDate The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified.
   * @param {Date} opts.afterDate The date in the format yyyy-MM-ddTHH:mm:ss.
   * @param {module:api/ElectrocardiogramApi~getEcgLogListCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(ElectrocardiogramApi, [{
    key: "getEcgLogList",
    value: function getEcgLogList(sort, offset, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling getEcgLogList");
      }
      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getEcgLogList");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getEcgLogList");
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
      return this.apiClient.callApi('/1/user/-/ecg/list.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ElectrocardiogramApi;
}();
exports["default"] = ElectrocardiogramApi;