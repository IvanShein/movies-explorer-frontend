import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from './Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { filterByQuery, filterByDuration } from '../../utils/Utils';

import './Movies.css';

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNoMovies, setIsNoMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState('На сайте произошла ошибка. Приносим свои извинения!');

  const handleFilter = (movies, searchQuery, isShort) => {
    const filteredByQueryMovies = filterByQuery(movies, searchQuery);
    setFilteredMovies(filteredByQueryMovies);
    setRenderedMovies(isShort ? filterByDuration(filteredByQueryMovies) : filteredByQueryMovies);
    localStorage.setItem('savedFilteredMovies', JSON.stringify(filteredByQueryMovies));
    localStorage.setItem('savedAllMovies', JSON.stringify(movies));
  }

  function handleSwitchShort() {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      setRenderedMovies(filterByDuration(filteredMovies));
    } else {
      setRenderedMovies(filteredMovies);
    }
    localStorage.setItem('savedIsShortMovies', !isShortMovies);
  }

  function handleSearchMovies(searchQuery) {
    localStorage.setItem('savedSearchQuery', searchQuery);
    localStorage.setItem('savedIsShortMovies', isShortMovies);
    if (localStorage.getItem('savedAllMovies')) {
      const moviesList = JSON.parse(localStorage.getItem('savedAllMovies'));
      handleFilter(moviesList, searchQuery, isShortMovies);
    } else {
      setIsLoading(true);
      moviesApi.getAllMovies()
        .then((allMovies) => {
          handleFilter(allMovies, searchQuery, isShortMovies);
        })
        .catch((error) => {
          setInfoTooltipMessage(`К сожалению, при обращении к серверу https://api.nomoreparties.co/beatfilm-movies возникла ошибка: ${error}`);
          setIsInfoTooltipOpen(true);
          console.log(`К сожалению, возникла ошибка: ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem('savedIsShortMovies') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('savedFilteredMovies')) {
      const moviesList = JSON.parse(localStorage.getItem('savedFilteredMovies'));
      setFilteredMovies(moviesList);
      if (localStorage.getItem('savedIsShortMovies') === 'true') {
        setRenderedMovies(filterByDuration(moviesList));
      } else {
        setRenderedMovies(moviesList);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('savedSearchQuery')) {
      if (renderedMovies.length === 0) {
        setIsNoMovies(true);
      } else {
        setIsNoMovies(false);
      }
    } else {
      setIsNoMovies(false);
    }
  }, [renderedMovies]);

  const handleDeleteMovieLike = (movieId) => {
    props.handleDeleteMovie(movieId);
  };

  const handleAddMovieLike = (movie) => {
    props.handleSaveMovie(movie);
  };


  const closeInfoTooltip = () => {
    setIsInfoTooltipOpen(false);
    setInfoTooltipMessage('');
  };

  return (
    <div className="movies">
      <Header color={"white"} loggedIn={props.loggedIn} />
      <main className="content">
        <SearchForm
          onSearch={handleSearchMovies}
          onShortSwitch={handleSwitchShort}
          isShortMovies={isShortMovies}
          setIsShortMovies={setIsShortMovies}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {isLoading
          ? <Preloader />
          : <MoviesCardList
            cards={renderedMovies}
            buttonClassName={'movies-card__button'}
            savedMovies={props.savedMovies}
            handleAddMovieLike={handleAddMovieLike}
            handleDeleteMovieLike={handleDeleteMovieLike}
            isNoMovies={isNoMovies}
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