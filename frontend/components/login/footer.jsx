import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  loginBatman() {

    this.props.login(
      {email: 'brucewayne@gotham.bat', password: 'alfred'}
    );
  }

  loginJoker() {
    this.props.login(
      {email: 'whysoserious@prince.pain', password: 'harley'}
    );
  }

  render() {
    return (
      <footer>
        <div className="my-links">
          <a
            href='https://github.com/miphnoel'
            target='_blank'>
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href='https://www.linkedin.com/in/michael-noel'
            target='_blank'>
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href='https://www.angel.co/michael-noel-3'
            target='_blank'>
            <i className="fa fa-angellist fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href='http://www.michaelnoel.us'
            target='_blank'>
            <i className="fa fa-address-card fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="guest-logs">
          <button onClick={() => this.loginBatman()}>
            Log in as BATMAN
          </button>
          <button onClick={() => this.loginJoker()}>
            Log in as THE JOKER
          </button>
      </div>
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
