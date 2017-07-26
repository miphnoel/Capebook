import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './login_form';
import SignupForm from './signup_form';
import ValueProposition from './value_proposition';
import Footer from './footer';
import { login } from '../../actions/session_actions';

const Login = (props) => (
  <div className="login-page">
    <nav className="nav-bar">
      <div className="nav-content">
        <Link to='/'><h1>capebook</h1></Link>
        <LoginForm />
      </div>
    </nav>
    <section className="main-content">
      <div>
        <ValueProposition />
      </div>
      <div>
        <SignupForm />
      </div>
    </section>
    <Footer />
  </div>
);

export default Login;
