import React from 'react';
import { Link } from 'react-router-dom';
import iconProfile from '../../../../images/icon-profile.svg';
import './HeaderProfileMenu.css';

function HeaderProfileMenu() {
    return (
        <nav className="header__profile-menu">
            <Link className="header__profile-button link-decoration" to="/profile">
                Аккаунт
            </Link>
            <Link className="header__profile-icon-button link-decoration" to="/profile">
              <img src={iconProfile} alt="Иконка - ссылка на данные профиля пользователя" />
            </Link>
        </nav>
    );
}

export default HeaderProfileMenu;