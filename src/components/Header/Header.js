import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <Link className="header__link link-decoration" to="/">
                <img className="header__logo" src={logo} alt="Изображение логотипа сайта - Буква С в черном круге" />
            </Link>
            <nav className="header__autorisation-menu">
                <Link className="header__autorisation-button link-decoration" to="/signup">
                    Регистрация
                </Link>
                <Link className="header__autorisation-button header__autorisation-button_black link-decoration" to="/signin">
                    Войти
                </Link>
            </nav>
        </header>
    );
}

export default Header;