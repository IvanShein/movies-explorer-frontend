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
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNoMovies, setIsNoMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState('На сайте произошла ошибка. Приносим свои извинения!');
  const allMoviesList = JSON.parse(localStorage.getItem('allMovies'));
  
  // function handleFilter(movies, query, isShort) { 
  //   setFilteredMovies(isShort ? filterByDuration(filterByQuery(movies, query)) : filterByQuery(movies, query));
  //   localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  // }

  function handleSearchMovies() {
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

  function handleDeleteMovieLike(movieId) {
    props.handleDeleteMovie(movieId);
  };

  function handleAddMovieLike(movie) {
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
        <SearchForm onSearch={handleSearchMovies} isShortMovies={isShortMovies} setIsShortMovies={setIsShortMovies} />
        {isLoading
        ? <Preloader />
        : <MoviesCardList 
        cards={allMovies} 
        buttonClassName={'movies-card__button'}
        savedMovies={props.savedMovies}
        handleAddMovieLike={handleAddMovieLike}
        handleDeleteMovieLike={handleDeleteMovieLike}
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