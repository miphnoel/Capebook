import React from 'react';

import merge from 'lodash/merge';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      dob: '03/02/1991',
      gender: 'Male',
      alignment: "hero",
      errors: {}
    }

    this.requiredFields = [
      'first_name', 'last_name', 'email',
      'password', 'dob', 'gender'
    ];
    this.validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.clearError = this.clearError.bind(this);
    this.chooseSide = this.chooseSide.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  validate(field) {
    return e => {
      switch (field) {
        case 'first_name':
        case 'last_name':
          if (!this.state[field]) {
            this.setState({'errors': merge(
              this.state.errors, {[field]: "Please give your (real) name."}
            )});
          } else {
            this.clearError(field)();
          }
        break;
      break;
        case 'email':
          if (!this.state.email.match(this.validEmail)) {
          this.setState({'errors': merge(
            this.state.errors, {'email': "Please enter a valid email address."}
          )});
        } else {
          this.clearError(field)();
        }
        break;
        case 'password':
          if (this.state.password.length < 6) {
            this.setState({'errors': merge(
              this.state.errors, {'password': "Password must be at least 6 characters"}
            )});
          } else {
            this.clearError(field)();
          }
        break;
      }
    }
  }

  clearError(field) {
    return e => {
      this.setState({'errors': merge(this.state.errors, {[field]: ''})});
    }
  }

  chooseSide(side) {
    return e => {
      this.setState({'alignment': side});
    }
  }

  isValid() {
    return this.requiredFields.every(field => (
      this.state[field] && !this.state.errors[field]
    ));
  }

  findErrors() {
    this.requiredFields.forEach(field => this.validate(field)());
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    if (this.isValid()) {
      const user = {};
      this.requiredFields.forEach(field => user[field] = this.state[field]);
      this.props.signup(user)
    } else {
      this.findErrors();
      this.setState({'errors': merge(
        this.state.errors, {'submit': "Not so fast! Full debrief required."})})
    }
  }

  render () {
    const placeholder = this.props.placeholders;
    return (
      <div>
        <h1>Suit Up</h1>
        <h2>And embrace the battle of good versus evil.</h2>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="name-errors">
            <div className="errors">{this.state.errors.first_name}</div>
            <div className="errors">{this.state.errors.last_name}</div>
          </div>
          <section className="input-names">
            <input className={this.state.errors.first_name ? 'invalid' : ''}
              name="first_name"
              type="text"
              value={this.state.first_name}
              placeholder={placeholder.first_name}
              onChange={this.update('first_name')}
              onFocus={this.clearError('first_name')}
              onBlur={this.validate('first_name')}>
            </input>
            <input className={this.state.errors.last_name ? 'invalid' : ''}
              name="last_name"
              type="text"
              value={this.state.last_name}
              placeholder={placeholder.last_name}
              onChange={this.update('last_name')}
              onFocus={this.clearError('last_name')}
              onBlur={this.validate('last_name')}>
            </input>
          </section>
          <div className="errors">{this.state.errors.email}</div>
          <input className={this.state.errors.email ? 'invalid' : ''}
            name="email"
            type="text"
            value={this.state.email}
            placeholder={placeholder.email}
            onChange={this.update('email')}
            onFocus={this.clearError('email')}
            onBlur={this.validate('email')}>
          </input>
          <div className="errors">{this.state.errors.password}</div>
          <input className={this.state.errors.password ? 'invalid' : ''}
            name="password"
            type="password"
            value={this.state.password}
            placeholder={placeholder.password}
            onChange={this.update('password')}
            onFocus={this.clearError('password')}
            onBlur={this.validate('password')}>
          </input>
          <div className="alignment">
            <span className="radio">
              <input
                type="radio"
                value="hero"
                checked={this.state.alignment === "hero"}
                onChange={this.chooseSide("hero")}
                />
              <label>
                Hero
              </label>
            </span>
            <span className="radio">
              <input
                type="radio"
                value="villain"
                checked={this.state.alignment === "villain"}
                onChange={this.chooseSide("villain")}
                />
              <label>
                Villain
              </label>
            </span>
          </div>
          <br />

          <button type="Submit">Join the Fray</button>
          <div>
            <div className="errors">{this.state.errors.submit}</div>
            <div className="errors">{this.props.errors.join(', ')}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
