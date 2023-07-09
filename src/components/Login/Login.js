import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section className="login">
      <h1 className="login__title">Login</h1>
      <p className="login__subtitle">тест</p>
      <Link className='login__link' to='/'>На главную</Link>
    </section>
  );
}

export default Login;
