import React from 'react';

class MoviesApi {
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

    getAllMovies() {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: this._headers,
          })
            .then(this._handleServerResponse)
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  export default moviesApi;
