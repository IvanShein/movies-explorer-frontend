import { React, useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ buttonClassName, props }) {
    const { duration, nameRU, isSaved } = props;

    const [isLiked, setIsLiked] = useState(isSaved);

    function handleLike() {
        setIsLiked(!isLiked);
    }

    function minsToHoursMins(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч${minutes}м`;
    }

    return (
        <li className="movies-card">
            <img src={`https://api.nomoreparties.co/${props.image.url}`} className="movies-card__image" alt="Изображение для фильма в карточке" />
            <div className="movies-card__info">
                <div className="movies-card__about">
                    <h3 className="movies-card__name">{nameRU}</h3>
                    <p className="movies-card__duration">{minsToHoursMins(duration)}</p>
                </div>
                <button
                    className={`${buttonClassName} link-decoration`}
                    onClick={handleLike}>
                </button>
            </div>
        </li>
    );
}

export default MoviesCard;