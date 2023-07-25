import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards, buttonClassName, savedMovies, handleAddMovieLike, handleDeleteMovieLike }) {
    let [numberOfRenderedMovies, setNumberOfRenderedMovies] = useState(0);
    const displaySize = window.innerWidth;

    function handleNumberOfRenderedMovies() {
        const displaySize = window.innerWidth;
        if (displaySize > 1278) {
            setNumberOfRenderedMovies(16);
        } else if (displaySize > 1022) {
            setNumberOfRenderedMovies(12);
        } else if (displaySize > 766) {
            setNumberOfRenderedMovies(8);
        } else {
            setNumberOfRenderedMovies(5);
        };
        if (numberOfRenderedMovies >= cards.length) {
            numberOfRenderedMovies = cards.length;
        };
    };

    function renderMore() {
        const displaySize = window.innerWidth;
        if (displaySize > 1278) {
            setNumberOfRenderedMovies(numberOfRenderedMovies + 4);
        } else if (displaySize > 1022) {
            setNumberOfRenderedMovies(numberOfRenderedMovies + 3);
        } else {
            setNumberOfRenderedMovies(numberOfRenderedMovies + 2);
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
            
            : <dev className="movies-card-list__no-cards"> 
            <h3 className="movies-card__info"> Ничего не найдено </h3> 
            </dev>

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
