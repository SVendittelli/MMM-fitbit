# FitbitWebApiExplorer.BreathingRateApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBreathingRateSummaryByDate**](BreathingRateApi.md#getBreathingRateSummaryByDate) | **GET** /1/user/-/br/date/{date}.json | Get Breathing Rate Summary by Date
[**getBreathingRateSummaryByInterval**](BreathingRateApi.md#getBreathingRateSummaryByInterval) | **GET** /1/user/-/br/date/{startDate}/{endDate}.json | Get Breathing Rate Summary by Interval



## getBreathingRateSummaryByDate

> getBreathingRateSummaryByDate(date)

Get Breathing Rate Summary by Date

This endpoint returns average breathing rate data for a single date. Breathing Rate data applies specifically to a user’s “main sleep,” which is the longest single period of time during which they were asleep on a given date.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BreathingRateApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getBreathingRateSummaryByDate(date, (error, data, response) => {
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


## getBreathingRateSummaryByInterval

> getBreathingRateSummaryByInterval(startDate, endDate)

Get Breathing Rate Summary by Interval

This endpoint returns average breathing rate data for a date range. Breathing Rate data applies specifically to a user’s “main sleep,” which is the longest single period of time during which they were asleep on a given date.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.BreathingRateApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getBreathingRateSummaryByInterval(startDate, endDate, (error, data, response) => {
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

