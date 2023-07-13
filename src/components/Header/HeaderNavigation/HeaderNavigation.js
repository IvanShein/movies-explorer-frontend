import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderProfileMenu from './HeaderProfileMenu/HeaderProfileMenu';
import Navigation from '../../Navigation/Navigation';
import './HeaderNavigation.css';

function HeaderNavigation() {
    const [isNavigationOpen, setNavigationOpen] = useState(false);

    function handleHamburgerClick() {
        setNavigationOpen(true);
    }

    function closeNavigation() {
        setNavigationOpen(false);
    }

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
            <Navigation
                isNavigationOpen={isNavigationOpen}
                closeNavigation={closeNavigation}
            />
            <button
                className="header__navigation-hamburger link-decoration"
                onClick={handleHamburgerClick}
            />
        </div>
    );
}

export default HeaderNavigation;
