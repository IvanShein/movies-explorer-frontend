import React from 'react';
import Header from '../Header/Header';
import HeaderNavigation from '../Header/HeaderNavigation/HeaderNavigation';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MOVIES_CARDS from '../../utils/MoviesCards';
import './Movies.css';

function Movies() {
  return (
    <div className="movies">
      <Header color={"white"} child={<HeaderNavigation />} />
      <main className="content">
        <SearchForm />
        <MoviesCardList cards={MOVIES_CARDS} buttonClassName={'movies-card__button'} />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;