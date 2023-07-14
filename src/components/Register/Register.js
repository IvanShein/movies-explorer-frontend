import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from "../../images/logo.svg";

function Register() {
  return (
    <div className="register">
      <header className="register__header link-decoration">
        <Link to="/" className="register__header-link">
          <img className="register__header-logo" src={logo} alt="Изображение логотипа сайта - Буква С в черном круге" />
        </Link>
        <h1 className="register__header-text">Добро пожаловать!</h1>
      </header>
      <main className="register__body">
        <form className="register__form">
          <span className="register__placeholder">Имя</span>
          <input
            type="text"
            className="register__input register__input_type_name"
            required
          />
          <span className="register__error"></span>
          <span className="register__placeholder">E-mail</span>
          <input
            type="email"
            className="register__input register__input_type_email"
            required
          />
          <span className="register__error"></span>
          <span className="register__placeholder">Пароль</span>
          <input
            type="password"
            className="register__input register__input_type_password"
            required
          />
          <span className="register__error"></span>
          <div className="register__footer">
            <button type="submit" className="register__footer-button">
              Зарегистрироваться
            </button>
            <p className="register__footer-text">
              Уже зарегистрированы? <Link to="/signin" className="register__footer-link link-decoration">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;

