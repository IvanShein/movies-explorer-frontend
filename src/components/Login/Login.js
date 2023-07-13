import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from "../../images/logo.svg";

function Login() {
  return (
    <div className="login">
      <header className="login__header link-decoration">
        <Link to="/" className="login__header-link">
          <img className="login__header-logo" src={logo} alt="Изображение логотипа сайта - Буква С в черном круге" />
        </Link>
        <h1 className="login__header-text">Рады видеть!</h1>
      </header>
      <main className="login__body">
        <form className="login__form">
          <span className="login__placeholder">E-mail</span>
          <input
            type="email"
            className="login__input login__input_type_email"
            required
          />
          <span className="login__error"></span>
          <span className="login__placeholder">Пароль</span>
          <input
            type="password"
            className="login__input login__input_type_password"
            required
          />
          <span className="login__error"></span>
          <div className="login__footer">
            <button type="submit" className="login__footer-button">
              Войти
            </button>
            <p className="login__footer-text">
              Ещё не зарегистрированы? <Link to="/signup" className="login__footer-link link-decoration">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
