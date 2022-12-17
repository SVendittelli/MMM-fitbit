# FitbitWebApiExplorer.ActivityApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addActivitiesLog**](ActivityApi.md#addActivitiesLog) | **POST** /1/user/-/activities.json | Log Activity
[**addFavoriteActivities**](ActivityApi.md#addFavoriteActivities) | **POST** /1/user/-/activities/favorite/{activity-id}.json | Add Favorite Activity
[**addUpdateActivitiesGoals**](ActivityApi.md#addUpdateActivitiesGoals) | **POST** /1/user/-/activities/goals/{period}.json | Update Activity Goals
[**deleteActivitiesLog**](ActivityApi.md#deleteActivitiesLog) | **DELETE** /1/user/-/activities/{activity-log-id}.json | Delete Activity Log
[**deleteFavoriteActivities**](ActivityApi.md#deleteFavoriteActivities) | **DELETE** /1/user/-/activities/favorite/{activity-id}.json | Delete Favorite Activity
[**getActivitiesByDate**](ActivityApi.md#getActivitiesByDate) | **GET** /1/user/-/activities/date/{date}.json | Get Activity Summary by Date 
[**getActivitiesGoals**](ActivityApi.md#getActivitiesGoals) | **GET** /1/user/-/activities/goals/{period}.json | Get Activity Goals
[**getActivitiesLog**](ActivityApi.md#getActivitiesLog) | **GET** /1/user/-/activities.json | Get Lifetime Stats
[**getActivitiesLogList**](ActivityApi.md#getActivitiesLogList) | **GET** /1/user/-/activities/list.json | Get Activity Log List
[**getActivitiesTCX**](ActivityApi.md#getActivitiesTCX) | **GET** /1/user/-/activities/{log-id}.tcx | Get Activity TCX
[**getActivitiesTypeDetail**](ActivityApi.md#getActivitiesTypeDetail) | **GET** /1/activities/{activity-id}.json | Get Activity Type
[**getActivitiesTypes**](ActivityApi.md#getActivitiesTypes) | **GET** /1/activities.json | Browse Activity Types
[**getFavoriteActivities**](ActivityApi.md#getFavoriteActivities) | **GET** /1/user/-/activities/favorite.json | Get Favorite Activities
[**getFrequentActivities**](ActivityApi.md#getFrequentActivities) | **GET** /1/user/-/activities/frequent.json | Get Frequent Activities
[**getRecentActivities**](ActivityApi.md#getRecentActivities) | **GET** /1/user/-/activities/recent.json | Get Recent Activity Types



## addActivitiesLog

> addActivitiesLog(activityId, manualCalories, startTime, durationMillis, date, distance, opts)

Log Activity

The Log Activity endpoint creates log entry for an activity or user&#39;s private custom activity using units in the unit system which corresponds to the Accept-Language header provided (or using optional custom distanceUnit) and get a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let activityId = 56; // Number | The ID of the activity, directory activity or intensity level activity.
let manualCalories = 56; // Number | Calories burned that are manaully specified. Required with activityName must be provided.
let startTime = "startTime_example"; // String | Activity start time. Hours and minutes in the format HH:mm:ss.
let durationMillis = 56; // Number | Duration in milliseconds.
let date = new Date("2013-10-20"); // Date | Log entry date in the format yyyy-MM-dd.
let distance = 56; // Number | Distance is required for logging directory activity in the format X.XX and in the selected distanceUnit.
let opts = {
  'activityName': "activityName_example", // String | Custom activity name. Either activityId or activityName must be provided.
  'distanceUnit': 56 // Number | Distance measurement unit. Steps units are available only for Walking (activityId=90013) and Running (activityId=90009) directory activities and their intensity levels.
};
apiInstance.addActivitiesLog(activityId, manualCalories, startTime, durationMillis, date, distance, opts, (error, data, response) => {
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
 **activityId** | **Number**| The ID of the activity, directory activity or intensity level activity. | 
 **manualCalories** | **Number**| Calories burned that are manaully specified. Required with activityName must be provided. | 
 **startTime** | **String**| Activity start time. Hours and minutes in the format HH:mm:ss. | 
 **durationMillis** | **Number**| Duration in milliseconds. | 
 **date** | **Date**| Log entry date in the format yyyy-MM-dd. | 
 **distance** | **Number**| Distance is required for logging directory activity in the format X.XX and in the selected distanceUnit. | 
 **activityName** | **String**| Custom activity name. Either activityId or activityName must be provided. | [optional] 
 **distanceUnit** | **Number**| Distance measurement unit. Steps units are available only for Walking (activityId&#x3D;90013) and Running (activityId&#x3D;90009) directory activities and their intensity levels. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addFavoriteActivities

> addFavoriteActivities(activityId)

Add Favorite Activity

Adds the activity with the given ID to user&#39;s list of favorite activities.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let activityId = "activityId_example"; // String | The encoded ID of the activity.
apiInstance.addFavoriteActivities(activityId, (error, data, response) => {
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
 **activityId** | **String**| The encoded ID of the activity. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## addUpdateActivitiesGoals

> addUpdateActivitiesGoals(period, type, value)

Update Activity Goals

Updates a user&#39;s daily or weekly activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let period = "period_example"; // String | daily or weekly.
let type = "type_example"; // String | goal type
let value = "value_example"; // String | goal value
apiInstance.addUpdateActivitiesGoals(period, type, value, (error, data, response) => {
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
 **period** | **String**| daily or weekly. | 
 **type** | **String**| goal type | 
 **value** | **String**| goal value | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteActivitiesLog

> deleteActivitiesLog(activityLogId)

Delete Activity Log

Deletes a user&#39;s activity log entry with the given ID.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let activityLogId = 56; // Number | The id of the activity log entry.
apiInstance.deleteActivitiesLog(activityLogId, (error, data, response) => {
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
 **activityLogId** | **Number**| The id of the activity log entry. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteFavoriteActivities

> deleteFavoriteActivities(activityId)

Delete Favorite Activity

Removes the activity with the given ID from a user&#39;s list of favorite activities.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let activityId = "activityId_example"; // String | The ID of the activity to be removed.
apiInstance.deleteFavoriteActivities(activityId, (error, data, response) => {
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
 **activityId** | **String**| The ID of the activity to be removed. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesByDate

> getActivitiesByDate(date)

Get Activity Summary by Date 

Retrieves a summary and list of a user&#39;s activities and activity log entries for a given day.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd
apiInstance.getActivitiesByDate(date, (error, data, response) => {
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
 **date** | **Date**| The date in the format yyyy-MM-dd | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesGoals

> getActivitiesGoals(period)

Get Activity Goals

Retreives a user&#39;s current daily or weekly activity goals using measurement units as defined in the unit system, which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let period = "period_example"; // String | daily or weekly.
apiInstance.getActivitiesGoals(period, (error, data, response) => {
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
 **period** | **String**| daily or weekly. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesLog

> getActivitiesLog()

Get Lifetime Stats

Updates a user&#39;s daily activity goals and returns a response using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
apiInstance.getActivitiesLog((error, data, response) => {
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


## getActivitiesLogList

> getActivitiesLogList(sort, offset, limit, opts)

Get Activity Log List

Retreives a list of user&#39;s activity log entries before or after a given day with offset and limit using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let sort = "sort_example"; // String | The sort order of entries by date asc (ascending) or desc (descending).
let offset = 0; // Number | The offset number of entries.
let limit = 56; // Number | The maximum number of entries returned (maximum;100).
let opts = {
  'beforeDate': new Date("2013-10-20"), // Date | The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified.
  'afterDate': new Date("2013-10-20") // Date | The date in the format yyyy-MM-ddTHH:mm:ss.
};
apiInstance.getActivitiesLogList(sort, offset, limit, opts, (error, data, response) => {
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
 **sort** | **String**| The sort order of entries by date asc (ascending) or desc (descending). | 
 **offset** | **Number**| The offset number of entries. | [default to 0]
 **limit** | **Number**| The maximum number of entries returned (maximum;100). | 
 **beforeDate** | **Date**| The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified. | [optional] 
 **afterDate** | **Date**| The date in the format yyyy-MM-ddTHH:mm:ss. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesTCX

> getActivitiesTCX(logId, opts)

Get Activity TCX

Retreives the details of a user&#39;s location and heart rate data during a logged exercise activity.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let logId = "logId_example"; // String | The activity's log ID.
let opts = {
  'includePartialTCX': true // Boolean | Include TCX points regardless of GPS data being present
};
apiInstance.getActivitiesTCX(logId, opts, (error, data, response) => {
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
 **logId** | **String**| The activity&#39;s log ID. | 
 **includePartialTCX** | **Boolean**| Include TCX points regardless of GPS data being present | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesTypeDetail

> getActivitiesTypeDetail(activityId)

Get Activity Type

Returns the detail of a specific activity in the Fitbit activities database in the format requested. If activity has levels, it also returns a list of activity level details.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
let activityId = "activityId_example"; // String | The activity ID.
apiInstance.getActivitiesTypeDetail(activityId, (error, data, response) => {
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
 **activityId** | **String**| The activity ID. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesTypes

> getActivitiesTypes()

Browse Activity Types

Retreives a tree of all valid Fitbit public activities from the activities catelog as well as private custom activities the user created in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
apiInstance.getActivitiesTypes((error, data, response) => {
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


## getFavoriteActivities

> getFavoriteActivities()

Get Favorite Activities

Returns a list of a user&#39;s favorite activities.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
apiInstance.getFavoriteActivities((error, data, response) => {
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


## getFrequentActivities

> getFrequentActivities()

Get Frequent Activities

Retreives a list of a user&#39;s frequent activities in the format requested using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
apiInstance.getFrequentActivities((error, data, response) => {
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


## getRecentActivities

> getRecentActivities()

Get Recent Activity Types

Retreives a list of a user&#39;s recent activities types logged with some details of the last activity log of that type using units in the unit system which corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityApi();
apiInstance.getRecentActivities((error, data, response) => {
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

