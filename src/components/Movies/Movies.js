import React from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

function Movies() {
  return (
    <section className="movies">
      <h1 className="movies__title">Movies</h1>
      <p className="movies__subtitle">тест</p>
      <Link className='movies__link' to='/'>На главную</Link>
    </section>
  );
}

export default Movies;
