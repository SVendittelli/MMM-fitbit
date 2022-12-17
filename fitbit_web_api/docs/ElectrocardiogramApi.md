# FitbitWebApiExplorer.ElectrocardiogramApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEcgLogList**](ElectrocardiogramApi.md#getEcgLogList) | **GET** /1/user/-/ecg/list.json | Get ECG Log List



## getEcgLogList

> getEcgLogList(sort, offset, limit, opts)

Get ECG Log List

This endpoint is used for querying the user&#39;s on-device ECG readings.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.ElectrocardiogramApi();
let sort = "sort_example"; // String | The sort order of entries by date asc (ascending) or desc (descending).
let offset = 0; // Number | The offset number of entries.
let limit = 56; // Number | The maximum number of entries returned (maximum;10).
let opts = {
  'beforeDate': new Date("2013-10-20"), // Date | The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified.
  'afterDate': new Date("2013-10-20") // Date | The date in the format yyyy-MM-ddTHH:mm:ss.
};
apiInstance.getEcgLogList(sort, offset, limit, opts, (error, data, response) => {
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
 **limit** | **Number**| The maximum number of entries returned (maximum;10). | 
 **beforeDate** | **Date**| The date in the format yyyy-MM-ddTHH:mm:ss. Only yyyy-MM-dd is required. Either beforeDate or afterDate should be specified. | [optional] 
 **afterDate** | **Date**| The date in the format yyyy-MM-ddTHH:mm:ss. | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

