import { React, useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ buttonClassName, props }) {
    const { duration, image, nameRU, isSaved } = props;

    const [isLiked, setIsLiked] = useState(isSaved);

    function handleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <li className="movies-card">
            <img src={image} className="movies-card__image" alt="Изображение для фильма в карточке" />
            <div className="movies-card__info">
                <div className="movies-card__about">
                    <h3 className="movies-card__name">{nameRU}</h3>
                    <p className="movies-card__duration">{duration}</p>
                </div>
                <button
                    className={`${buttonClassName} ${isLiked ? "" : "movies-card__button_not-liked"} link-decoration`}
                    onClick={handleLike}>
                </button>
            </div>
        </li>
    );
}

export default MoviesCard;