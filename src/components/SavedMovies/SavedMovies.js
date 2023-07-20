import React from 'react';
import Header from '../Header/Header';
import HeaderNavigation from '../Header/HeaderNavigation/HeaderNavigation';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SAVED_MOVIES_CARDS from '../../utils/SavedMoviesCards';
import './SavedMovies.css';

function SavedMovies({loggedIn}) {
  return (
    <div className="movies">
      <Header color={"white"} loggedIn={loggedIn} />
      <main className="content">
        <SearchForm />
        <MoviesCardList cards={SAVED_MOVIES_CARDS} buttonClassName={'movies-card__button_delete'} />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;