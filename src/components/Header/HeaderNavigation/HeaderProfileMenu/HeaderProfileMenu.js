import React from 'react';
import { Link } from 'react-router-dom';
import iconProfile from '../../../../images/icon-profile.svg';
import './HeaderProfileMenu.css';

function HeaderProfileMenu() {
    return (
        <>
            <Link className="header__profile-button link-decoration" to="/profile">
                Аккаунт
            </Link>
            <Link className="header__profile-icon-button link-decoration" to="/profile">
              <img className="header__profile-icon" src={iconProfile} alt="Иконка - ссылка на данные профиля пользователя" />
            </Link>
        </>
    );
}

export default HeaderProfileMenu;