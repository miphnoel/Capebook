import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  render () {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="input-box">
          <label htmlFor="email">Email </label>
          <input
            id="email"
            type="email"
            value={this.state.email}
            tabIndex="1"
            onChange={this.update('email')}>
          </input>
        </div>
        <div className="input-box">
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            value={this.state.password}
            tabIndex="2"
            onChange={this.update('password')}>
          </input>
        </div>
        <div>
          <div className="errors above-login">{this.props.errors}</div>
          <button type="Submit">Log in</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  errors: form.login.errors
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
