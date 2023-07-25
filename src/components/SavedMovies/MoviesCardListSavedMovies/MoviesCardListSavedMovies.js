import React from 'react';
import MoviesCardSavedMovies from '../MoviesCardSavedMovies/MoviesCardSavedMovies';
import './MoviesCardListSavedMovies.css';

function MoviesCardList({ cards, buttonClassName, handleDeleteMovieFromSaved }) {


    return (
        <section className="movies-card-list">
            {cards.length > 0
                ? <ul className="movies-card-list__grid">
                    {
                        cards.map((card) =>

                            <li className="movies-card" key={card._id}>
                                <MoviesCardSavedMovies
                                    card={card}
                                    buttonClassName={buttonClassName}
                                    handleDeleteMovie={handleDeleteMovieFromSaved}
                                />
                            </li>
                        )
                    }

                </ul>

                : <dev className="movies-card-list__no-cards">
                    <h3 className="movies-card__info"> Ничего не найдено </h3>
                </dev>
            }

        </section>
    );
}

export default MoviesCardList;

