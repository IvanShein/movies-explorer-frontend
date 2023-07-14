import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderAuthorization.css';

function Header() {
    return (
        <nav className="header__autorisation-menu">
            <Link className="header__autorisation-button link-decoration" to="/signup">
                Регистрация
            </Link>
            <Link className="header__autorisation-button header__autorisation-button_black link-decoration" to="/signin">
                Войти
            </Link>
        </nav>
    );
}

export default Header;