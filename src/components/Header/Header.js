import React from 'react';
import { Link } from 'react-router-dom';
import HeaderAuthorization from './HeaderAuthorization/HeaderAuthorization';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import './Header.css';
import logo from "../../images/logo.svg";

function Header({ color, loggedIn }) {
    return (
        <header className={`header header_${color}`}>
            <Link className="header__link link-decoration" to="/">
                <img className="header__logo" src={logo} alt="Изображение логотипа сайта - Буква С в черном круге" />
            </Link>
            {loggedIn 
            ? <HeaderNavigation />
            : <HeaderAuthorization />
            }
        </header>
    );
}

export default Header;
