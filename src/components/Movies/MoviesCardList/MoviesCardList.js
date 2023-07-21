import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards, buttonClassName }) {
    const displaySize = window.innerWidth;
    const [numberOfRenderedMovies, setNumberOfRenderedMovies] = useState(0);
    const { pathname } = useLocation();

    function handleNumberOfRenderedMovies() {
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
    }, [displaySize]);

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
