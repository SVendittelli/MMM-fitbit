# FitbitWebApiExplorer.ActivityIntradayTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivitiesResourceByDateIntraday**](ActivityIntradayTimeSeriesApi.md#getActivitiesResourceByDateIntraday) | **GET** /1/user/-/activities/{resource-path}/date/{date}/1d/{detail-level}.json | Get Intraday Time Series
[**getActivitiesResourceByDateRangeIntraday**](ActivityIntradayTimeSeriesApi.md#getActivitiesResourceByDateRangeIntraday) | **GET** /1/user/-/activities/{resource-path}/date/{base-date}/{end-date}/{detail-level}.json | Get Activity Intraday Time Series
[**getActivitiesResourceByDateRangeTimeSeriesIntraday**](ActivityIntradayTimeSeriesApi.md#getActivitiesResourceByDateRangeTimeSeriesIntraday) | **GET** /1/user/-/activities/{resource-path}/date/{date}/{end-date}/{detail-level}/time/{start-time}/{end-time}.json | Get Activity Intraday Time Series
[**getActivitiesResourceByDateTimeSeriesIntraday**](ActivityIntradayTimeSeriesApi.md#getActivitiesResourceByDateTimeSeriesIntraday) | **GET** /1/user/-/activities/{resource-path}/date/{date}/1d/{detail-level}/time/{start-time}/{end-time}.json | Get Intraday Time Series



## getActivitiesResourceByDateIntraday

> getActivitiesResourceByDateIntraday(resourcePath, date, detailLevel)

Get Intraday Time Series

Returns the Intraday Time Series for a given resource in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityIntradayTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | Number of data points to include. Either 1min or 15min. Optional.
apiInstance.getActivitiesResourceByDateIntraday(resourcePath, date, detailLevel, (error, data, response) => {
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
 **date** | **Date**| The date in the format yyyy-MM-dd or today. | 
 **detailLevel** | **String**| Number of data points to include. Either 1min or 15min. Optional. | [default to &#39;1min&#39;]

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesResourceByDateRangeIntraday

> getActivitiesResourceByDateRangeIntraday(resourcePath, baseDate, endDate, detailLevel)

Get Activity Intraday Time Series

Returns the Activity Intraday Time Series for a given resource in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityIntradayTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let baseDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | Number of data points to include. Either 1min or 15min. Optional.
apiInstance.getActivitiesResourceByDateRangeIntraday(resourcePath, baseDate, endDate, detailLevel, (error, data, response) => {
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
 **baseDate** | **Date**| The date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The date in the format yyyy-MM-dd or today. | 
 **detailLevel** | **String**| Number of data points to include. Either 1min or 15min. Optional. | [default to &#39;1min&#39;]

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesResourceByDateRangeTimeSeriesIntraday

> getActivitiesResourceByDateRangeTimeSeriesIntraday(resourcePath, date, endDate, detailLevel, startTime, endTime)

Get Activity Intraday Time Series

Returns the Intraday Time Series for a given resource in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityIntradayTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | Number of data points to include. Either 1min or 15min.
let startTime = "startTime_example"; // String | The start of the period in the format HH:mm.
let endTime = "endTime_example"; // String | The end of the period in the format HH:mm.
apiInstance.getActivitiesResourceByDateRangeTimeSeriesIntraday(resourcePath, date, endDate, detailLevel, startTime, endTime, (error, data, response) => {
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
 **date** | **Date**| The date in the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The date in the format yyyy-MM-dd or today. | 
 **detailLevel** | **String**| Number of data points to include. Either 1min or 15min. | [default to &#39;1min&#39;]
 **startTime** | **String**| The start of the period in the format HH:mm. | 
 **endTime** | **String**| The end of the period in the format HH:mm. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getActivitiesResourceByDateTimeSeriesIntraday

> getActivitiesResourceByDateTimeSeriesIntraday(resourcePath, date, detailLevel, startTime, endTime)

Get Intraday Time Series

Returns the Intraday Time Series for a given resource in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ActivityIntradayTimeSeriesApi();
let resourcePath = "'steps'"; // String | The resource-path; see options in the Resource Path Options section in the full documentation.
let date = new Date("2013-10-20"); // Date | The date in the format yyyy-MM-dd or today.
let detailLevel = "'1min'"; // String | Number of data points to include. Either 1min or 15min.
let startTime = "startTime_example"; // String | The start of the period in the format HH:mm.
let endTime = "endTime_example"; // String | The end of the period in the format HH:mm.
apiInstance.getActivitiesResourceByDateTimeSeriesIntraday(resourcePath, date, detailLevel, startTime, endTime, (error, data, response) => {
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
 **date** | **Date**| The date in the format yyyy-MM-dd or today. | 
 **detailLevel** | **String**| Number of data points to include. Either 1min or 15min. | [default to &#39;1min&#39;]
 **startTime** | **String**| The start of the period in the format HH:mm. | 
 **endTime** | **String**| The end of the period in the format HH:mm. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

