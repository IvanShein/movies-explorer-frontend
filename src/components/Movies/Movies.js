import React, { useState } from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from './Preloader/Preloader';
import MOVIES_CARDS from '../../utils/MoviesCards';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { filterByQuery, filterByDuration } from '../../utils/Utils';

import './Movies.css';

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNoMovies, setIsNoMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState('На сайте произошла ошибка. Приносим свои извинения!');
  const allMoviesList = JSON.parse(localStorage.getItem('allMovies'));
  const allSavedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));


  // function handleFilter(movies, query, isShort) { 
  //   setFilteredMovies(isShort ? filterByDuration(filterByQuery(movies, query)) : filterByQuery(movies, query));
  //   localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  // }


  function getSavedMovies() {
    if (!allSavedMoviesList) {
      setIsLoading(true);
      mainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
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
    }
  }


  function handleSearchMovies() {
    getSavedMovies();
    if(!allMoviesList) {
    setIsLoading(true);
    moviesApi.getAllMovies()
      .then((allMovies) => {
        setAllMovies(allMovies);
        localStorage.setItem('allMovies', JSON.stringify(allMovies));
        console.log("AllМувис в Мувис: ", allMovies);
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
      setAllMovies(allMoviesList);
      console.log("AllМувис в Мувис Из ЛокалСторадж: ", allMoviesList);
    }
  }

  // function isMovieInSavedMoviesList(movie) {
  //   getSavedMovies();
  //   console.log("Это результат функции isMovieInSavedMoviesList: ", savedMovies.find((savedMovie) => savedMovie._id === movie.id));
  //   return savedMovies.find((savedMovie) => savedMovie._id === movie.id);
  // }

  const closeInfoTooltip = () => {
    setIsInfoTooltipOpen(false);
    setInfoTooltipMessage('');
  };

  return (
    <div className="movies">
      <Header color={"white"} loggedIn={props.loggedIn} />
      <main className="content">
        <SearchForm onSearch={handleSearchMovies} isShortMovies={isShortMovies} setIsShortMovies={setIsShortMovies} />
        {isLoading
        ? <Preloader />
        : <MoviesCardList 
        cards={allMovies} 
        buttonClassName={'movies-card__button'}
        // isMovieInSavedMoviesList={isMovieInSavedMoviesList}
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

export default Movies;