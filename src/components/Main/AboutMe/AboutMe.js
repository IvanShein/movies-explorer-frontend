import React from 'react';
import MyFoto from '../../../images/myFoto.png';
import Title from '../Title/Title';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            {<Title text={'Студент'} />}

            <div className='about-me__body'>
                <div className='about-me__description'>
                    <h3 className='about-me__title'>Виталий</h3>
                    <h4 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h4>
                    <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена и дочь. Я люблюслушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__github-link link-decoration" href="https://github.com" target="_blank">Github</a>
                </div>
                <img className='about-me__foto' alt='Фото студента' src={MyFoto} />
            </div>
        </section>
    );
}

export default AboutMe;
