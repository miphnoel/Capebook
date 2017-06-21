import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  loginBatman() {
    this.props.login(
      {email: 'brucewayne@wayne.gotham', password: 'alfred'}
    );
  }

  render() {
    return (
      <footer>
        <a href='https://github.com/miphnoel'>
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
        </a>
        <button onClick={() => this.loginBatman()}>
          Log in as BATMAN
        </button>
      </footer>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Footer);
