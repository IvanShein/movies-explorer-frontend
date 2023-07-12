import React from 'react';
import './MoviesCardList.css';

function MoviesCardList() {
    return (
        <section className="about-project" id="aboutProject">
              <div className="about-project__columns">
                <div className="about-project__column">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__column">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
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

export default MoviesCardList;