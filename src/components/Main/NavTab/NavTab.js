import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <section className="nav-tab">
            <nav>
                <ul className="nav-tab__menu">
                    <li className="nav-tab__link">
                        <a className="nav-tab__link-text link-decoration" href="#aboutProject">О проекте</a>
                    </li>
                    <li className="nav-tab__link">
                        <a className="nav-tab__link-text link-decoration" href="#techs">Технологии</a>
                    </li>
                    <li className="nav-tab__link">
                        <a className="nav-tab__link-text link-decoration" href="#aboutMe">Студент</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default NavTab;
