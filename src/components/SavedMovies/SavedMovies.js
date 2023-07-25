import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
import SearchFormSavedMovies from './SearchFormSavedMovies/SearchFormSavedMovies';
import MoviesCardListSavedMovies from './MoviesCardListSavedMovies/MoviesCardListSavedMovies';
import { filterByQuery, filterByDuration } from '../../utils/Utils';

import './SavedMovies.css';

function SavedMovies(props) {
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  function handleDeleteMovieFromSaved(movieId) {
    props.handleDeleteMovie(movieId);
  };

  function handleSearchMovies(searchQuery) {
    setSearchQuery(searchQuery);
  }

  function handleSwitchShort() {
    setIsShortMovies(!isShortMovies);
  }

  useEffect(() => {
    const filteredByQueryMovies = filterByQuery(props.savedMovies, searchQuery);
    setRenderedMovies(isShortMovies ? filterByDuration(filteredByQueryMovies) : filteredByQueryMovies);
  }, [props.savedMovies, isShortMovies, searchQuery]);

  return (
    <div className="movies">
      <Header color={"white"} loggedIn={props.loggedIn} />
      <main className="content">
        <SearchFormSavedMovies
          onSearch={handleSearchMovies}
          onShortSwitch={handleSwitchShort}
          isShortMovies={isShortMovies}
          setIsShortMovies={setIsShortMovies}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {props.isLoading
          ? <Preloader />
          : <MoviesCardListSavedMovies
            cards={renderedMovies}
            buttonClassName={'movies-card__button_delete'}
            handleDeleteMovieFromSaved={handleDeleteMovieFromSaved}
          />
        }
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;