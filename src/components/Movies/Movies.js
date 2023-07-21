import React, { useState }  from 'react';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { filterByQuery, filterByDuration } from '../../utils/Utils';

import './Movies.css';

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNoMovies, setIsNoMovies] = useState(false); 
  const token = localStorage.getItem('token');

  
  function handleFilter(movies, query, isShort) { 
    setFilteredMovies(isShort ? filterByDuration(filterByQuery(movies, query)) : filterByQuery(movies, query));
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  }
  
    function handleSearchMovies() {
      props.handleGetAllMovies();
  }

  return (
    <div className="movies">
      <Header color={"white"} loggedIn={props.loggedIn} />
      <main className="content">
        <SearchForm onSearch={handleSearchMovies} isShortMovies={isShortMovies} setIsShortMovies={setIsShortMovies} />
        <MoviesCardList cards={allMovies} buttonClassName={'movies-card__button'} />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;