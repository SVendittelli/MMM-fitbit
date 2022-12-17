# FitbitWebApiExplorer.CardioFitnessScoreVO2MaxApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVo2MaxSummaryByDate**](CardioFitnessScoreVO2MaxApi.md#getVo2MaxSummaryByDate) | **GET** /1/user/-/cardioscore/date/{date}.json | Get VO2 Max Summary by Date
[**getVo2MaxSummaryByInterval**](CardioFitnessScoreVO2MaxApi.md#getVo2MaxSummaryByInterval) | **GET** /1/user/-/cardioscore/date/{startDate}/{endDate}.json | Get VO2 Max Summary by Interval



## getVo2MaxSummaryByDate

> getVo2MaxSummaryByDate(date)

Get VO2 Max Summary by Date

This endpoint returns the Cardio Fitness Score (VO2 Max) data for a single date. VO2 Max values will be shown as a range if no run data is available or a single numeric value if the user uses a GPS for runs.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.CardioFitnessScoreVO2MaxApi();
let date = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getVo2MaxSummaryByDate(date, (error, data, response) => {
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


## getVo2MaxSummaryByInterval

> getVo2MaxSummaryByInterval(startDate, endDate)

Get VO2 Max Summary by Interval

This endpoint returns the Cardio Fitness Score (VO2 Max) data for a date range. VO2 Max values will be shown as a range if no run data is available or a single numeric value if the user uses a GPS for runs.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.CardioFitnessScoreVO2MaxApi();
let startDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
let endDate = new Date("2013-10-20"); // Date | The date in the format of yyyy-MM-dd or today.
apiInstance.getVo2MaxSummaryByInterval(startDate, endDate, (error, data, response) => {
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

