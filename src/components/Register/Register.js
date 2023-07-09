import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className="register">
      <h1 className="register__title">Register</h1>
      <p className="register__subtitle">тест</p>
      <Link className='register__link' to='/'>На главную</Link>
    </section>
  );
}

export default Register;
