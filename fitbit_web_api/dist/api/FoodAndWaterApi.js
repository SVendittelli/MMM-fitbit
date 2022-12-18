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
* FoodAndWater service.
* @module api/FoodAndWaterApi
* @version 1
*/
var FoodAndWaterApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FoodAndWaterApi. 
  * @alias module:api/FoodAndWaterApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FoodAndWaterApi(apiClient) {
    _classCallCheck(this, FoodAndWaterApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the addFavoriteFood operation.
   * @callback module:api/FoodAndWaterApi~addFavoriteFoodCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add Favorite Food
   * Updates a user's daily activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.
   * @param {String} foodId The ID of the food to be added to user's favorites.
   * @param {module:api/FoodAndWaterApi~addFavoriteFoodCallback} callback The callback function, accepting three arguments: error, data, response
   */
  _createClass(FoodAndWaterApi, [{
    key: "addFavoriteFood",
    value: function addFavoriteFood(foodId, callback) {
      var postBody = null;
      // verify the required parameter 'foodId' is set
      if (foodId === undefined || foodId === null) {
        throw new Error("Missing the required parameter 'foodId' when calling addFavoriteFood");
      }
      var pathParams = {
        'food-id': foodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/favorite/{food-id}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addFoods operation.
     * @callback module:api/FoodAndWaterApi~addFoodsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Food
     * Creates a new private food for a user and returns a response in the format requested. The created food is found via the Search Foods call.
     * @param {String} name The food name.
     * @param {String} defaultFoodMeasurementUnitId The ID of the default measurement unit. Full list of units can be retrieved via the Get Food Units endpoint.
     * @param {String} defaultServingSize The size of the default serving. Nutrition values should be provided for this serving size.
     * @param {String} calories The calories in the default serving size.
     * @param {Object} opts Optional parameters
     * @param {String} opts.formType Form type; LIQUID or DRY.
     * @param {String} opts.description The description of the food.
     * @param {module:api/FoodAndWaterApi~addFoodsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addFoods",
    value: function addFoods(name, defaultFoodMeasurementUnitId, defaultServingSize, calories, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addFoods");
      }
      // verify the required parameter 'defaultFoodMeasurementUnitId' is set
      if (defaultFoodMeasurementUnitId === undefined || defaultFoodMeasurementUnitId === null) {
        throw new Error("Missing the required parameter 'defaultFoodMeasurementUnitId' when calling addFoods");
      }
      // verify the required parameter 'defaultServingSize' is set
      if (defaultServingSize === undefined || defaultServingSize === null) {
        throw new Error("Missing the required parameter 'defaultServingSize' when calling addFoods");
      }
      // verify the required parameter 'calories' is set
      if (calories === undefined || calories === null) {
        throw new Error("Missing the required parameter 'calories' when calling addFoods");
      }
      var pathParams = {};
      var queryParams = {
        'name': name,
        'defaultFoodMeasurementUnitId': defaultFoodMeasurementUnitId,
        'defaultServingSize': defaultServingSize,
        'calories': calories,
        'formType': opts['formType'],
        'description': opts['description']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addFoodsLog operation.
     * @callback module:api/FoodAndWaterApi~addFoodsLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log Food
     * Creates food log entries for users with or without foodId value.
     * @param {String} foodId The ID of the food to be logged. Either foodId or foodName must be provided.
     * @param {String} mealTypeId Meal types. 1=Breakfast; 2=Morning Snack; 3=Lunch; 4=Afternoon Snack; 5=Dinner; 7=Anytime.
     * @param {String} unitId The ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
     * @param {String} amount The amount consumed in the format X.XX in the specified unitId.
     * @param {Date} date Log entry date in the format yyyy-MM-dd.
     * @param {Object} opts Optional parameters
     * @param {String} opts.foodName Food entry name. Either foodId or foodName must be provided.
     * @param {Boolean} opts.favorite The `true` value will add the food to the user's favorites after creating the log entry; while the `false` value will not. Valid only with foodId value.
     * @param {String} opts.brandName Brand name of food. Valid only with foodName parameters.
     * @param {Number} opts.calories Calories for this serving size. This is allowed with foodName parameter (default to zero); otherwise it is ignored.
     * @param {module:api/FoodAndWaterApi~addFoodsLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addFoodsLog",
    value: function addFoodsLog(foodId, mealTypeId, unitId, amount, date, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'foodId' is set
      if (foodId === undefined || foodId === null) {
        throw new Error("Missing the required parameter 'foodId' when calling addFoodsLog");
      }
      // verify the required parameter 'mealTypeId' is set
      if (mealTypeId === undefined || mealTypeId === null) {
        throw new Error("Missing the required parameter 'mealTypeId' when calling addFoodsLog");
      }
      // verify the required parameter 'unitId' is set
      if (unitId === undefined || unitId === null) {
        throw new Error("Missing the required parameter 'unitId' when calling addFoodsLog");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling addFoodsLog");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling addFoodsLog");
      }
      var pathParams = {};
      var queryParams = {
        'foodId': foodId,
        'foodName': opts['foodName'],
        'mealTypeId': mealTypeId,
        'unitId': unitId,
        'amount': amount,
        'date': date,
        'favorite': opts['favorite'],
        'brandName': opts['brandName'],
        'calories': opts['calories']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addMeal operation.
     * @callback module:api/FoodAndWaterApi~addMealCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Meal
     * Creates a meal with the given food contained in the post body.
     * @param {String} name Name of the meal.
     * @param {String} description Short description of the meal.
     * @param {String} foodId ID of the food to be included in the meal.
     * @param {String} unitId ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
     * @param {String} amount Amount consumed; in the format X.XX, in the specified unitId.
     * @param {module:api/FoodAndWaterApi~addMealCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addMeal",
    value: function addMeal(name, description, foodId, unitId, amount, callback) {
      var postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addMeal");
      }
      // verify the required parameter 'description' is set
      if (description === undefined || description === null) {
        throw new Error("Missing the required parameter 'description' when calling addMeal");
      }
      // verify the required parameter 'foodId' is set
      if (foodId === undefined || foodId === null) {
        throw new Error("Missing the required parameter 'foodId' when calling addMeal");
      }
      // verify the required parameter 'unitId' is set
      if (unitId === undefined || unitId === null) {
        throw new Error("Missing the required parameter 'unitId' when calling addMeal");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling addMeal");
      }
      var pathParams = {};
      var queryParams = {
        'name': name,
        'Description': description,
        'foodId': foodId,
        'unitId': unitId,
        'amount': amount
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/meals.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addUpdateFoodsGoal operation.
     * @callback module:api/FoodAndWaterApi~addUpdateFoodsGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Food Goal
     * Updates a user's daily calories consumption goal or food plan and returns a response in the format requested.
     * @param {Number} calories Manual calorie consumption goal in either calories or intensity must be provided.
     * @param {Object} opts Optional parameters
     * @param {String} opts.intensity Food plan intensity (MAINTENANCE, EASIER, MEDIUM, KINDAHARD, or HARDER). Either calories or intensity must be provided.
     * @param {String} opts.personalized Food plan type; true or false.
     * @param {module:api/FoodAndWaterApi~addUpdateFoodsGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addUpdateFoodsGoal",
    value: function addUpdateFoodsGoal(calories, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'calories' is set
      if (calories === undefined || calories === null) {
        throw new Error("Missing the required parameter 'calories' when calling addUpdateFoodsGoal");
      }
      var pathParams = {};
      var queryParams = {
        'calories': calories,
        'intensity': opts['intensity'],
        'personalized': opts['personalized']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/goal.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addUpdateWaterGoal operation.
     * @callback module:api/FoodAndWaterApi~addUpdateWaterGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Water Goal
     * Updates a user's daily calories consumption goal or food plan and returns a response in the format requested.
     * @param {Number} target The target water goal in the format X.X is set in unit based on locale.
     * @param {module:api/FoodAndWaterApi~addUpdateWaterGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addUpdateWaterGoal",
    value: function addUpdateWaterGoal(target, callback) {
      var postBody = null;
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling addUpdateWaterGoal");
      }
      var pathParams = {};
      var queryParams = {
        'target': target
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/water/goal.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the addWaterLog operation.
     * @callback module:api/FoodAndWaterApi~addWaterLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log Water
     * Creates a log entry for water using units in the unit systems that corresponds to the Accept-Language header provided.
     * @param {Date} date The date of records to be returned in the format yyyy-MM-dd.
     * @param {Number} amount The amount consumption in the format X.XX and in the specified waterUnit or in the unit system that corresponds to the Accept-Language header provided.
     * @param {Object} opts Optional parameters
     * @param {String} opts.unit Water measurement unit; `ml`, `fl oz`, or `cup`.
     * @param {module:api/FoodAndWaterApi~addWaterLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "addWaterLog",
    value: function addWaterLog(date, amount, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling addWaterLog");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling addWaterLog");
      }
      var pathParams = {};
      var queryParams = {
        'date': date,
        'amount': amount,
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/water.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFavoriteFood operation.
     * @callback module:api/FoodAndWaterApi~deleteFavoriteFoodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Favorite Food
     * Deletes a food with the given ID to the user's list of favorite foods.
     * @param {String} foodId The ID of the food to be deleted from user's favorites.
     * @param {module:api/FoodAndWaterApi~deleteFavoriteFoodCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteFavoriteFood",
    value: function deleteFavoriteFood(foodId, callback) {
      var postBody = null;
      // verify the required parameter 'foodId' is set
      if (foodId === undefined || foodId === null) {
        throw new Error("Missing the required parameter 'foodId' when calling deleteFavoriteFood");
      }
      var pathParams = {
        'food-id': foodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/favorite/{food-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFoods operation.
     * @callback module:api/FoodAndWaterApi~deleteFoodsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Custom Food
     * Deletes custom food for a user and returns a response in the format requested.
     * @param {String} foodId The ID of the food to be deleted.
     * @param {module:api/FoodAndWaterApi~deleteFoodsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteFoods",
    value: function deleteFoods(foodId, callback) {
      var postBody = null;
      // verify the required parameter 'foodId' is set
      if (foodId === undefined || foodId === null) {
        throw new Error("Missing the required parameter 'foodId' when calling deleteFoods");
      }
      var pathParams = {
        'food-id': foodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/{food-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteFoodsLog operation.
     * @callback module:api/FoodAndWaterApi~deleteFoodsLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Food Log
     * Deletes a user's food log entry with the given ID.
     * @param {String} foodLogId The ID of the food log entry to be deleted.
     * @param {module:api/FoodAndWaterApi~deleteFoodsLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteFoodsLog",
    value: function deleteFoodsLog(foodLogId, callback) {
      var postBody = null;
      // verify the required parameter 'foodLogId' is set
      if (foodLogId === undefined || foodLogId === null) {
        throw new Error("Missing the required parameter 'foodLogId' when calling deleteFoodsLog");
      }
      var pathParams = {
        'food-log-id': foodLogId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/{food-log-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteMeal operation.
     * @callback module:api/FoodAndWaterApi~deleteMealCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Meal
     * Deletes a user's meal with the given meal id.
     * @param {String} mealId Id of the meal to delete.
     * @param {module:api/FoodAndWaterApi~deleteMealCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteMeal",
    value: function deleteMeal(mealId, callback) {
      var postBody = null;
      // verify the required parameter 'mealId' is set
      if (mealId === undefined || mealId === null) {
        throw new Error("Missing the required parameter 'mealId' when calling deleteMeal");
      }
      var pathParams = {
        'meal-id': mealId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/meals/{meal-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteWaterLog operation.
     * @callback module:api/FoodAndWaterApi~deleteWaterLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Water Log
     * Deletes a user's water log entry with the given ID.
     * @param {String} waterLogId The ID of the waterUnit log entry to be deleted.
     * @param {module:api/FoodAndWaterApi~deleteWaterLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "deleteWaterLog",
    value: function deleteWaterLog(waterLogId, callback) {
      var postBody = null;
      // verify the required parameter 'waterLogId' is set
      if (waterLogId === undefined || waterLogId === null) {
        throw new Error("Missing the required parameter 'waterLogId' when calling deleteWaterLog");
      }
      var pathParams = {
        'water-log-id': waterLogId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/water/{water-log-id}.json', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the editFoodsLog operation.
     * @callback module:api/FoodAndWaterApi~editFoodsLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit Food Log
     * The Edit Food Log endpoint changes the quantity or calories consumed for a user's food log entry with the given Food Log ID.
     * @param {String} foodLogId The ID of the food log entry to be edited.
     * @param {String} mealTypeId Meal types. 1=Breakfast; 2=Morning Snack; 3=Lunch; 4=Afternoon Snack; 5=Dinner; 7=Anytime.
     * @param {String} unitId The ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
     * @param {String} amount The amount consumed in the format X.XX in the specified unitId.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.calories Calories for this serving size. This is allowed with foodName parameter (default to zero); otherwise it is ignored.
     * @param {module:api/FoodAndWaterApi~editFoodsLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "editFoodsLog",
    value: function editFoodsLog(foodLogId, mealTypeId, unitId, amount, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'foodLogId' is set
      if (foodLogId === undefined || foodLogId === null) {
        throw new Error("Missing the required parameter 'foodLogId' when calling editFoodsLog");
      }
      // verify the required parameter 'mealTypeId' is set
      if (mealTypeId === undefined || mealTypeId === null) {
        throw new Error("Missing the required parameter 'mealTypeId' when calling editFoodsLog");
      }
      // verify the required parameter 'unitId' is set
      if (unitId === undefined || unitId === null) {
        throw new Error("Missing the required parameter 'unitId' when calling editFoodsLog");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling editFoodsLog");
      }
      var pathParams = {
        'food-log-id': foodLogId
      };
      var queryParams = {
        'mealTypeId': mealTypeId,
        'unitId': unitId,
        'amount': amount,
        'calories': opts['calories']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/{food-log-id}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFavoriteFoods operation.
     * @callback module:api/FoodAndWaterApi~getFavoriteFoodsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Favorite Foods
     * Returns a list of a user's favorite foods in the format requested. A favorite food in the list provides a quick way to log the food via the Log Food endpoint.
     * @param {module:api/FoodAndWaterApi~getFavoriteFoodsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFavoriteFoods",
    value: function getFavoriteFoods(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/favorite.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFoodsByDate operation.
     * @callback module:api/FoodAndWaterApi~getFoodsByDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Food Logs
     * Retreives a summary and list of a user's food log entries for a given day in the format requested.
     * @param {Date} date The date of records to be returned. In the format yyyy-MM-dd.
     * @param {module:api/FoodAndWaterApi~getFoodsByDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFoodsByDate",
    value: function getFoodsByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getFoodsByDate");
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
      return this.apiClient.callApi('/1/user/-/foods/log/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFoodsGoal operation.
     * @callback module:api/FoodAndWaterApi~getFoodsGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Food Goals
     * Returns a user's current daily calorie consumption goal and/or foodPlan value in the format requested.
     * @param {module:api/FoodAndWaterApi~getFoodsGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFoodsGoal",
    value: function getFoodsGoal(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/goal.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFoodsInfo operation.
     * @callback module:api/FoodAndWaterApi~getFoodsInfoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Food
     * Returns the details of a specific food in the Fitbit food databases or a private food that an authorized user has entered in the format requested.
     * @param {String} foodId The ID of the food.
     * @param {module:api/FoodAndWaterApi~getFoodsInfoCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFoodsInfo",
    value: function getFoodsInfo(foodId, callback) {
      var postBody = null;
      // verify the required parameter 'foodId' is set
      if (foodId === undefined || foodId === null) {
        throw new Error("Missing the required parameter 'foodId' when calling getFoodsInfo");
      }
      var pathParams = {
        'food-id': foodId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/foods/{food-id}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFoodsList operation.
     * @callback module:api/FoodAndWaterApi~getFoodsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Foods
     * Returns a list of public foods from the Fitbit food database and private food the user created in the format requested.
     * @param {String} query The URL-encoded search query.
     * @param {module:api/FoodAndWaterApi~getFoodsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFoodsList",
    value: function getFoodsList(query, callback) {
      var postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling getFoodsList");
      }
      var pathParams = {};
      var queryParams = {
        'query': query
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/foods/search.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFoodsLocales operation.
     * @callback module:api/FoodAndWaterApi~getFoodsLocalesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Food Locales
     * Returns the food locales that the user may choose to search, log, and create food in.
     * @param {module:api/FoodAndWaterApi~getFoodsLocalesCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFoodsLocales",
    value: function getFoodsLocales(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/foods/locales.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFoodsUnits operation.
     * @callback module:api/FoodAndWaterApi~getFoodsUnitsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Food Units
     * Returns a list of all valid Fitbit food units in the format requested.
     * @param {module:api/FoodAndWaterApi~getFoodsUnitsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFoodsUnits",
    value: function getFoodsUnits(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/foods/units.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getFrequentFoods operation.
     * @callback module:api/FoodAndWaterApi~getFrequentFoodsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Frequent Foods
     * Returns a list of a user's frequent foods in the format requested. A frequent food in the list provides a quick way to log the food via the Log Food endpoint.
     * @param {module:api/FoodAndWaterApi~getFrequentFoodsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getFrequentFoods",
    value: function getFrequentFoods(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/frequent.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getMeals operation.
     * @callback module:api/FoodAndWaterApi~getMealsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meals
     * Returns a list of meals created by user in the user's food log in the format requested. User creates and manages meals on the Food Log tab on the website.
     * @param {module:api/FoodAndWaterApi~getMealsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getMeals",
    value: function getMeals(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/meals.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getRecentFoods operation.
     * @callback module:api/FoodAndWaterApi~getRecentFoodsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recent Foods
     * Returns a list of a user's frequent foods in the format requested. A frequent food in the list provides a quick way to log the food via the Log Food endpoint.
     * @param {module:api/FoodAndWaterApi~getRecentFoodsCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getRecentFoods",
    value: function getRecentFoods(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/recent.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWaterByDate operation.
     * @callback module:api/FoodAndWaterApi~getWaterByDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Water Logs
     * Retreives a summary and list of a user's water log entries for a given day in the requested using units in the unit system that corresponds to the Accept-Language header provided.
     * @param {Date} date The date of records to be returned. In the format yyyy-MM-dd.
     * @param {module:api/FoodAndWaterApi~getWaterByDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getWaterByDate",
    value: function getWaterByDate(date, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getWaterByDate");
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
      return this.apiClient.callApi('/1/user/-/foods/log/water/date/{date}.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getWaterGoal operation.
     * @callback module:api/FoodAndWaterApi~getWaterGoalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Water Goal
     * Retreives a summary and list of a user's water goal entries for a given day in the requested using units in the unit system that corresponds to the Accept-Language header provided.
     * @param {module:api/FoodAndWaterApi~getWaterGoalCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "getWaterGoal",
    value: function getWaterGoal(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/water/goal.json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateMeal operation.
     * @callback module:api/FoodAndWaterApi~updateMealCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit Meal
     * Replaces an existing meal with the contents of the request. The response contains the updated meal.
     * @param {String} mealId Id of the meal to edit.
     * @param {String} name Name of the meal.
     * @param {String} description Short description of the meal.
     * @param {String} foodId ID of the food to be included in the meal.
     * @param {String} unitId ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
     * @param {String} amount Amount consumed; in the format X.XX, in the specified unitId.
     * @param {module:api/FoodAndWaterApi~updateMealCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateMeal",
    value: function updateMeal(mealId, name, description, foodId, unitId, amount, callback) {
      var postBody = null;
      // verify the required parameter 'mealId' is set
      if (mealId === undefined || mealId === null) {
        throw new Error("Missing the required parameter 'mealId' when calling updateMeal");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateMeal");
      }
      // verify the required parameter 'description' is set
      if (description === undefined || description === null) {
        throw new Error("Missing the required parameter 'description' when calling updateMeal");
      }
      // verify the required parameter 'foodId' is set
      if (foodId === undefined || foodId === null) {
        throw new Error("Missing the required parameter 'foodId' when calling updateMeal");
      }
      // verify the required parameter 'unitId' is set
      if (unitId === undefined || unitId === null) {
        throw new Error("Missing the required parameter 'unitId' when calling updateMeal");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling updateMeal");
      }
      var pathParams = {
        'meal-id': mealId
      };
      var queryParams = {
        'name': name,
        'Description': description,
        'foodId': foodId,
        'unitId': unitId,
        'amount': amount
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/meals/{meal-id}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the updateWaterLog operation.
     * @callback module:api/FoodAndWaterApi~updateWaterLogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Water Log
     * Updates a user's water log entry with the given ID.
     * @param {String} waterLogId The ID of the waterUnit log entry to be deleted.
     * @param {String} amount Amount consumed; in the format X.X and in the specified waterUnit or in the unit system that corresponds to the Accept-Language header provided.
     * @param {Object} opts Optional parameters
     * @param {String} opts.unit Water measurement unit. 'ml', 'fl oz', or 'cup'.
     * @param {module:api/FoodAndWaterApi~updateWaterLogCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "updateWaterLog",
    value: function updateWaterLog(waterLogId, amount, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'waterLogId' is set
      if (waterLogId === undefined || waterLogId === null) {
        throw new Error("Missing the required parameter 'waterLogId' when calling updateWaterLog");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling updateWaterLog");
      }
      var pathParams = {
        'water-log-id': waterLogId
      };
      var queryParams = {
        'amount': amount,
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/1/user/-/foods/log/water/{water-log-id}.json', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return FoodAndWaterApi;
}();
exports["default"] = FoodAndWaterApi;