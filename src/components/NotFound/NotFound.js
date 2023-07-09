import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function Login() {
  return (
    <section className="notFound">
      <h1 className="notFound__title">404 - NotFound</h1>
      <p className="notFound__subtitle">тест</p>
      <Link className='notFound__link' to='/'>На главную</Link>
    </section>
  );
}

export default Login;