import React from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MOVIES_CARDS from '../../utils/MoviesCards';
import './Movies.css';

function Movies({loggedIn}) {
  return (
    <div className="movies">
      <Header color={"white"} loggedIn={loggedIn} />
      <main className="content">
        <SearchForm />
        <MoviesCardList cards={MOVIES_CARDS} buttonClassName={'movies-card__button'} />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;