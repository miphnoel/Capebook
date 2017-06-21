import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    if (! this.props.currentUser) {
      return <Redirect to='/login' />
    }
    return (
      <nav>
        <h2>{this.props.currentUser.first_name}</h2>
        <button onClick={this.handleLogout}>Log out</button>
      </nav>
    )
  }
}

export default withRouter(NavBar);
