import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards, buttonClassName }) {
    const [numberOfRenderedMovies, setNumberOfRenderedMovies] = useState(0);
    const { pathname } = useLocation();
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
        }
    }

    useEffect(() => {
        handleNumberOfRenderedMovies();
    }, [displaySize, handleNumberOfRenderedMovies]);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', handleNumberOfRenderedMovies);
        }, 1000);
    });

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__grid">
                {pathname === "/movies" ?
                    (<>
                        {
                            cards.slice(0, numberOfRenderedMovies).map((card) =>
                                <MoviesCard
                                    props={card}
                                    buttonClassName={buttonClassName}
                                />
                            )
                        }
                    </>) : (<>

                        {
                            cards.map((card) =>
                                <MoviesCard
                                    props={card}
                                    buttonClassName={buttonClassName}
                                />
                            )
                        }
                    </>)
                }
            </ul>
            <button className="movies-card-list__add-button link-decoration">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
