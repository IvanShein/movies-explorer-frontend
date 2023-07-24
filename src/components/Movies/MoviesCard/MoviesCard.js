import { React, useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ buttonClassName, card, isLiked=false, handleDeleteMovieLike, handleAddMovieLike }) {
    const { duration, nameRU } = card;
    // const [isLikedCard, setIsLikedCard] = useState(isLiked);

    function handleLikeClick() {
        // setIsLikedCard(!isLikedCard);
        isLiked 
        ? handleDeleteMovieLike(card.id)
        : handleAddMovieLike(card)
        console.log("Лайк в карточке переданный из листа: ", isLiked);
    }

    function minsToHoursMins(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}ч${minutes}м`;
    }

    return (
        <>
            <img src={`https://api.nomoreparties.co/${card.image.url}`} className="movies-card__image" alt="Изображение для фильма в карточке" />
            <div className="movies-card__info">
                <div className="movies-card__about">
                    <h3 className="movies-card__name">{nameRU}</h3>
                    <p className="movies-card__duration">{minsToHoursMins(duration)}</p>
                </div>
                <button
                    className={`${buttonClassName} ${isLiked ? "" : "movies-card__button_not-liked"} link-decoration`}
                    onClick={handleLikeClick}>
                </button>
            </div>
        </>
    );
}

export default MoviesCard;