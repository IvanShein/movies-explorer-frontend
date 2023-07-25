import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import {
    NUMBER_OF_RENDERED_MOVIES_FOR_1280,
    NUMBER_OF_RENDERED_MOVIES_FOR_1024,
    NUMBER_OF_RENDERED_MOVIES_FOR_768,
    NUMBER_OF_RENDERED_MOVIES_FOR_320,
    ADD_NUMBER_OF_RENDERED_MOVIES_FOR_1280,
    ADD_NUMBER_OF_RENDERED_MOVIES_FOR_1024,
    ADD_NUMBER_OF_RENDERED_MOVIES_FOR_320_768
} from '../../../utils/Constants';

function MoviesCardList({ cards, buttonClassName, savedMovies, handleAddMovieLike, handleDeleteMovieLike }) {
    let [numberOfRenderedMovies, setNumberOfRenderedMovies] = useState(0);
    const displaySize = window.innerWidth;

    function handleNumberOfRenderedMovies() {
        const displaySize = window.innerWidth;
        if (displaySize > 1278) {
            setNumberOfRenderedMovies(NUMBER_OF_RENDERED_MOVIES_FOR_1280);
        } else if (displaySize > 1022) {
            setNumberOfRenderedMovies(NUMBER_OF_RENDERED_MOVIES_FOR_1024);
        } else if (displaySize > 766) {
            setNumberOfRenderedMovies(NUMBER_OF_RENDERED_MOVIES_FOR_768);
        } else {
            setNumberOfRenderedMovies(NUMBER_OF_RENDERED_MOVIES_FOR_320);
        };
        if (numberOfRenderedMovies >= cards.length) {
            numberOfRenderedMovies = cards.length;
        };
    };

    function renderMore() {
        const displaySize = window.innerWidth;
        if (displaySize > 1278) {
            setNumberOfRenderedMovies(numberOfRenderedMovies + ADD_NUMBER_OF_RENDERED_MOVIES_FOR_1280);
        } else if (displaySize > 1022) {
            setNumberOfRenderedMovies(numberOfRenderedMovies + ADD_NUMBER_OF_RENDERED_MOVIES_FOR_1024);
        } else {
            setNumberOfRenderedMovies(numberOfRenderedMovies +  ADD_NUMBER_OF_RENDERED_MOVIES_FOR_320_768);
        };
        if (numberOfRenderedMovies >= cards.length) {
            numberOfRenderedMovies = cards.length;
        };
    };

    useEffect(() => {
        handleNumberOfRenderedMovies();
    }, [displaySize]);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', handleNumberOfRenderedMovies);
        }, 300);
    });

    function isMovieSaved(movie) {
        const truth = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
        return truth;
    }

    return (
        <section className="movies-card-list">
            {cards.length > 0
                ? <ul className="movies-card-list__grid">

                    {cards.slice(0, numberOfRenderedMovies).map((card) =>
                        <li className="movies-card" key={card.id}>
                            <MoviesCard
                                card={card}
                                buttonClassName={buttonClassName}
                                isLiked={isMovieSaved(card)}
                                handleDeleteMovieLike={handleDeleteMovieLike}
                                handleAddMovieLike={handleAddMovieLike}
                            />
                        </li>
                    )}

                </ul>

                : <div className="movies-card-list__no-cards">
                    <h3 className="movies-card__info"> Ничего не найдено </h3>
                </div>

            }
            {
                numberOfRenderedMovies < cards.length &&
                <button
                    className="movies-card-list__add-button link-decoration"
                    onClick={renderMore}
                >
                    Ещё
                </button>
            }
        </section>
    );
}

export default MoviesCardList;
