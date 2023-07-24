import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

import mainApi from '../../utils/MainApi';
import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
import SearchFormSavedMovies from './SearchFormSavedMovies/SearchFormSavedMovies';
import MoviesCardListSavedMovies from './MoviesCardListSavedMovies/MoviesCardListSavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import './SavedMovies.css';

function SavedMovies(props) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState('На сайте произошла ошибка. Приносим свои извинения!');
  const allSavedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));

  function handleSearchMovies() {
    if (!allSavedMoviesList || allSavedMoviesList.length === 0) {
      setIsLoading(true);
      mainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          console.log("SaveDМувис в СайвдМувис: ", savedMovies);
        })
        .catch((error) => {
          setInfoTooltipMessage(`К сожалению, при обращении к серверу https://api.nomoreparties.co/beatfilm-movies возникла ошибка: ${error}`);
          setIsInfoTooltipOpen(true);
          console.log(`К сожалению, возникла ошибка: ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setSavedMovies(allSavedMoviesList);
      console.log("SaveDМувис в СайвдМувис из ЛокалСторадж: ", allSavedMoviesList);
    }
  }

  function handleDeleteMovieFromSaved(movieId) {
    props.handleDeleteMovie(movieId);
    setSavedMovies(savedMovies.filter((movie) => movie._id !== movieId))
  };

  const closeInfoTooltip = () => {
    setIsInfoTooltipOpen(false);
    setInfoTooltipMessage('');
  };

  return (
    <div className="movies">
      <Header color={"white"} loggedIn={props.loggedIn} />
      <main className="content">
        <SearchFormSavedMovies onSearch={handleSearchMovies} />
        {isLoading
          ? <Preloader />
          : <MoviesCardListSavedMovies 
          cards={savedMovies} 
          buttonClassName={'movies-card__button_delete'} 
          handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
          />
        }
      </main>
      <Footer />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeInfoTooltip}
        message={infoTooltipMessage}
      />
    </div>
  );
}

export default SavedMovies;