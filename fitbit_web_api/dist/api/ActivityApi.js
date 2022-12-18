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
* Activity service.
* @module api/ActivityApi
* @version 1
*/
var ActivityApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActivityApi. 
  * @alias module:api/ActivityApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActivityApi(apiClient) {
    _classCallCheck(this, ActivityApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addActivitiesLog operation.
   * @callback module:api/ActivityApi~addActivitiesLogCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Log Activity
   * The Log Activity endpoint creates log entry for an activity or user's private custom activity using units in the unit system which corresponds to the Accept-Language header provided (or using optional custom distanceUnit) and get a response in the format requested.
   * @param {Number} activityId The ID of the activity, directory activity or intensity level activity.
   * @param {Number} manualCalories Calories burned that are manaully specified. Required with activityName must be provided.
   * @param {String} startTime Activity start time. Hours and minutes in the format HH:mm:ss.
   * @param {Number} durationMillis Duration in milliseconds.
   * @param {Date} date Log entry date in the format yyyy-MM-dd.
   * @param {Number} distance Distance is required for logging directory activity in the format X.XX and in the selected distanceUnit.
   * @param {Object} opts Optional parameters
   * @param {String} opts.activityName Custom activity name. Either activityId or activityName must be provided.
   * @param {Number} opts.distanceUnit Distance measurement unit. Steps units are available only for Walking (activityId=90013) and Running (activityId=90009) directory activities and their intensity levels.
   * @param {module:api/ActivityApi~addActivitiesLogCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(ActivityApi, [{
    key: "addActivitiesLog",
    value: function addActivitiesLog(activityId, manualCalories, startTime, durationMillis, date, distance, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling addActivitiesLog");
      }
      // verify the required parameter 'manualCalories' is set
      if (manualCalories === undefined || manualCalories === null) {
        throw new Error("Missing the required parameter 'manualCalories' when calling addActivitiesLog");
      }
      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling addActivitiesLog");
      }
      // verify the required parameter 'durationMillis' is set
      if (durationMillis === undefined || durationMillis === null) {
        throw new Error("Missing the required parameter 'durationMillis' when calling addActivitiesLog");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling addActivitiesLog");
      }
      // verify the required parameter 'distance' is set
      if (distance === undefined || distance === null) {
        throw new Error("Missing the required parameter 'distance' when calling addActivitiesLog");
      }
      var pathParams = {};
      var queryParams = {
        'activityId': activityId,
        'activityName': opts['activityName'],
        'manualCalories': manualCalories,
        'startTime': startTime,
        'durationMillis': durationMillis,
        'date': date,
        'distance': distance,
        'distanceUnit': opts['distanceUnit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addFavoriteActivities operation.
     * @callback module:api/ActivityApi~addFavoriteActivitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Favorite Activity
     * Adds the activity with the given ID to user's list of favorite activities.
     * @param {String} activityId The encoded ID of the activity.
     * @param {module:api/ActivityApi~addFavoriteActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addFavoriteActivities",
    value: function addFavoriteActivities(activityId, callback) {
      var postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling addFavoriteActivities");
      }
      var pathParams = {
        'activity-id': activityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/favorite/{activity-id}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addUpdateActivitiesGoals operation.
     * @callback module:api/ActivityApi~addUpdateActivitiesGoalsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Activity Goals
     * Updates a user's daily or weekly activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.
     * @param {String} period daily or weekly.
     * @param {String} type goal type
     * @param {String} value goal value
     * @param {module:api/ActivityApi~addUpdateActivitiesGoalsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addUpdateActivitiesGoals",
    value: function addUpdateActivitiesGoals(period, type, value, callback) {
      var postBody = null;
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling addUpdateActivitiesGoals");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling addUpdateActivitiesGoals");
      }
      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling addUpdateActivitiesGoals");
      }
      var pathParams = {
        'period': period
      };
      var queryParams = {
        'type': type,
        'value': value
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/goals/{period}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteActivitiesLog operation.
     * @callback module:api/ActivityApi~deleteActivitiesLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Activity Log
     * Deletes a user's activity log entry with the given ID.
     * @param {Number} activityLogId The id of the activity log entry.
     * @param {module:api/ActivityApi~deleteActivitiesLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteActivitiesLog",
    value: function deleteActivitiesLog(activityLogId, callback) {
      var postBody = null;
      // verify the required parameter 'activityLogId' is set
      if (activityLogId === undefined || activityLogId === null) {
        throw new Error("Missing the required parameter 'activityLogId' when calling deleteActivitiesLog");
      }
      var pathParams = {
        'activity-log-id': activityLogId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/{activity-log-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFavoriteActivities operation.
     * @callback module:api/ActivityApi~deleteFavoriteActivitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Favorite Activity
     * Removes the activity with the given ID from a user's list of favorite activities.
     * @param {String} activityId The ID of the activity to be removed.
     * @param {module:api/ActivityApi~deleteFavoriteActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteFavoriteActivities",
    value: function deleteFavoriteActivities(activityId, callback) {
      var postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling deleteFavoriteActivities");
      }
      var pathParams = {
        'activity-id': activityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/favorite/{activity-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesByDate operation.
     * @callback module:api/ActivityApi~getActivitiesByDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Summary by Date 
     * Retrieves a summary and list of a user's activities and activity log entries for a given day.
     * @param {Date} date The date in the format yyyy-MM-dd
     * @param {module:api/ActivityApi~getActivitiesByDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesByDate",
    value: function getActivitiesByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getActivitiesByDate");
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
      return this.apiClient.callApi('/1/user/-/activities/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesGoals operation.
     * @callback module:api/ActivityApi~getActivitiesGoalsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Goals
     * Retreives a user's current daily or weekly activity goals using measurement units as defined in the unit system, which corresponds to the Accept-Language header provided.
     * @param {String} period daily or weekly.
     * @param {module:api/ActivityApi~getActivitiesGoalsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesGoals",
    value: function getActivitiesGoals(period, callback) {
      var postBody = null;
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getActivitiesGoals");
      }
      var pathParams = {
        'period': period
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/goals/{period}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesLog operation.
     * @callback module:api/ActivityApi~getActivitiesLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Lifetime Stats
     * Updates a user's daily activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.
     * @param {module:api/ActivityApi~getActivitiesLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesLog",
    value: function getActivitiesLog(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesLogList operation.
     * @callback module:api/ActivityApi~getActivitiesLogListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Log List
     * Retreives a list of user's activity log entries before or after a given day with offset and limit using units in the unit system which corresponds to the Accept-Language header provided.
     * @param {String} sort The sort order of entries by date asc (ascending) or desc (descending).
     * @param {Number} offset The offset number of entries.
     * @param {Number} limit The maximum number of entries returned (maximum;100).
     * @param {Object} opts Optional parameters
     * @param {Date} opts.beforeDate The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified.
     * @param {Date} opts.afterDate The date in the format yyyy-MM-ddTHH:mm:ss.
     * @param {module:api/ActivityApi~getActivitiesLogListCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesLogList",
    value: function getActivitiesLogList(sort, offset, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'sort' is set
      if (sort === undefined || sort === null) {
        throw new Error("Missing the required parameter 'sort' when calling getActivitiesLogList");
      }
      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getActivitiesLogList");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getActivitiesLogList");
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
      return this.apiClient.callApi('/1/user/-/activities/list.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesTCX operation.
     * @callback module:api/ActivityApi~getActivitiesTCXCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity TCX
     * Retreives the details of a user's location and heart rate data during a logged exercise activity.
     * @param {String} logId The activity's log ID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePartialTCX Include TCX points regardless of GPS data being present
     * @param {module:api/ActivityApi~getActivitiesTCXCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesTCX",
    value: function getActivitiesTCX(logId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'logId' is set
      if (logId === undefined || logId === null) {
        throw new Error("Missing the required parameter 'logId' when calling getActivitiesTCX");
      }
      var pathParams = {
        'log-id': logId
      };
      var queryParams = {
        'includePartialTCX': opts['includePartialTCX']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/{log-id}.tcx', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesTypeDetail operation.
     * @callback module:api/ActivityApi~getActivitiesTypeDetailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Type
     * Returns the detail of a specific activity in the Fitbit activities database in the format requested. If activity has levels, it also returns a list of activity level details.
     * @param {String} activityId The activity ID.
     * @param {module:api/ActivityApi~getActivitiesTypeDetailCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesTypeDetail",
    value: function getActivitiesTypeDetail(activityId, callback) {
      var postBody = null;
      // verify the required parameter 'activityId' is set
      if (activityId === undefined || activityId === null) {
        throw new Error("Missing the required parameter 'activityId' when calling getActivitiesTypeDetail");
      }
      var pathParams = {
        'activity-id': activityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/activities/{activity-id}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getActivitiesTypes operation.
     * @callback module:api/ActivityApi~getActivitiesTypesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Browse Activity Types
     * Retreives a tree of all valid Fitbit public activities from the activities catelog as well as private custom activities the user created in the format requested.
     * @param {module:api/ActivityApi~getActivitiesTypesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getActivitiesTypes",
    value: function getActivitiesTypes(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/activities.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFavoriteActivities operation.
     * @callback module:api/ActivityApi~getFavoriteActivitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Favorite Activities
     * Returns a list of a user's favorite activities.
     * @param {module:api/ActivityApi~getFavoriteActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFavoriteActivities",
    value: function getFavoriteActivities(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/favorite.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFrequentActivities operation.
     * @callback module:api/ActivityApi~getFrequentActivitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Frequent Activities
     * Retreives a list of a user's frequent activities in the format requested using units in the unit system which corresponds to the Accept-Language header provided.
     * @param {module:api/ActivityApi~getFrequentActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFrequentActivities",
    value: function getFrequentActivities(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/frequent.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecentActivities operation.
     * @callback module:api/ActivityApi~getRecentActivitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recent Activity Types
     * Retreives a list of a user's recent activities types logged with some details of the last activity log of that type using units in the unit system which corresponds to the Accept-Language header provided.
     * @param {module:api/ActivityApi~getRecentActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getRecentActivities",
    value: function getRecentActivities(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/activities/recent.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return ActivityApi;
}();
exports["default"] = ActivityApi;