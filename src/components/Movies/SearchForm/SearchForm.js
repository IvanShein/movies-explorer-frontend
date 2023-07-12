import { React, useState } from 'react';
import Switch from "../../Switch/Switch";
import './SearchForm.css';

function SearchForm() {
    const [isShortMovies, setIsShortMovies] = useState(false);

    return (
        <section className="search-form">
            <form className="search-form__form">
                <input className="search-form__input" type="text" id="search-form" placeholder="Фильм" />
                <button className="search-form__button link-decoration" type="submit" />
            </form>
            {/* <div className="search-form__switch">
                <form className="search-form__switch-box">
                    <input className="search-form__switch-box-input" type="checkbox"
                        onChange={() => setIsShortMovies(!isShortMovies)}
                        checked={isShortMovies}>
                    </input>
                    <span className="search-form__switch-box-slider"></span>
                    <span className="search-form__switch-box-label">Короткометражки</span>
                </form>
            </div> */}
            <div className="search-form__switch-box">
                <Switch isOn={isShortMovies} handleToggle={() => setIsShortMovies(!isShortMovies)} />
                <span className="search-form__switch-box-label">Короткометражки</span>
            </div>
        </section>
    );
}

export default SearchForm;