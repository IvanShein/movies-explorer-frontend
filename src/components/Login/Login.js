import React from 'react';
import { Link } from 'react-router-dom';

import useFormWithValidation from '../../utils/FormValidation';
import REGEXP_EMAIL from '../../utils/FormValidation';
import './Login.css';
import logo from '../../images/logo.svg';

function Login(props) {
  const { values, errors, handleChange, isFormValid } = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="login">
      <header className="login__header link-decoration">
        <Link to="/" className="login__header-link">
          <img className="login__header-logo" src={logo} alt="Изображение логотипа сайта - Буква С в черном круге" />
        </Link>
        <h1 className="login__header-text">Рады видеть!</h1>
      </header>
      <main className="login__body">
        <form 
        className={"login__form"}
        onSubmit={handleSubmit}
        >
          <span className="login__placeholder">E-mail</span>
          <input
            type="email"
            className="register__input register__input_type_email"
            name="email"
            required
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            // pattern={REGEXP_EMAIL}
          />
          <span className="login__error">{errors.email}</span>
          
          <span className="login__placeholder">Пароль</span>
          <input
            type="password"
            className="register__input register__input_type_password"
            name="password"
            required
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
          />
          <span className="login__error">{errors.password}</span>

          <div className="login__footer">
            <button 
            type="submit" 
            className={`login__footer-button ${!isFormValid ? "form-inactive" : ""}`}
            disabled={!isFormValid ? true : false}
            >
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
