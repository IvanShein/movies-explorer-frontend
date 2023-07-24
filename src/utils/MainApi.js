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

    registration({password, email, name}) {
        console.log("Регистрэйшн в АПИ: ", {password, email, name});
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, email, password })
        })
            .then(this._handleServerResponse)
    };

    signIn({password, email}) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this._handleServerResponse)
    };

    userUpdate({email, name}) {
        const token = localStorage.getItem('token');
        console.log("Юзерапдейт в АПИ: ", {email, name});
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ email, name })
        })
            .then(this._handleServerResponse)
    };

    checkToken() {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'

            }
        })
            .then(this._handleServerResponse)
    };

    getSavedMovies() {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'

            }
        })
            .then(this._handleServerResponse)
    };

    saveMovie(movieData) {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: movieData.country,
                director: movieData.director,
                duration: movieData.duration,
                year: movieData.year,
                description: movieData.description,
                image: 'https://api.nomoreparties.co/uploads/zagruzhennoe_1_fd5faff237.jpeg',
                trailerLink: movieData.trailerLink,
                thumbnail: 'https://api.nomoreparties.co/uploads/zagruzhennoe_1_fd5faff237.jpeg',
                movieId: movieData.id,
                nameRU: movieData.nameRU,
                nameEN: movieData.nameEN,
              }),
        })
            .then(this._handleServerResponse)
    };

    deleteMovie(movieId) {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
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
