# FitbitWebApiExplorer.DevicesApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAlarms**](DevicesApi.md#addAlarms) | **POST** /1/user/-/devices/tracker/{tracker-id}/alarms.json | Add Alarm
[**deleteAlarms**](DevicesApi.md#deleteAlarms) | **DELETE** /1/user/-/devices/tracker/{tracker-id}/alarms/{alarm-id}.json | Delete Alarm
[**getAlarms**](DevicesApi.md#getAlarms) | **GET** /1/user/-/devices/tracker/{tracker-id}/alarms.json | Get Alarms
[**getDevices**](DevicesApi.md#getDevices) | **GET** /1/user/-/devices.json | Get Devices
[**updateAlarms**](DevicesApi.md#updateAlarms) | **POST** /1/user/-/devices/tracker/{tracker-id}/alarms/{alarm-id}.json | Update Alarm



## addAlarms

> addAlarms(trackerId, time, enabled, recurring, weekDays)

Add Alarm

Adds the alarm settings to a given ID for a given device.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.DevicesApi();
let trackerId = 56; // Number | The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint.
let time = "time_example"; // String | Time of day that the alarm vibrates with a UTC timezone offset, e.g. 07:15-08:00.
let enabled = true; // Boolean | true or false. If false, alarm does not vibrate until enabled is set to true.
let recurring = "recurring_example"; // String | true or false. If false, the alarm is a single event.
let weekDays = "weekDays_example"; // String | Comma separated list of days of the week on which the alarm vibrates, e.g. MONDAY, TUESDAY.
apiInstance.addAlarms(trackerId, time, enabled, recurring, weekDays, (error, data, response) => {
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
 **trackerId** | **Number**| The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint. | 
 **time** | **String**| Time of day that the alarm vibrates with a UTC timezone offset, e.g. 07:15-08:00. | 
 **enabled** | **Boolean**| true or false. If false, alarm does not vibrate until enabled is set to true. | 
 **recurring** | **String**| true or false. If false, the alarm is a single event. | 
 **weekDays** | **String**| Comma separated list of days of the week on which the alarm vibrates, e.g. MONDAY, TUESDAY. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteAlarms

> deleteAlarms(trackerId, alarmId)

Delete Alarm

Deletes the user&#39;s device alarm entry with the given ID for a given device.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.DevicesApi();
let trackerId = 56; // Number | The ID of the tracker whose alarms is managed. The tracker-id value is found via the Get Devices endpoint.
let alarmId = 56; // Number | The ID of the alarm to be updated. The alarm-id value is found via the Get Alarms endpoint.
apiInstance.deleteAlarms(trackerId, alarmId, (error, data, response) => {
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
 **trackerId** | **Number**| The ID of the tracker whose alarms is managed. The tracker-id value is found via the Get Devices endpoint. | 
 **alarmId** | **Number**| The ID of the alarm to be updated. The alarm-id value is found via the Get Alarms endpoint. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlarms

> getAlarms(trackerId)

Get Alarms

Returns alarms for a device

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.DevicesApi();
let trackerId = 56; // Number | The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint.
apiInstance.getAlarms(trackerId, (error, data, response) => {
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
 **trackerId** | **Number**| The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getDevices

> getDevices()

Get Devices

Returns a list of the Fitbit devices connected to a user&#39;s account.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.DevicesApi();
apiInstance.getDevices((error, data, response) => {
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


## updateAlarms

> updateAlarms(trackerId, alarmId, time, enabled, recurring, weekDays, snoozeLength, snoozeCount)

Update Alarm

Updates the alarm entry with a given ID for a given device. It also gets a response in the format requested.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.DevicesApi();
let trackerId = 56; // Number | The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint.
let alarmId = 56; // Number | The ID of the alarm to be updated. The alarm-id value is found in the response of the Get Activity endpoint.
let time = "time_example"; // String | Time of day that the alarm vibrates with a UTC timezone offset, e.g. 07:15-08:00.
let enabled = true; // Boolean | true or false. If false, the alarm does not vibrate until enabled is set to true.
let recurring = "recurring_example"; // String | true or false. If false, the alarm is a single event.
let weekDays = "weekDays_example"; // String | Comma seperated list of days of the week on which the alarm vibrates, e.g. MONDAY, TUESDAY.
let snoozeLength = 56; // Number | Minutes between alarms.
let snoozeCount = 56; // Number | Maximum snooze count.
apiInstance.updateAlarms(trackerId, alarmId, time, enabled, recurring, weekDays, snoozeLength, snoozeCount, (error, data, response) => {
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
 **trackerId** | **Number**| The ID of the tracker for which data is returned. The tracker-id value is found via the Get Devices endpoint. | 
 **alarmId** | **Number**| The ID of the alarm to be updated. The alarm-id value is found in the response of the Get Activity endpoint. | 
 **time** | **String**| Time of day that the alarm vibrates with a UTC timezone offset, e.g. 07:15-08:00. | 
 **enabled** | **Boolean**| true or false. If false, the alarm does not vibrate until enabled is set to true. | 
 **recurring** | **String**| true or false. If false, the alarm is a single event. | 
 **weekDays** | **String**| Comma seperated list of days of the week on which the alarm vibrates, e.g. MONDAY, TUESDAY. | 
 **snoozeLength** | **Number**| Minutes between alarms. | 
 **snoozeCount** | **Number**| Maximum snooze count. | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

