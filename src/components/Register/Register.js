import React from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../utils/FormValidation';
import './Register.css';
import logo from "../../images/logo.svg";

function Register(props) {
  const { values, errors, handleChange, isFormValid } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    props.handleRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="register">
      <header className="register__header link-decoration">
        <Link to="/" className="register__header-link">
          <img className="register__header-logo" src={logo} alt="Изображение логотипа сайта - Буква С в черном круге" />
        </Link>
        <h1 className="register__header-text">Добро пожаловать!</h1>
      </header>
      <main className="register__body">
        <form 
        disabled={!isFormValid ? true : false}
        className={`register__form ${!isFormValid ? "form-inactive" : ""}`}
        onSubmit={handleSubmit}
        >
          <span className="register__placeholder">Имя</span>
          <input
            type="text"
            className="register__input register__input_type_name"
            name="name"
            required
            placeholder="Имя"
            value={values.name}
            onChange={handleChange}
          />
          <span className="register__error">{errors.name}</span>
          
          <span className="register__placeholder">E-mail</span>
          <input
            type="email"
            className="register__input register__input_type_email"
            name="email"
            required
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          <span className="register__error">{errors.email}</span>
          
          <span className="register__placeholder">Пароль</span>
          <input
            type="password"
            className="register__input register__input_type_password"
            name="password"
            required
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
          />
          <span className="register__error">{errors.password}</span>
          
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

