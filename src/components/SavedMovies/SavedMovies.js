import React, { useState }  from 'react';
import Header from '../Header/Header';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

import './SavedMovies.css';

function SavedMovies({loggedIn}) {
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
        <SearchForm onSearch={handleSearchMovies}/>
        <MoviesCardList cards={allMovies} buttonClassName={'movies-card__button_delete'} />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;