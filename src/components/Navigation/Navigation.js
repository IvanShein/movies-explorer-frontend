import React from 'react';
import { Link } from 'react-router-dom';
import HeaderProfileMenu from '../Header/HeaderNavigation/HeaderProfileMenu/HeaderProfileMenu';
import './Navigation.css';

function Navigation({ isNavigationOpen, closeNavigation }) {

    return (
        <div className={`navigation ${isNavigationOpen ? "navigation_opened" : ""}`}>
            <div className="navigation__container">
                <button
                    className="navigation__close-button link-decoration"
                    type="button"
                    onClick={closeNavigation}
                />
                <nav className="navigation__menu">
                    <Link to="/" className="navigation__link link-decoration">
                        Главная
                    </Link>
                    <Link to="/movies" className="navigation__link link-decoration">
                        Фильмы
                    </Link>
                    <Link to="/saved-movies" className="navigation__link link-decoration">
                        Сохранённые фильмы
                    </Link>
                </nav>
                <nav className="navigation__profile">
                    <HeaderProfileMenu />
                </nav>
            </div>
        </div>
    );
}

export default Navigation;