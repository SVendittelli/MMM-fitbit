# FitbitWebApiExplorer.AuthApi

All URIs are relative to *https://api.fitbit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**introspect**](AuthApi.md#introspect) | **POST** /1.1/oauth2/introspect | Retrieve the active state of an OAuth 2.0 token
[**oauthToken**](AuthApi.md#oauthToken) | **POST** /oauth2/token | Get OAuth 2 access token



## introspect

> introspect(token)

Retrieve the active state of an OAuth 2.0 token

Retrieves the active state of an OAuth 2.0 token. It follows https://tools.ietf.org/html/rfc7662.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';
let defaultClient = FitbitWebApiExplorer.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new FitbitWebApiExplorer.AuthApi();
let token = "token_example"; // String | OAuth 2.0 token to retrieve the state of
apiInstance.introspect(token, (error, data, response) => {
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
 **token** | **String**| OAuth 2.0 token to retrieve the state of | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined


## oauthToken

> oauthToken(clientId, grantType, opts)

Get OAuth 2 access token

Retrieves an OAuth 2 access token.

### Example

```javascript
import FitbitWebApiExplorer from 'fitbit_web_api_explorer';

let apiInstance = new FitbitWebApiExplorer.AuthApi();
let clientId = "clientId_example"; // String | This is your Fitbit API application id from your settings on dev.fitbit.com.
let grantType = "grantType_example"; // String | Authorization grant type. Valid values are 'authorization_code' and 'refresh_token'.
let opts = {
  'authorization': "authorization_example", // String | The Authorization header must be set to 'Basic' followed by a space, then the Base64 encoded string of your application's client id and secret concatenated with a colon. For example, 'Basic Y2xpZW50X2lkOmNsaWVudCBzZWNyZXQ='. The Base64 encoded string, 'Y2xpZW50X2lkOmNsaWVudCBzZWNyZXQ=', is decoded as 'client_id:client secret'.
  'code': "code_example", // String | Authorization code received in the redirect as URI parameter. Required if using the Authorization Code flow.
  'expiresIn': "expiresIn_example", // String | Specify the desired access token lifetime. Defaults to 28800 for 8 hours. The other valid value is 3600 for 1 hour.
  'redirectUri': "redirectUri_example", // String | Uri to which the access token will be sent if the request is successful. Required if specified in the redirect to the authorization page. Must be exact match.
  'refreshToken': "refreshToken_example", // String | Refresh token issued by Fitbit. Required if 'grant_type' is 'refresh_token'.
  'state': "state_example" // String | Required if specified in the redirect uri of the authorization page. Must be an exact match.
};
apiInstance.oauthToken(clientId, grantType, opts, (error, data, response) => {
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
 **clientId** | **String**| This is your Fitbit API application id from your settings on dev.fitbit.com. | 
 **grantType** | **String**| Authorization grant type. Valid values are &#39;authorization_code&#39; and &#39;refresh_token&#39;. | 
 **authorization** | **String**| The Authorization header must be set to &#39;Basic&#39; followed by a space, then the Base64 encoded string of your application&#39;s client id and secret concatenated with a colon. For example, &#39;Basic Y2xpZW50X2lkOmNsaWVudCBzZWNyZXQ&#x3D;&#39;. The Base64 encoded string, &#39;Y2xpZW50X2lkOmNsaWVudCBzZWNyZXQ&#x3D;&#39;, is decoded as &#39;client_id:client secret&#39;. | [optional] 
 **code** | **String**| Authorization code received in the redirect as URI parameter. Required if using the Authorization Code flow. | [optional] 
 **expiresIn** | **String**| Specify the desired access token lifetime. Defaults to 28800 for 8 hours. The other valid value is 3600 for 1 hour. | [optional] 
 **redirectUri** | **String**| Uri to which the access token will be sent if the request is successful. Required if specified in the redirect to the authorization page. Must be exact match. | [optional] 
 **refreshToken** | **String**| Refresh token issued by Fitbit. Required if &#39;grant_type&#39; is &#39;refresh_token&#39;. | [optional] 
 **state** | **String**| Required if specified in the redirect uri of the authorization page. Must be an exact match. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

