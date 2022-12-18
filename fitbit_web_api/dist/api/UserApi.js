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
* User service.
* @module api/UserApi
* @version 1
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the getBadges operation.
   * @callback module:api/UserApi~getBadgesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Badges
   * Retrieves the user's badges in the format requested. Response includes all badges for the user as seen on the Fitbit website badge locker (both activity and weight related.) The endpoint returns weight and distance badges based on the user's unit profile preference as on the website.
   * @param {module:api/UserApi~getBadgesCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(UserApi, [{
    key: "getBadges",
    value: function getBadges(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/badges.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getProfile operation.
     * @callback module:api/UserApi~getProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Profile
     * Returns a user's profile. The authenticated owner receives all values. However, the authenticated user's access to other users' data is subject to those users' privacy settings. Numerical values are returned in the unit system specified in the Accept-Language header.
     * @param {module:api/UserApi~getProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getProfile",
    value: function getProfile(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/profile.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateProfile operation.
     * @callback module:api/UserApi~updateProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Profile
     * Updates a user's profile using a form.
     * @param {Object} opts Optional parameters
     * @param {String} opts.gender The sex of the user; (MALE/FEMALE/NA).
     * @param {Date} opts.birthday The date of birth in the format of yyyy-MM-dd.
     * @param {String} opts.height The height in the format X.XX in the unit system that corresponds to the Accept-Language header provided.
     * @param {String} opts.aboutMe This is a short description of user.
     * @param {String} opts.fullname The fullname of the user.
     * @param {String} opts.country The country of the user's residence. This is a two-character code.
     * @param {String} opts.state The US state of the user's residence. This is a two-character code if the country was or is set to US.
     * @param {String} opts.city The US city of the user's residence.
     * @param {String} opts.strideLengthWalking Walking stride length in the format X.XX, where it is in the unit system that corresponds to the Accept-Language header provided.
     * @param {String} opts.strideLengthRunning Running stride length in the format X.XX, where it is in the unit system that corresponds to the Accept-Language header provided.
     * @param {String} opts.weightUnit Default weight unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
     * @param {String} opts.heightUnit Default height/distance unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
     * @param {String} opts.waterUnit Default water unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
     * @param {String} opts.glucoseUnit Default glucose unit on website (which doesn't affect API); one of (en_US, en_GB, 'any' for METRIC).
     * @param {String} opts.timezone The timezone in the format 'America/Los_Angeles'.
     * @param {String} opts.foodsLocale The food database locale in the format of xx.XX.
     * @param {String} opts.locale The locale of the website (country/language); one of the locales, currently – (en_US, fr_FR, de_DE, es_ES, en_GB, en_AU, en_NZ, ja_JP).
     * @param {String} opts.localeLang The Language in the format 'xx'. You should specify either locale or both - localeLang and localeCountry (locale is higher priority).
     * @param {String} opts.localeCountry The Country in the format 'xx'. You should specify either locale or both - localeLang and localeCountry (locale is higher priority).
     * @param {String} opts.startDayOfWeek The Start day of the week, meaning what day the week should start on. Either Sunday or Monday.
     * @param {module:api/UserApi~updateProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateProfile",
    value: function updateProfile(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'gender': opts['gender'],
        'birthday': opts['birthday'],
        'height': opts['height'],
        'aboutMe': opts['aboutMe'],
        'fullname': opts['fullname'],
        'country': opts['country'],
        'state': opts['state'],
        'city': opts['city'],
        'strideLengthWalking': opts['strideLengthWalking'],
        'strideLengthRunning': opts['strideLengthRunning'],
        'weightUnit': opts['weightUnit'],
        'heightUnit': opts['heightUnit'],
        'waterUnit': opts['waterUnit'],
        'glucoseUnit': opts['glucoseUnit'],
        'timezone': opts['timezone'],
        'foodsLocale': opts['foodsLocale'],
        'locale': opts['locale'],
        'localeLang': opts['localeLang'],
        'localeCountry': opts['localeCountry'],
        'startDayOfWeek': opts['startDayOfWeek']
      };
      var authNames = ['oauth2'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/profile.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return UserApi;
}();
exports["default"] = UserApi;