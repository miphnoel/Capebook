import React from 'react';

import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const Login = (props) => (
  <div className="login-page">
    <nav className="login-nav">
      <div className="header-content">
        <h1>capebook</h1>
        <LoginFormContainer />
      </div>
    </nav>
    <section className="content">
      <div>
        <h1 className="value-prop">Value Proposition</h1>
      </div>
      <div>
        <SignupFormContainer />
      </div>
    </section>
  </div>
);

export default Login;
