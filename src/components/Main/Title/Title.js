import React from 'react';
import './Title.css';

function Title({ text }) {
    return (
        <div className="section-title">
            <h2 className="section-title__text">{text}</h2>
        </div>
    );
}

export default Title;
