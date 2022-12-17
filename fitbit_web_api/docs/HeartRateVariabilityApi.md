# FitbitWebApiExplorer.HeartRateVariabilityApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHrvSummaryDate**](HeartRateVariabilityApi.md#getHrvSummaryDate) | **GET** /1/user/-/hrv/date/{date}.json | Get HRV Summary by Date
[**getHrvSummaryInterval**](HeartRateVariabilityApi.md#getHrvSummaryInterval) | **GET** /1/user/-/hrv/date/{startDate}/{endDate}.json | Get HRV Summary by Interval



## getHrvSummaryDate

> getHrvSummaryDate(date)

Get HRV Summary by Date

This endpoint returns the Heart Rate Variability (HRV) data for a single date. HRV data applies specifically to a user’s “main sleep,” which is the longest single period of time asleep on a given date.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateVariabilityApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getHrvSummaryDate(date, (error, data, response) => {
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


## getHrvSummaryInterval

> getHrvSummaryInterval(startDate, endDate)

Get HRV Summary by Interval

This endpoint returns the Heart Rate Variability (HRV) data for a date range. HRV data applies specifically to a user’s “main sleep,” which is the longest single period of time asleep on a given date.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.HeartRateVariabilityApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getHrvSummaryInterval(startDate, endDate, (error, data, response) => {
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

