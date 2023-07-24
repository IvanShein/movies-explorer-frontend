import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState('На сайте произошла ошибка. Приносим свои извинения!');
  let [allMovies, setAllMovies] = useState([]);
  let [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const checkToken = (token) => {
    if (token) {
      mainApi.checkToken()
        .then((data) => {
          setCurrentUser(data);
          console.log("Чектокен в АПП: ", data);
          setLoggedIn(true);
        })
        .catch((error) => {
          console.log(`К сожалению, возникла ошибка: ${error}`);
          setLoggedIn(false);
          navigate("/");
          setInfoTooltipMessage(`Ошибка. ${error}`);
          setIsInfoTooltipOpen(true);
        });
    }
  };

  useEffect(() => {
    if (loggedIn) {
      mainApi.checkToken()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((error) => {
          setInfoTooltipMessage(`Ошибка. ${error}`);
          setIsInfoTooltipOpen(true);
          console.log(`К сожалению, возникла ошибка: ${error}`);
        });

      mainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
          console.log("SaveDМувис в АПП юзэфекте: ", savedMovies)
        })
        .catch((error) => {
          setInfoTooltipMessage(`К сожалению, при запросе списка избранных фильмов с сервера возникла ошибка. ${error}`);
          setIsInfoTooltipOpen(true);
          console.log(`К сожалению, возникла ошибка: ${error}`);
        })
    }
    checkToken(token)
  }, [loggedIn, navigate, token]);

  const handleRegister = ({ name, password, email }) => {
    console.log("хэндлсабмит в апп: ", { name, password, email });
    mainApi.registration({ name, password, email })
      .then(() => {
        handleLogin({ password, email });
      })
      .then(() => {
        checkToken(token);
        setLoggedIn(true);
      })
      .catch((error) => {
        setLoggedIn(false);
        error.includes("409")
          ? setInfoTooltipMessage(`К сожалению, при регистрации пользователя возникла ошибка. Указанный Email уже используется, пожалуйста, укажите другой Email.`)
          : setInfoTooltipMessage(`К сожалению, при регистрации пользователя возникла ошибка. ${error}`);
        setIsInfoTooltipOpen(true);
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  };

  const handleLogin = ({ password, email }) => {
    mainApi.signIn({ password, email })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies");
          localStorage.setItem('token', data.token);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((error) => {
        setLoggedIn(false);
        error.includes("401")
          ? setInfoTooltipMessage(`К сожалению, при авторизации пользователя возникла ошибка. Неверные Email и пароль. Необходимо указать корректные Email и пароль зарегистрированного пользователя, либо зарегистрироваться.`)
          : setInfoTooltipMessage(`К сожалению, при авторизации пользователя возникла ошибка. ${error}`);
        setIsInfoTooltipOpen(true);
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  };

  function handleUpdateUserData(newUserData) {
    console.log("хэндлЮзерАпдейт в АПП: ", newUserData);
    mainApi.userUpdate(newUserData)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setInfoTooltipMessage("Данные пользователя успешно сохранены.");
        setIsInfoTooltipOpen(true);
      })
      .catch((error) => {
        error.includes("409")
          ? setInfoTooltipMessage(`К сожалению, при обновлении данных пользователя возникла ошибка. Указанный Email уже используется, пожалуйста, укажите другой Email.`)
          : setInfoTooltipMessage(`К сожалению, при обновлении данных пользователя возникла ошибка. ${error}`);
        setIsInfoTooltipOpen(true);
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  }

  // function handleGetAllMovies() {
  //  moviesApi.getAllMovies()
  //   .then((allMovies) => {
  //     setAllMovies(allMovies);
  //     localStorage.setItem('allMovies', JSON.stringify(allMovies));
  //     console.log("AllМувис в АПП: ", allMovies);
  //   })
  //   .catch((error) => {
  //     setInfoTooltipMessage(`К сожалению, при обращении к серверу https://api.nomoreparties.co/beatfilm-movies возникла ошибка: ${error}`);
  //     setIsInfoTooltipOpen(true);
  //     console.log(`К сожалению, возникла ошибка: ${error}`);
  //   })
  // }

  // function handleGetSavedMovies() {
  //   mainApi.getSavedMovies()
  //   .then((savedMovies) => {
  //     localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  //   })
  //   .then(() => {
  //     setSavedMovies(savedMovies);
  //   })
  //   .catch((error) => {
  //     setInfoTooltipMessage(`К сожалению, при запросе списка избранных фильмов с сервера возникла ошибка. ${error}`);
  //     setIsInfoTooltipOpen(true);
  //     console.log(`К сожалению, возникла ошибка: ${error}`);
  //   })
  // }

  function handleSaveMovie(movieData) {
    mainApi.saveMovie(movieData)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((error) => {
        setInfoTooltipMessage(`К сожалению, при сохранении фильма в избранное возникла ошибка. ${error}`);
        setIsInfoTooltipOpen(true);
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  }

  function handleDeleteMovie(movieID) {
    let movieData = savedMovies.find((savedMovie) => savedMovie.movieId === movieID);
    mainApi.deleteMovie(movieData._id)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((savedMovie) => savedMovie.movieId !== movieID));
      })
      .catch((error) => {
        setInfoTooltipMessage(`К сожалению, при удалении фильма из списка избранных возникла ошибка. ${error}`);
        setIsInfoTooltipOpen(true);
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  }

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  };

  const closeInfoTooltip = () => {
    setIsInfoTooltipOpen(false);
    setInfoTooltipMessage('');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>

          <Route path="/movies"
            element=
            {
              <ProtectedRoute
                loggedIn={loggedIn}
                // handleGetAllMovies={handleGetAllMovies}
                handleDeleteMovie={handleDeleteMovie}
                handleSaveMovie={handleSaveMovie}
                allMovies={allMovies}
                component={Movies}
                savedMovies={savedMovies}
              >

              </ProtectedRoute>
            }
          />

          <Route path="/saved-movies"
            element=
            {
              <ProtectedRoute
                loggedIn={loggedIn}
                // handleGetSavedMovies={handleGetSavedMovies}
                handleDeleteMovie={handleDeleteMovie}
                component={SavedMovies}
                savedMovies={savedMovies}
                isLoading={isLoading}
              >
              </ProtectedRoute>
            }
          />

          <Route path="/profile"
            element=
            {
              <ProtectedRoute
                handleSignOut={handleSignOut}
                handleUpdateUserData={handleUpdateUserData}
                loggedIn={loggedIn}
                component={Profile}>
              </ProtectedRoute>
            }
          />

          <Route path="/signin" element={
            loggedIn
              ? (<Navigate to="/" />)
              : (<Login handleLogin={handleLogin} />)
          } />

          <Route path="/signup" element={
            loggedIn
              ? (<Navigate to="/" />)
              : (<Register handleRegister={handleRegister} />)
          } />

          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          message={infoTooltipMessage}
        />
      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;
