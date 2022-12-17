# FitbitWebApiExplorer.FoodAndWaterApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFavoriteFood**](FoodAndWaterApi.md#addFavoriteFood) | **POST** /1/user/-/foods/log/favorite/{food-id}.json | Add Favorite Food
[**addFoods**](FoodAndWaterApi.md#addFoods) | **POST** /1/user/-/foods.json | Create Food
[**addFoodsLog**](FoodAndWaterApi.md#addFoodsLog) | **POST** /1/user/-/foods/log.json | Log Food
[**addMeal**](FoodAndWaterApi.md#addMeal) | **POST** /1/user/-/meals.json | Create Meal
[**addUpdateFoodsGoal**](FoodAndWaterApi.md#addUpdateFoodsGoal) | **POST** /1/user/-/foods/log/goal.json | Update Food Goal
[**addUpdateWaterGoal**](FoodAndWaterApi.md#addUpdateWaterGoal) | **POST** /1/user/-/foods/log/water/goal.json | Update Water Goal
[**addWaterLog**](FoodAndWaterApi.md#addWaterLog) | **POST** /1/user/-/foods/log/water.json | Log Water
[**deleteFavoriteFood**](FoodAndWaterApi.md#deleteFavoriteFood) | **DELETE** /1/user/-/foods/log/favorite/{food-id}.json | Delete Favorite Food
[**deleteFoods**](FoodAndWaterApi.md#deleteFoods) | **DELETE** /1/user/-/foods/{food-id}.json | Delete Custom Food
[**deleteFoodsLog**](FoodAndWaterApi.md#deleteFoodsLog) | **DELETE** /1/user/-/foods/log/{food-log-id}.json | Delete Food Log
[**deleteMeal**](FoodAndWaterApi.md#deleteMeal) | **DELETE** /1/user/-/meals/{meal-id}.json | Delete Meal
[**deleteWaterLog**](FoodAndWaterApi.md#deleteWaterLog) | **DELETE** /1/user/-/foods/log/water/{water-log-id}.json | Delete Water Log
[**editFoodsLog**](FoodAndWaterApi.md#editFoodsLog) | **POST** /1/user/-/foods/log/{food-log-id}.json | Edit Food Log
[**getFavoriteFoods**](FoodAndWaterApi.md#getFavoriteFoods) | **GET** /1/user/-/foods/log/favorite.json | Get Favorite Foods
[**getFoodsByDate**](FoodAndWaterApi.md#getFoodsByDate) | **GET** /1/user/-/foods/log/date/{date}.json | Get Food Logs
[**getFoodsGoal**](FoodAndWaterApi.md#getFoodsGoal) | **GET** /1/user/-/foods/log/goal.json | Get Food Goals
[**getFoodsInfo**](FoodAndWaterApi.md#getFoodsInfo) | **GET** /1/foods/{food-id}.json | Get Food
[**getFoodsList**](FoodAndWaterApi.md#getFoodsList) | **GET** /1/foods/search.json | Search Foods
[**getFoodsLocales**](FoodAndWaterApi.md#getFoodsLocales) | **GET** /1/foods/locales.json | Get Food Locales
[**getFoodsUnits**](FoodAndWaterApi.md#getFoodsUnits) | **GET** /1/foods/units.json | Get Food Units
[**getFrequentFoods**](FoodAndWaterApi.md#getFrequentFoods) | **GET** /1/user/-/foods/log/frequent.json | Get Frequent Foods
[**getMeals**](FoodAndWaterApi.md#getMeals) | **GET** /1/user/-/meals.json | Get Meals
[**getRecentFoods**](FoodAndWaterApi.md#getRecentFoods) | **GET** /1/user/-/foods/log/recent.json | Get Recent Foods
[**getWaterByDate**](FoodAndWaterApi.md#getWaterByDate) | **GET** /1/user/-/foods/log/water/date/{date}.json | Get Water Logs
[**getWaterGoal**](FoodAndWaterApi.md#getWaterGoal) | **GET** /1/user/-/foods/log/water/goal.json | Get Water Goal
[**updateMeal**](FoodAndWaterApi.md#updateMeal) | **POST** /1/user/-/meals/{meal-id}.json | Edit Meal
[**updateWaterLog**](FoodAndWaterApi.md#updateWaterLog) | **POST** /1/user/-/foods/log/water/{water-log-id}.json | Update Water Log



## addFavoriteFood

> addFavoriteFood(foodId)

Add Favorite Food

Updates a user&#39;s daily activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let foodId = "foodId_example"; // String | The ID of the food to be added to user's favorites.
apiInstance.addFavoriteFood(foodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **String**| The ID of the food to be added to user&#39;s favorites. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addFoods

> addFoods(name, defaultFoodMeasurementUnitId, defaultServingSize, calories, opts)

Create Food

Creates a new private food for a user and returns a response in the format requested. The created food is found via the Search Foods call.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let name = "name_example"; // String | The food name.
let defaultFoodMeasurementUnitId = "defaultFoodMeasurementUnitId_example"; // String | The ID of the default measurement unit. Full list of units can be retrieved via the Get Food Units endpoint.
let defaultServingSize = "defaultServingSize_example"; // String | The size of the default serving. Nutrition values should be provided for this serving size.
let calories = "calories_example"; // String | The calories in the default serving size.
let opts = {
  'formType': "formType_example", // String | Form type; LIQUID or DRY.
  'description': "description_example" // String | The description of the food.
};
apiInstance.addFoods(name, defaultFoodMeasurementUnitId, defaultServingSize, calories, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The food name. | 
 **defaultFoodMeasurementUnitId** | **String**| The ID of the default measurement unit. Full list of units can be retrieved via the Get Food Units endpoint. | 
 **defaultServingSize** | **String**| The size of the default serving. Nutrition values should be provided for this serving size. | 
 **calories** | **String**| The calories in the default serving size. | 
 **formType** | **String**| Form type; LIQUID or DRY. | [optional] 
 **description** | **String**| The description of the food. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addFoodsLog

> addFoodsLog(foodId, mealTypeId, unitId, amount, date, opts)

Log Food

Creates food log entries for users with or without foodId value.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let foodId = "foodId_example"; // String | The ID of the food to be logged. Either foodId or foodName must be provided.
let mealTypeId = "mealTypeId_example"; // String | Meal types. 1=Breakfast; 2=Morning Snack; 3=Lunch; 4=Afternoon Snack; 5=Dinner; 7=Anytime.
let unitId = "unitId_example"; // String | The ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
let amount = "amount_example"; // String | The amount consumed in the format X.XX in the specified unitId.
let date = new Date("2013-10-20"); // Date | Log entry date in the format yyyy-MM-dd.
let opts = {
  'foodName': "foodName_example", // String | Food entry name. Either foodId or foodName must be provided.
  'favorite': true, // Boolean | The `true` value will add the food to the user's favorites after creating the log entry; while the `false` value will not. Valid only with foodId value.
  'brandName': "brandName_example", // String | Brand name of food. Valid only with foodName parameters.
  'calories': 56 // Number | Calories for this serving size. This is allowed with foodName parameter (default to zero); otherwise it is ignored.
};
apiInstance.addFoodsLog(foodId, mealTypeId, unitId, amount, date, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **String**| The ID of the food to be logged. Either foodId or foodName must be provided. | 
 **mealTypeId** | **String**| Meal types. 1&#x3D;Breakfast; 2&#x3D;Morning Snack; 3&#x3D;Lunch; 4&#x3D;Afternoon Snack; 5&#x3D;Dinner; 7&#x3D;Anytime. | 
 **unitId** | **String**| The ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units. | 
 **amount** | **String**| The amount consumed in the format X.XX in the specified unitId. | 
 **date** | **Date**| Log entry date in the format yyyy-MM-dd. | 
 **foodName** | **String**| Food entry name. Either foodId or foodName must be provided. | [optional] 
 **favorite** | **Boolean**| The &#x60;true&#x60; value will add the food to the user&#39;s favorites after creating the log entry; while the &#x60;false&#x60; value will not. Valid only with foodId value. | [optional] 
 **brandName** | **String**| Brand name of food. Valid only with foodName parameters. | [optional] 
 **calories** | **Number**| Calories for this serving size. This is allowed with foodName parameter (default to zero); otherwise it is ignored. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addMeal

> addMeal(name, description, foodId, unitId, amount)

Create Meal

Creates a meal with the given food contained in the post body.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let name = "name_example"; // String | Name of the meal.
let description = "description_example"; // String | Short description of the meal.
let foodId = "foodId_example"; // String | ID of the food to be included in the meal.
let unitId = "unitId_example"; // String | ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
let amount = "amount_example"; // String | Amount consumed; in the format X.XX, in the specified unitId.
apiInstance.addMeal(name, description, foodId, unitId, amount, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the meal. | 
 **description** | **String**| Short description of the meal. | 
 **foodId** | **String**| ID of the food to be included in the meal. | 
 **unitId** | **String**| ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units. | 
 **amount** | **String**| Amount consumed; in the format X.XX, in the specified unitId. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addUpdateFoodsGoal

> addUpdateFoodsGoal(calories, opts)

Update Food Goal

Updates a user&#39;s daily calories consumption goal or food plan and returns a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let calories = 56; // Number | Manual calorie consumption goal in either calories or intensity must be provided.
let opts = {
  'intensity': "intensity_example", // String | Food plan intensity (MAINTENANCE, EASIER, MEDIUM, KINDAHARD, or HARDER). Either calories or intensity must be provided.
  'personalized': "personalized_example" // String | Food plan type; true or false.
};
apiInstance.addUpdateFoodsGoal(calories, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calories** | **Number**| Manual calorie consumption goal in either calories or intensity must be provided. | 
 **intensity** | **String**| Food plan intensity (MAINTENANCE, EASIER, MEDIUM, KINDAHARD, or HARDER). Either calories or intensity must be provided. | [optional] 
 **personalized** | **String**| Food plan type; true or false. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addUpdateWaterGoal

> addUpdateWaterGoal(target)

Update Water Goal

Updates a user&#39;s daily calories consumption goal or food plan and returns a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let target = 56; // Number | The target water goal in the format X.X is set in unit based on locale.
apiInstance.addUpdateWaterGoal(target, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **Number**| The target water goal in the format X.X is set in unit based on locale. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addWaterLog

> addWaterLog(date, amount, opts)

Log Water

Creates a log entry for water using units in the unit systems that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let date = new Date("2013-10-20"); // Date | The date of records to be returned in the format yyyy-MM-dd.
let amount = 56; // Number | The amount consumption in the format X.XX and in the specified waterUnit or in the unit system that corresponds to the Accept-Language header provided.
let opts = {
  'unit': "unit_example" // String | Water measurement unit; `ml`, `fl oz`, or `cup`.
};
apiInstance.addWaterLog(date, amount, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| The date of records to be returned in the format yyyy-MM-dd. | 
 **amount** | **Number**| The amount consumption in the format X.XX and in the specified waterUnit or in the unit system that corresponds to the Accept-Language header provided. | 
 **unit** | **String**| Water measurement unit; &#x60;ml&#x60;, &#x60;fl oz&#x60;, or &#x60;cup&#x60;. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFavoriteFood

> deleteFavoriteFood(foodId)

Delete Favorite Food

Deletes a food with the given ID to the user&#39;s list of favorite foods.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let foodId = "foodId_example"; // String | The ID of the food to be deleted from user's favorites.
apiInstance.deleteFavoriteFood(foodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **String**| The ID of the food to be deleted from user&#39;s favorites. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFoods

> deleteFoods(foodId)

Delete Custom Food

Deletes custom food for a user and returns a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let foodId = "foodId_example"; // String | The ID of the food to be deleted.
apiInstance.deleteFoods(foodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **String**| The ID of the food to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFoodsLog

> deleteFoodsLog(foodLogId)

Delete Food Log

Deletes a user&#39;s food log entry with the given ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let foodLogId = "foodLogId_example"; // String | The ID of the food log entry to be deleted.
apiInstance.deleteFoodsLog(foodLogId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodLogId** | **String**| The ID of the food log entry to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteMeal

> deleteMeal(mealId)

Delete Meal

Deletes a user&#39;s meal with the given meal id.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let mealId = "mealId_example"; // String | Id of the meal to delete.
apiInstance.deleteMeal(mealId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mealId** | **String**| Id of the meal to delete. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteWaterLog

> deleteWaterLog(waterLogId)

Delete Water Log

Deletes a user&#39;s water log entry with the given ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let waterLogId = "waterLogId_example"; // String | The ID of the waterUnit log entry to be deleted.
apiInstance.deleteWaterLog(waterLogId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waterLogId** | **String**| The ID of the waterUnit log entry to be deleted. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editFoodsLog

> editFoodsLog(foodLogId, mealTypeId, unitId, amount, opts)

Edit Food Log

The Edit Food Log endpoint changes the quantity or calories consumed for a user&#39;s food log entry with the given Food Log ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let foodLogId = "foodLogId_example"; // String | The ID of the food log entry to be edited.
let mealTypeId = "mealTypeId_example"; // String | Meal types. 1=Breakfast; 2=Morning Snack; 3=Lunch; 4=Afternoon Snack; 5=Dinner; 7=Anytime.
let unitId = "unitId_example"; // String | The ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
let amount = "amount_example"; // String | The amount consumed in the format X.XX in the specified unitId.
let opts = {
  'calories': 56 // Number | Calories for this serving size. This is allowed with foodName parameter (default to zero); otherwise it is ignored.
};
apiInstance.editFoodsLog(foodLogId, mealTypeId, unitId, amount, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodLogId** | **String**| The ID of the food log entry to be edited. | 
 **mealTypeId** | **String**| Meal types. 1&#x3D;Breakfast; 2&#x3D;Morning Snack; 3&#x3D;Lunch; 4&#x3D;Afternoon Snack; 5&#x3D;Dinner; 7&#x3D;Anytime. | 
 **unitId** | **String**| The ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units. | 
 **amount** | **String**| The amount consumed in the format X.XX in the specified unitId. | 
 **calories** | **Number**| Calories for this serving size. This is allowed with foodName parameter (default to zero); otherwise it is ignored. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFavoriteFoods

> getFavoriteFoods()

Get Favorite Foods

Returns a list of a user&#39;s favorite foods in the format requested. A favorite food in the list provides a quick way to log the food via the Log Food endpoint.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getFavoriteFoods((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFoodsByDate

> getFoodsByDate(date)

Get Food Logs

Retreives a summary and list of a user&#39;s food log entries for a given day in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let date = new Date("2013-10-20"); // Date | The date of records to be returned. In the format yyyy-MM-dd.
apiInstance.getFoodsByDate(date, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| The date of records to be returned. In the format yyyy-MM-dd. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFoodsGoal

> getFoodsGoal()

Get Food Goals

Returns a user&#39;s current daily calorie consumption goal and/or foodPlan value in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getFoodsGoal((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFoodsInfo

> getFoodsInfo(foodId)

Get Food

Returns the details of a specific food in the Fitbit food databases or a private food that an authorized user has entered in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let foodId = "foodId_example"; // String | The ID of the food.
apiInstance.getFoodsInfo(foodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **foodId** | **String**| The ID of the food. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFoodsList

> getFoodsList(query)

Search Foods

Returns a list of public foods from the Fitbit food database and private food the user created in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let query = "query_example"; // String | The URL-encoded search query.
apiInstance.getFoodsList(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| The URL-encoded search query. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFoodsLocales

> getFoodsLocales()

Get Food Locales

Returns the food locales that the user may choose to search, log, and create food in.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getFoodsLocales((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFoodsUnits

> getFoodsUnits()

Get Food Units

Returns a list of all valid Fitbit food units in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getFoodsUnits((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getFrequentFoods

> getFrequentFoods()

Get Frequent Foods

Returns a list of a user&#39;s frequent foods in the format requested. A frequent food in the list provides a quick way to log the food via the Log Food endpoint.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getFrequentFoods((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getMeals

> getMeals()

Get Meals

Returns a list of meals created by user in the user&#39;s food log in the format requested. User creates and manages meals on the Food Log tab on the website.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getMeals((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getRecentFoods

> getRecentFoods()

Get Recent Foods

Returns a list of a user&#39;s frequent foods in the format requested. A frequent food in the list provides a quick way to log the food via the Log Food endpoint.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getRecentFoods((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWaterByDate

> getWaterByDate(date)

Get Water Logs

Retreives a summary and list of a user&#39;s water log entries for a given day in the requested using units in the unit system that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let date = new Date("2013-10-20"); // Date | The date of records to be returned. In the format yyyy-MM-dd.
apiInstance.getWaterByDate(date, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| The date of records to be returned. In the format yyyy-MM-dd. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWaterGoal

> getWaterGoal()

Get Water Goal

Retreives a summary and list of a user&#39;s water goal entries for a given day in the requested using units in the unit system that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
apiInstance.getWaterGoal((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateMeal

> updateMeal(mealId, name, description, foodId, unitId, amount)

Edit Meal

Replaces an existing meal with the contents of the request. The response contains the updated meal.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let mealId = "mealId_example"; // String | Id of the meal to edit.
let name = "name_example"; // String | Name of the meal.
let description = "description_example"; // String | Short description of the meal.
let foodId = "foodId_example"; // String | ID of the food to be included in the meal.
let unitId = "unitId_example"; // String | ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units.
let amount = "amount_example"; // String | Amount consumed; in the format X.XX, in the specified unitId.
apiInstance.updateMeal(mealId, name, description, foodId, unitId, amount, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mealId** | **String**| Id of the meal to edit. | 
 **name** | **String**| Name of the meal. | 
 **description** | **String**| Short description of the meal. | 
 **foodId** | **String**| ID of the food to be included in the meal. | 
 **unitId** | **String**| ID of units used. Typically retrieved via a previous call to Get Food Logs, Search Foods, or Get Food Units. | 
 **amount** | **String**| Amount consumed; in the format X.XX, in the specified unitId. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateWaterLog

> updateWaterLog(waterLogId, amount, opts)

Update Water Log

Updates a user&#39;s water log entry with the given ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.FoodAndWaterApi();
let waterLogId = "waterLogId_example"; // String | The ID of the waterUnit log entry to be deleted.
let amount = "amount_example"; // String | Amount consumed; in the format X.X and in the specified waterUnit or in the unit system that corresponds to the Accept-Language header provided.
let opts = {
  'unit': "unit_example" // String | Water measurement unit. 'ml', 'fl oz', or 'cup'.
};
apiInstance.updateWaterLog(waterLogId, amount, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waterLogId** | **String**| The ID of the waterUnit log entry to be deleted. | 
 **amount** | **String**| Amount consumed; in the format X.X and in the specified waterUnit or in the unit system that corresponds to the Accept-Language header provided. | 
 **unit** | **String**| Water measurement unit. &#39;ml&#39;, &#39;fl oz&#39;, or &#39;cup&#39;. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

