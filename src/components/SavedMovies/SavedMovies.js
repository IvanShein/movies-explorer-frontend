import React from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
import SearchFormSavedMovies from './SearchFormSavedMovies/SearchFormSavedMovies';
import MoviesCardListSavedMovies from './MoviesCardListSavedMovies/MoviesCardListSavedMovies';

import './SavedMovies.css';

function SavedMovies(props) {
  
  function handleSearchMovies() {
      console.log("SaveDМувис в СайвдМувис: ", props.savedMovies);
    }

  function handleDeleteMovieFromSaved(movieId) {
    props.handleDeleteMovie(movieId);
  };

  return (
    <div className="movies">
      <Header color={"white"} loggedIn={props.loggedIn} />
      <main className="content">
        <SearchFormSavedMovies onSearch={handleSearchMovies} />
        {props.isLoading
          ? <Preloader />
          : <MoviesCardListSavedMovies 
          cards={props.savedMovies} 
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