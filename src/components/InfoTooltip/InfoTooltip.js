import React from 'react';
import logo from "../../images/logo.svg";
import './InfoTooltip.css';

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <div className="popup__status">
          <img className="popup__logo-registration-status"
            src={logo}
          />
          <h2 className="popup__subtitle-status">
            {props.message}
          </h2>
          <button
            onClick={props.onClose}
            type="button"
            aria-label="Кнопка закрыть окно"
            className="popup__close-button">
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;