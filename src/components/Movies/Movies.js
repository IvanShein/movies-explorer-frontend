import React from 'react';
import Header from '../Header/Header';
import HeaderNavigation from '../Header/HeaderNavigation/HeaderNavigation';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies() {
  return (
    <div>
      <Header color={"white"} child={<HeaderNavigation />} />
      <main className="content">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
