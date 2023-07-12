import React from 'react';
import { Link } from 'react-router-dom';
import HeaderProfileMenu from './HeaderProfileMenu/HeaderProfileMenu';
import './HeaderNavigation.css';

function HeaderNavigation() {
    return (
        <div className="header__navigation">
            <nav className="header__navigation-menu">
                <Link className="header__navigation-button link-decoration" to="/movies">
                    Фильмы
                </Link>
                <Link className="header__navigation-button link-decoration" to="/saved-movies">
                    Сохранённые фильмы
                </Link>
            </nav>
            <nav className="header__profile-menu">
                <HeaderProfileMenu />
            </nav>
        </div>
    );
}

export default HeaderNavigation;
