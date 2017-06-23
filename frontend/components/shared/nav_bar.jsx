import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import SearchContainer from './search_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props
    if (!currentUser) {
      return <Redirect to='/login' />
    }
    return (
      <nav className="nav-bar">
        <div className="nav-content">
          <div className="left-nav">
            <Link to='/'><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></Link>
            <SearchContainer />
          </div>
          <div className="right-nav">
            <div className="nav-links">
              <div className="profile-link">
                <Link to={`/api/users/${currentUser.id}`}>
                  <i className="fa fa-user-o fa-lg" aria-hidden="true"></i>
                  <span>{currentUser.first_name}</span>
                </Link>
              </div>
              <div className="home-link">
                <Link to='/'>Home</Link>
              </div>
            </div>
            <div className="drop-downs">
              <i className="fa fa-users fa-lg" aria-hidden="true"></i>
              <i className="fa fa-comments fa-lgx" aria-hidden="true"></i>
              <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
            </div>
            <div className="log-out">
              <button onClick={() => logout()}>Log out</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar);
