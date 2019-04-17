import HttpClient from './httpClient'

const OfficeIP = "http://172.17.21.21:81";
const AnyWhereElseIP = "http://197.248.38.196:5581";

const AppEndpoint = 'http://jsonplaceholder.typicode.com';
const Port = "5581";
const host = 'http://jsonplaceholder.typicode.com';

const DefaultRedirectRoute = "/survey/channels/view";

const client = new HttpClient(AppEndpoint);

function makeRequest(method, url, config, withAuth = false) {
  return client.makeRequest(method, url, config, withAuth)
}

function getAuthToken() {
  if (localStorage.getItem('app.Authorization')) {
    return JSON.parse(localStorage.getItem('app.Authorization')).accessToken
  } else {
    return undefined
  }
}

function getUserDetails() {
  if (localStorage.getItem('app.Authorization')) {
    return JSON.parse(localStorage.getItem('app.Authorization')).userAccountsByUserId
  } else {
    return undefined
  }
}

function logout() {
  localStorage.removeItem('app.Authorization');
}

export default {
  AppEndpoint,
  host,
  getAuthToken,
  getUserDetails,
  DefaultRedirectRoute,
  makeRequest,
  logout
}
