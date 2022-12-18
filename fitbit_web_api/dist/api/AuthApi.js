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
* Auth service.
* @module api/AuthApi
* @version 1
*/
var AuthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthApi. 
  * @alias module:api/AuthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthApi(apiClient) {
    _classCallCheck(this, AuthApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the introspect operation.
   * @callback module:api/AuthApi~introspectCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve the active state of an OAuth 2.0 token
   * Retrieves the active state of an OAuth 2.0 token. It follows https://tools.ietf.org/html/rfc7662.
   * @param {String} token OAuth 2.0 token to retrieve the state of
   * @param {module:api/AuthApi~introspectCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(AuthApi, [{
    key: "introspect",
    value: function introspect(token, callback) {
      var postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling introspect");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'token': token
      };
      var authNames = ['oauth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1.1/oauth2/introspect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the oauthToken operation.
     * @callback module:api/AuthApi~oauthTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OAuth 2 access token
     * Retrieves an OAuth 2 access token.
     * @param {String} clientId This is your Fitbit API application id from your settings on dev.fitbit.com.
     * @param {String} grantType Authorization grant type. Valid values are 'authorization_code' and 'refresh_token'.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization The Authorization header must be set to 'Basic' followed by a space, then the Base64 encoded string of your application's client id and secret concatenated with a colon. For example, 'Basic Y2xpZW50X2lkOmNsaWVudCBzZWNyZXQ='. The Base64 encoded string, 'Y2xpZW50X2lkOmNsaWVudCBzZWNyZXQ=', is decoded as 'client_id:client secret'.
     * @param {String} opts.code Authorization code received in the redirect as URI parameter. Required if using the Authorization Code flow.
     * @param {String} opts.expiresIn Specify the desired access token lifetime. Defaults to 28800 for 8 hours. The other valid value is 3600 for 1 hour.
     * @param {String} opts.redirectUri Uri to which the access token will be sent if the request is successful. Required if specified in the redirect to the authorization page. Must be exact match.
     * @param {String} opts.refreshToken Refresh token issued by Fitbit. Required if 'grant_type' is 'refresh_token'.
     * @param {String} opts.state Required if specified in the redirect uri of the authorization page. Must be an exact match.
     * @param {module:api/AuthApi~oauthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "oauthToken",
    value: function oauthToken(clientId, grantType, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling oauthToken");
      }
      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling oauthToken");
      }
      var pathParams = {};
      var queryParams = {
        'code': opts['code'],
        'client_id': clientId,
        'expires_in': opts['expiresIn'],
        'grant_type': grantType,
        'redirect_uri': opts['redirectUri'],
        'refresh_token': opts['refreshToken'],
        'state': opts['state']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/oauth2/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return AuthApi;
}();
exports["default"] = AuthApi;