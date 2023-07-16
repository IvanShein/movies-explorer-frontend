class MainApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    };
  
    _handleServerResponse(response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`При обращении к серверу возникла ошибка: ${response.status} ${response.statusText}`)
    };
  
    registration(password, email, name) {
      return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          "password": password,
          "email": email,
          "name": name
            })
      })
        .then(this._handleServerResponse)
    };
  
    signIn(password, email) {
      return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          "password": password,
          "email": email
            })
      })
        .then(this._handleServerResponse)
    };
  
    checkToken(token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
  
        }
      })
        .then(this._handleServerResponse)
    };
  
  }
  
  const mainApi = new MainApi({
    baseUrl: 'https://api.portfolio-shein-ivan.nomoredomains.monster',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  export default mainApi;