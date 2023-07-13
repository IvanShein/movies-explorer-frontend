import React from 'react';
import Header from '../Header/Header';
import HeaderNavigation from '../Header/HeaderNavigation/HeaderNavigation';
import Footer from '../Footer/Footer';
import './Profile.css';

function Profile() {
  return (
    <div className="body">
      <Header color={"white"} child={<HeaderNavigation />} />
      <main className="profile">
        <div className="profile__content">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <ul className="profile__list">
            <li className="profile__list-element">
              <span className="profile__element">Имя</span>
              <input
                className="profile__input"
                value={'Виталий'}
                type="name"
              />
            </li>
            <li className="profile__list-element">
              <span className="profile__element">E-mail</span>
              <input
                className="profile__input"
                value={'pochta@yandex.ru'}
                type="email"
              />
            </li>
          </ul>
          <button type="submit" className="profile__button link-decoration">Редактировать</button>
          <button type="submit" className="profile__button link-decoration">Выйти из аккаунта</button>
        </div>
      </main>
    </div>


  );
}

export default Profile;



