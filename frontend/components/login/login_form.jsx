import React from 'react';

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
          <div className="errors">{this.props.errors}</div>
          <button type="Submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
