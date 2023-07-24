import React from 'react';
import MoviesCardSavedMovies from '../MoviesCardSavedMovies/MoviesCardSavedMovies';
import './MoviesCardListSavedMovies.css';

function MoviesCardList({ cards, buttonClassName, handleDeleteMovieFromSaved }) {


    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__grid">
                {
                    cards.map((card) =>

                        <li className="movies-card" key={card._id}>
                            <MoviesCardSavedMovies
                                props={card}
                                buttonClassName={buttonClassName}
                                handleDeleteMovie={handleDeleteMovieFromSaved}
                            />
                        </li>
                    )
                }
            </ul>
        </section>
    );
}

export default MoviesCardList;

