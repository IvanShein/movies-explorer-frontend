import React from 'react';
import { useEffect, useState } from 'react';
import Switch from "../../Switch/Switch";
import useFormWithValidation from '../../../utils/FormValidation';
import './SearchFormSavedMovies.css';

function SearchForm(props) {
    const { values, errors, handleChange } = useFormWithValidation();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryError, setSearchQueryError] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSearchQuery(values.search);
        if (!values.search) {
            setSearchQueryError(true);
        } else { setSearchQueryError(false) };
        props.onSearch(values.search);
    }

    return (
        <section className="search-form" onSubmit={handleSubmit}>
            <form className="search-form__form" noValidate>
                <input 
                className="search-form__input" 
                type="text"
                name="search"
                id="search-form" 
                placeholder="Фильм"
                value={values.search}
                onChange={handleChange}
                required
                />
                <button className="search-form__button link-decoration" type="submit" />
            </form>
            <div className="search-form__switch-box">
                <Switch isOn={props.isShortMovies} handleToggle={props.onShortSwitch} />
                <span className="search-form__switch-box-label">Короткометражки</span>
            </div>
            <span className="search-form__input-error">{(searchQueryError || errors.search) ? "Нужно ввести ключевое слово" : ""}</span>
        </section>
    );
}

export default SearchForm;