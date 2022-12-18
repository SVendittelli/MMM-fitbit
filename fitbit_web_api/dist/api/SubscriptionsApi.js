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
* Subscriptions service.
* @module api/SubscriptionsApi
* @version 1
*/
var SubscriptionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SubscriptionsApi. 
  * @alias module:api/SubscriptionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SubscriptionsApi(apiClient) {
    _classCallCheck(this, SubscriptionsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addSubscriptions operation.
   * @callback module:api/SubscriptionsApi~addSubscriptionsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a Subscription
   * Adds a subscription in your application so that users can get notifications and return a response in the format requested. The subscription-id value provides a way to associate an update with a particular user stream in your application.
   * @param {String} collectionPath This is the resource of the collection to receive notifications from (foods, activities, sleep, or body). If not present, subscription will be created for all collections. If you have both all and specific collection subscriptions, you will get duplicate notifications on that collections' updates. Each subscriber can have only one subscription for a specific user's collection.
   * @param {String} subscriptionId This is the unique ID of the subscription created by the API client application. Each ID must be unique across the entire set of subscribers and collections. The Fitbit servers will pass this ID back along with any notifications about the user indicated by the user parameter in the URL path.
   * @param {module:api/SubscriptionsApi~addSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(SubscriptionsApi, [{
    key: "addSubscriptions",
    value: function addSubscriptions(collectionPath, subscriptionId, callback) {
      var postBody = null;
      // verify the required parameter 'collectionPath' is set
      if (collectionPath === undefined || collectionPath === null) {
        throw new Error("Missing the required parameter 'collectionPath' when calling addSubscriptions");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling addSubscriptions");
      }
      var pathParams = {
        'collection-path': collectionPath,
        'subscription-id': subscriptionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/{collection-path}/apiSubscriptions/{subscription-id}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteSubscriptions operation.
     * @callback module:api/SubscriptionsApi~deleteSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Subscription
     * Deletes a subscription for a user..
     * @param {String} collectionPath This is the resource of the collection to receive notifications from (foods, activities, sleep, or body). If not present, subscription will be created for all collections. If you have both all and specific collection subscriptions, you will get duplicate notifications on that collections' updates. Each subscriber can have only one subscription for a specific user's collection.
     * @param {String} subscriptionId This is the resource of the collection to receive notifications from (foods, activities, sleep, or body). If not present, subscription will be created for all collections. If you have both all and specific collection subscriptions, you will get duplicate notifications on that collections' updates. Each subscriber can have only one subscription for a specific user's collection.
     * @param {module:api/SubscriptionsApi~deleteSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteSubscriptions",
    value: function deleteSubscriptions(collectionPath, subscriptionId, callback) {
      var postBody = null;
      // verify the required parameter 'collectionPath' is set
      if (collectionPath === undefined || collectionPath === null) {
        throw new Error("Missing the required parameter 'collectionPath' when calling deleteSubscriptions");
      }
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling deleteSubscriptions");
      }
      var pathParams = {
        'collection-path': collectionPath,
        'subscription-id': subscriptionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/{collection-path}/apiSubscriptions/{subscription-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getSubscriptionsList operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Subscriptions
     * Retreives a list of a user's subscriptions for your application in the format requested. You can either fetch subscriptions for a specific collection or the entire list of subscriptions for the user. For best practice, make sure that your application maintains this list on your side and use this endpoint only to periodically ensure data consistency.
     * @param {String} collectionPath This is the resource of the collection to receive notifications from (foods, activities, sleep, or body). If not present, subscription will be created for all collections. If you have both all and specific collection subscriptions, you will get duplicate notifications on that collections' updates. Each subscriber can have only one subscription for a specific user's collection.
     * @param {module:api/SubscriptionsApi~getSubscriptionsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getSubscriptionsList",
    value: function getSubscriptionsList(collectionPath, callback) {
      var postBody = null;
      // verify the required parameter 'collectionPath' is set
      if (collectionPath === undefined || collectionPath === null) {
        throw new Error("Missing the required parameter 'collectionPath' when calling getSubscriptionsList");
      }
      var pathParams = {
        'collection-path': collectionPath
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/{collection-path}/apiSubscriptions.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return SubscriptionsApi;
}();
exports["default"] = SubscriptionsApi;