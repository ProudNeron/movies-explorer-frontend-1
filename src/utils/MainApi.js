import { MAINAPI_URL } from './constants';

const checkResponse = (res) => (res.ok
  ? res.json()
  : res.json()
    .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  signUp(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then((res) => checkResponse(res));
  }

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => checkResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => checkResponse(res));
  }
}

const mainApi = new MainApi({
  baseUrl: MAINAPI_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainApi;
