import React from 'react';
import { useState, useEffect, Redirect, useHistory } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from "../../images/logo.svg";

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(password, email);
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

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
            className="register__input register__input_type_email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <span className="login__error"></span>
          <span className="login__placeholder">Пароль</span>
          <input
            type="password"
            className="register__input register__input_type_password"
            name="password"
            required
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
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
