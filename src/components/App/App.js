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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(true);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState('На сайте произошла ошибка. Приносим свои извинения!');
  const [allMovies, setAllMovies] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const checkToken = (token) => {
    if (token) {
      mainApi.checkToken(token)
        .then((data) => {
          setCurrentUser(data);
          console.log("Чектокен в АПП: ", data);
          setLoggedIn(true);
        })
        .catch((error) => {
          console.log(`К сожалению, возникла ошибка: ${error}`);
          setLoggedIn(false);
          navigate("/");
        });
    }
  };

  useEffect(() => {
    if (loggedIn) {
      mainApi.checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((error) => {
          console.log(`К сожалению, возникла ошибка: ${error}`);
        });
    }
    checkToken(token)
  }, [loggedIn, navigate]);

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
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  };

  const handleLogin = ({ password, email }) => {
    mainApi.signIn({ password, email })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
        } else {
          setLoggedIn(false);
        }
      })
      .then(() => {
        checkToken(token);
        navigate("/movies");
      })
      .catch((error) => {
        setLoggedIn(false);
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  };

  function handleUpdateUserData(newUserData) {
    console.log("хэндлЮзерАпдейт в АПП: ", newUserData);
    mainApi.userUpdate(token, newUserData)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((error) => {
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
          <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
          <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />} />
          <Route path="/profile" element={<Profile handleSignOut={handleSignOut} handleUpdateUserData={handleUpdateUserData} loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} />} />
          <Route path="/" element={<Main loggedIn={loggedIn}/>} />
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
