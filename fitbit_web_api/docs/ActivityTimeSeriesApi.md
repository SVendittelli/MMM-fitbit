# FitbitWebApiExplorer.ActivityTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivitiesResourceByDatePeriod**](ActivityTimeSeriesApi.md#getActivitiesResourceByDatePeriod) | **GET** /1/user/-/activities/{resource-path}/date/{date}/{period}.json | Get Activity Time Series
[**getActivitiesResourceByDateRange**](ActivityTimeSeriesApi.md#getActivitiesResourceByDateRange) | **GET** /1/user/-/activities/{resource-path}/date/{base-date}/{end-date}.json | Get Activity Resource by Date Range
[**getActivitiesTrackerResourceByDatePeriod**](ActivityTimeSeriesApi.md#getActivitiesTrackerResourceByDatePeriod) | **GET** /1/user/-/activities/tracker/{resource-path}/date/{date}/{period}.json | Get Activity Time Series
[**getActivitiesTrackerResourceByDateRange**](ActivityTimeSeriesApi.md#getActivitiesTrackerResourceByDateRange) | **GET** /1/user/-/activities/tracker/{resource-path}/date/{base-date}/{end-date}.json | Get Activity Tracker Resource by Date Range Time Series



## getActivitiesResourceByDatePeriod

> getActivitiesResourceByDatePeriod(resourcePath, date, period)

Get Activity Time Series

Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let date = new Date("2013-10-20"); // Date | The end date of the period specified in the format yyyy-MM-dd or today.
let period = "period_example"; // String | The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
apiInstance.getActivitiesResourceByDatePeriod(resourcePath, date, period, (error, data, response) => {
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
 **resourcePath** | **String**| The resource-path; see options in the Resource Path Options section in the full documentation. | [default to &#39;steps&#39;]
 **date** | **Date**| The end date of the period specified in the format yyyy-MM-dd or today. | 
 **period** | **String**| The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesResourceByDateRange

> getActivitiesResourceByDateRange(resourcePath, baseDate, endDate)

Get Activity Resource by Date Range

Returns activities time series data in the specified range for a given resource.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let baseDate = new Date("2013-10-20"); // Date | The range start date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date of the range.
apiInstance.getActivitiesResourceByDateRange(resourcePath, baseDate, endDate, (error, data, response) => {
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
 **resourcePath** | **String**| The resource-path; see options in the Resource Path Options section in the full documentation. | [default to &#39;steps&#39;]
 **baseDate** | **Date**| The range start date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date of the range. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesTrackerResourceByDatePeriod

> getActivitiesTrackerResourceByDatePeriod(resourcePath, date, period)

Get Activity Time Series

Returns time series data in the specified range for a given resource in the format requested using units in the unit system that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let date = new Date("2013-10-20"); // Date | The end date of the period specified in the format yyyy-MM-dd or today.
let period = "period_example"; // String | The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max.
apiInstance.getActivitiesTrackerResourceByDatePeriod(resourcePath, date, period, (error, data, response) => {
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
 **resourcePath** | **String**| The resource-path; see options in the Resource Path Options section in the full documentation. | [default to &#39;steps&#39;]
 **date** | **Date**| The end date of the period specified in the format yyyy-MM-dd or today. | 
 **period** | **String**| The range for which data will be returned. Options are 1d, 7d, 30d, 1w, 1m, 3m, 6m, 1y, or max. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesTrackerResourceByDateRange

> getActivitiesTrackerResourceByDateRange(resourcePath, baseDate, endDate)

Get Activity Tracker Resource by Date Range Time Series

Returns time series data in the specified range for a given resource.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let baseDate = new Date("2013-10-20"); // Date | The range start date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date of the range.
apiInstance.getActivitiesTrackerResourceByDateRange(resourcePath, baseDate, endDate, (error, data, response) => {
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
 **resourcePath** | **String**| The resource-path; see options in the Resource Path Options section in the full documentation. | [default to &#39;steps&#39;]
 **baseDate** | **Date**| The range start date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date of the range. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

