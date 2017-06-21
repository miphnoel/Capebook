import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: 'First name',
      last_name: 'Last name',
      email: 'Email',
      password: 'New Password',
      dob: '03/02/1991',
      gender: 'Male'
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
    this.props.signup(user)
      .then(() => this.props.history.push('/'));
  }

  render () {
    return (
      <div>
        <h1>Create a New Account</h1>
        <h2>It's free and always will be.</h2>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <section className="input-names">  
            <input
              name="first_name"
              type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}>
            </input>
            <input
              name="last_name"
              type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}>
            </input>
          </section>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.update('email')}>
          </input>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.update('password')}>
          </input>
          <button type="Submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
