# FitbitWebApiExplorer.HeartRateTimeSeriesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHeartByDatePeriod**](HeartRateTimeSeriesApi.md#getHeartByDatePeriod) | **GET** /1/user/-/activities/heart/date/{date}/{period}.json | Get Heart Rate Time Series
[**getHeartByDateRange**](HeartRateTimeSeriesApi.md#getHeartByDateRange) | **GET** /1/user/-/activities/heart/date/{base-date}/{end-date}.json | Get Heart Rate Time Series



## getHeartByDatePeriod

> getHeartByDatePeriod(date, period)

Get Heart Rate Time Series

Returns the time series data in the specified range for a given resource in the format requested using units in the unit systems that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateTimeSeriesApi();
let date = new Date("2013-10-20"); // Date | The end date of the period specified in the format yyyy-MM-dd or today.
let period = "period_example"; // String | The range of which data will be returned. Options are 1d, 7d, 30d, 1w, and 1m.
apiInstance.getHeartByDatePeriod(date, period, (error, data, response) => {
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
 **date** | **Date**| The end date of the period specified in the format yyyy-MM-dd or today. | 
 **period** | **String**| The range of which data will be returned. Options are 1d, 7d, 30d, 1w, and 1m. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getHeartByDateRange

> getHeartByDateRange(baseDate, endDate)

Get Heart Rate Time Series

Returns the time series data in the specified range for a given resource in the format requested using units in the unit systems that corresponds to the Accept-Language header provided.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateTimeSeriesApi();
let baseDate = "baseDate_example"; // String | The range start date in  the format yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The end date of the range.
apiInstance.getHeartByDateRange(baseDate, endDate, (error, data, response) => {
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
 **baseDate** | **String**| The range start date in  the format yyyy-MM-dd or today. | 
 **endDate** | **Date**| The end date of the range. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

