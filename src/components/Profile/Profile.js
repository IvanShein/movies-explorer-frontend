import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Profile</h1>
      <p className="profile__subtitle">тест</p>
      <Link className='profile__link' to='/'>На главную</Link>
    </section>
  );
}

export default Profile;
