import { Route, Routes, useHistory } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const history = useHistory();
  const token = localStorage.getItem('token');

  const checkToken = (token) => {
    if (token) {
      mainApi.checkToken(token)
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
          history.push("/movies");
        })
        .catch((error) => {
          console.log(`К сожалению, возникла ошибка: ${error}`);
        });
    }
  };

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.checkToken(token), moviesApi.getAllMovies()])
        .then(([userData, movies]) => {
          setCurrentUser(userData);
          setAllMovies(movies);
        })
        .catch((error) => {
          console.log(`К сожалению, возникла ошибка: ${error}`);
        });
    }
    checkToken(token)
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
