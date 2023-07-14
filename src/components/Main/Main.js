import React from 'react';
import './Main.css';

import Header from '../Header/Header';
import HeaderAuthorization from '../Header/HeaderAuthorization/HeaderAuthorization';
import Footer from '../Footer/Footer';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {
  return (
    <div>
      <Header color={"purple"} child={<HeaderAuthorization />} />
      <main className="content">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
