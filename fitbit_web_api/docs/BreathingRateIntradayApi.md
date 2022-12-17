# FitbitWebApiExplorer.BreathingRateIntradayApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBreathingRateIntradayByDate**](BreathingRateIntradayApi.md#getBreathingRateIntradayByDate) | **GET** /1/user/-/br/date/{date}/all.json | Get Breathing Rate Intraday by Date
[**getBreathingRateIntradayByInterval**](BreathingRateIntradayApi.md#getBreathingRateIntradayByInterval) | **GET** /1/user/-/br/date/{startDate}/{endDate}/all.json | Get Breathing Rate Intraday by Interval



## getBreathingRateIntradayByDate

> getBreathingRateIntradayByDate(date)

Get Breathing Rate Intraday by Date

This endpoint returns intraday breathing rate data for a single date. It measures the average breathing rate throughout the day and categories your breathing rate by sleep stage. Sleep stages vary between light sleep, deep sleep, REM sleep, and full sleep.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BreathingRateIntradayApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getBreathingRateIntradayByDate(date, (error, data, response) => {
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
 **date** | **Date**| The date in the format of yyyy-MM-dd or today. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBreathingRateIntradayByInterval

> getBreathingRateIntradayByInterval(startDate, endDate)

Get Breathing Rate Intraday by Interval

This endpoint returns intraday breathing rate data for a date range. It measures the average breathing rate throughout the day and categories your breathing rate by sleep stage. Sleep stages vary between light sleep, deep sleep, REM sleep, and full sleep.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BreathingRateIntradayApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getBreathingRateIntradayByInterval(startDate, endDate, (error, data, response) => {
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
 **startDate** | **Date**| The date in the format of yyyy-MM-dd or today. | 
 **endDate** | **Date**| The date in the format of yyyy-MM-dd or today. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

