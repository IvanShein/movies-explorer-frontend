import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../images/logo.svg";

function Header({ color, child }) {
    return (
        <header className={`header header_${color}`}>
            <Link className="header__link link-decoration" to="/">
                <img className="header__logo" src={logo} alt="Изображение логотипа сайта - Буква С в черном круге" />
            </Link>
            {child}
        </header>
    );
}

export default Header;