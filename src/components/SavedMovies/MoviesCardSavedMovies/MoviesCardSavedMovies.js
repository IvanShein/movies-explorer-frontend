import { React, useState } from 'react';
import './MoviesCardSavedMovies.css';

function MoviesCard({ handleDeleteMovie, buttonClassName, props }) {
    const { duration, nameRU, isSaved } = props;

    const [isLiked, setIsLiked] = useState(isSaved);

    function handleDeleteClick() {
        handleDeleteMovie(props._id);
    }

    function minsToHoursMins(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч${minutes}м`;
    }

    return (
        <>
            <img src={`${props.image}`} className="movies-card__image" alt="Изображение для фильма в карточке" />
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