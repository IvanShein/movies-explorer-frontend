import { React } from 'react';
import './MoviesCardSavedMovies.css';

function MoviesCard({ handleDeleteMovie, buttonClassName, card }) {
    const { duration, nameRU } = card;

    function handleDeleteClick() {
        handleDeleteMovie(card.movieId);
    }

    function minsToHoursMins(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч${minutes}м`;
    }

    return (
        <>
            <a href={card.trailerLink} target="_blank" className="link-decoration">
                <img src={`${card.image}`} className="movies-card__image" alt="Изображение для фильма в карточке" />
            </a>
            <div className="movies-card__info">
                <div className="movies-card__about">
                    <h3 className="movies-card__name">{nameRU}</h3>
                    <p className="movies-card__duration">{minsToHoursMins(duration)}</p>
                </div>
                <button
                    className={`${buttonClassName} link-decoration`}
                    onClick={handleDeleteClick}>
                </button>
            </div>
        </>
    );
}

export default MoviesCard;