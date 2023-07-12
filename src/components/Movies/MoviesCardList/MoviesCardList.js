import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards, buttonClassName }) {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__grid">
                {cards.map((card) =>
                    <MoviesCard
                        props={card}
                        buttonClassName={buttonClassName}
                    />
                )}
            </ul>
            <button className="movies-card-list__add-button link-decoration">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
