import React from 'react';
import Arrow from '../../../images/arrow.svg';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className='portfolio__title'>Портфолио</h2>

            <ul className='portfolio__links'>
                <li className='portfolio__element link-decoration'>
                    <a className="portfolio__link" href="https://github.com" target="_blank">
                        <p className='portfolio__link-text'>Статичный сайт</p>
                        <img className="portfolio__link-image" src={Arrow} alt="Изображение стрелки в качестве ссылки" />
                    </a>
                </li >
                <li className='portfolio__element link-decoration'>
                    <a className="portfolio__link" href="https://github.com" target="_blank">
                        <p className='portfolio__link-text'>Адаптивный сайт</p>
                        <img className="portfolio__link-image" src={Arrow} alt="Изображение стрелки в качестве ссылки" />
                    </a>
                </li >
                <li className='portfolio__element link-decoration'>
                    <a className="portfolio__link" href="https://github.com" target="_blank">
                        <p className='portfolio__link-text'>Одностраничное приложение</p>
                        <img className="portfolio__link-image" src={Arrow} alt="Изображение стрелки в качестве ссылки" />
                    </a>
                </li >
            </ul >
        </section >
    );
}

export default Portfolio;
