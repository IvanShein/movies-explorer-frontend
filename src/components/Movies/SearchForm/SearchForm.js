import React from 'react';
import Switch from "../../Switch/Switch";
import './SearchForm.css';

function SearchForm(props) {
    

    function handleSubmit(event) {
        event.preventDefault();
        props.onSearch();
    }

    return (
        <section className="search-form" onSubmit={handleSubmit}>
            <form className="search-form__form">
                <input className="search-form__input" type="text" id="search-form" placeholder="Фильм" />
                <button className="search-form__button link-decoration" type="submit" />
            </form>
            <div className="search-form__switch-box">
                <Switch isOn={props.isShortMovies} handleToggle={() => props.setIsShortMovies(!props.isShortMovies)} />
                <span className="search-form__switch-box-label">Короткометражки</span>
            </div>
        </section>
    );
}

export default SearchForm;