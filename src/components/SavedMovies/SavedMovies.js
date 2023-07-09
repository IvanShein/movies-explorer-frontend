import React from 'react';
import { Link } from 'react-router-dom';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <section className="savedMovies">
      <h1 className="savedMovies__title">SavedMovies</h1>
      <p className="savedMovies__subtitle">тест</p>
      <Link className='savedMovies__link' to='/'>На главную</Link>
    </section>
  );
}

export default SavedMovies;
