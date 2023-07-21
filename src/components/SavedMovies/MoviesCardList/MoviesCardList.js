import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards, buttonClassName }) {
   

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__grid">
                {
                    cards.map((card) =>
                        <MoviesCard
                            props={card}
                            buttonClassName={buttonClassName}
                        />
                    )
                }
            </ul>
        </section>
    );
}

export default MoviesCardList;

