import { React, useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ buttonClassName, props, isLiked=true }) {
    const { duration, nameRU } = props;
    const [isLikedCard, setIsLikedCard] = useState(false);

    function handleLikeClick() {
        setIsLikedCard(!isLikedCard);
    }

    function minsToHoursMins(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч${minutes}м`;
    }

    return (
        <>
            <img src={`https://api.nomoreparties.co/${props.image.url}`} className="movies-card__image" alt="Изображение для фильма в карточке" />
            <div className="movies-card__info">
                <div className="movies-card__about">
                    <h3 className="movies-card__name">{nameRU}</h3>
                    <p className="movies-card__duration">{minsToHoursMins(duration)}</p>
                </div>
                <button
                    className={`${buttonClassName} ${isLikedCard ? "" : "movies-card__button_not-liked"} link-decoration`}
                    onClick={handleLikeClick}>
                </button>
            </div>
        </>
    );
}

export default MoviesCard;