import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__body">
                <p className="footer__year">&copy; 2023</p>
                <nav>
                    <ul className="footer__menu">
                        <li className="footer__element">
                            <a className="footer__link link-decoration" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__element">
                            <a className="footer__link link-decoration" href="https://github.com/" target="_blank">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
