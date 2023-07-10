import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {
  return (
    <main className="content">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      {/* <section className="main">
        <h1 className="main__title">main</h1>
        <p className="main__subtitle">тест</p>
        <Link className='main__link' to='/'>На главную</Link>
      </section> */}
    </main>
  );
}

export default Main;
