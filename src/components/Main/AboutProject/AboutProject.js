import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';

function AboutProject() {
    return (
        <section className="about-project">
            <Title text={'О проекте'} />

            <div className="about-project__columns">
                <div className="about-project__column">
                    <h3 className="about-project__sublitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__column">
                    <h3 className="about-project__sublitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about-project__time">
                <h3 className="about-project__time-title about-project__time-title_backend">1 неделя</h3>
                <h3 className="about-project__time-title">4 недели</h3>
                <p className="about-project__time-text">Back-end</p>
                <p className="about-project__time-text">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;
