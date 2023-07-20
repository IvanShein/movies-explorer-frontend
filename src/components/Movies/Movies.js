import React, { useState }  from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import './Movies.css';

function Movies({loggedIn}) {
  const [allMovies, setAllMovies] = useState([]);
  const token = localStorage.getItem('token');

  function handleSearchMovies() {
    moviesApi.getAllMovies()
    .then((allMovies) => {
      setAllMovies(allMovies);
      localStorage.setItem('allMovies', JSON.stringify(allMovies));
    })
    
  }


  return (
    <div className="movies">
      <Header color={"white"} loggedIn={loggedIn} />
      <main className="content">
        <SearchForm onSearch={handleSearchMovies} />
        <MoviesCardList cards={allMovies} buttonClassName={'movies-card__button'} />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;