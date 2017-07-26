import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import SearchBar from './search_bar';
import FriendRequests from './friend_requests';
import Messages from './messages';
import Notifications from './notifications';
import { logout } from '../../actions/session_actions';
import { receiveUser } from '../../actions/user_actions';

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
            <Link to='/'>
              <i className="fa fa-facebook-official fa-2x square-logo" aria-hidden="true"></i>
            </Link>
            <SearchBar />
          </div>
          <div className="right-nav">
            <div className="nav-links">
              <div className="profile-link">
                <Link to={`/profile/${currentUser.id}`} id="profile-a" className="nav-a">
                  <img src={currentUser.prof_pic} />
                  <span>{currentUser.first_name}</span>
                </Link>
              </div>
              <div className="home-link">
                <Link
                  to='/'
                  className="nav-a"
                  onClick={() => this.props.setNullUser()}>
                  Home
                </Link>
              </div>
            </div>
            <div className="drop-downs">
              <FriendRequests />
              <Messages />
              <Notifications />
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

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  setNullUser: () => dispatch(receiveUser(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
