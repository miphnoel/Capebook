import React from 'react';
import { Link } from 'react-router-dom';

import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import ValueProposition from './value_proposition';
import Footer from './footer';
import { login } from '../../actions/session_actions';

const Login = (props) => (
  <div className="login-page">
    <nav className="nav-bar">
      <div className="nav-content">
        <Link to='/'><h1>capebook</h1></Link>
        <LoginFormContainer />
      </div>
    </nav>
    <section className="main-content">
      <div>
        <ValueProposition />
      </div>
      <div>
        <SignupFormContainer />
      </div>
    </section>
    <Footer />
  </div>
);

export default Login;
