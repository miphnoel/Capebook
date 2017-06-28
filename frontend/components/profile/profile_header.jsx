import React from 'react';
import { Link } from 'react-router-dom';

import EditProfileForm from './edit_profile_form';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { status: props.user.friendship.status }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const id = this.props.user.friendship.id;
    if (id > 0 && id != this.props.friendship.id) {
      this.props.fetchFriendship(id);
    }
  }

  handleClick(e) {
    e.preventDefault(e)
    const { user } = this.props;
    const friendshipId = user.friendship.id
    switch (this.state.status) {
      case -1:
        this.props.openModal('editProfile');
        break;
      case 0:
        this.props.requestFriendship(user.id);
        this.setState({ status: 1 });
        break;
      case 2:
        if (e.currentTarget.id === "approve-button") {
          this.props.respondToRequest(friendshipId, {status: 1});
          this.setState({ status: 3 });
        } else {
          respondToRequest(friendshipId, {status: 2})
          this.setState({ status: 5 });
        }
        break;
      case 1:
      case 3:
      case 5:
        this.props.unfriend(this.props.friendship.id);
        this.setState({ status: 0 });
    }

  }

  render() {
    const { user, editVisible, approveDenyVisible } = this.props;
    let button;
    switch (this.state.status) {
      case -1:
        button = (
          <button className="edit-profile" onClick={this.handleClick}>
            <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
            <span>Edit Profile</span>
          </button>
        )
        break;
      case 0:
        button = (
          <button className="add-friend" onClick={this.handleClick}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Add Friend</span>
          </button>
        )
        break;
      case 1:
        button = (
          <button className="cancel-request" onClick={this.handleClick}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Cancel Request</span>
          </button>
        )
        break;
      case 2:
        button = (
          <button
            className="response-button"
            onMouseOver={() => this.props.openModal('approveDeny')}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Respond to Friend Request</span>
            // {approveDenyVisible ? approveDeny : <div></div>}
          </button>
          // <div className="response-buttons">
          //   <button id="approve-button" onClick={this.handleClick}>
          //     <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
          //     <span>Approve Request</span>
          //   </button>
          //   <button id="deny-button" onClick={this.handleClick}>
          //     <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
          //     <span>Deny Request</span>
          //   </button>
          // </div>
        )
        break;
      case 3:
        button = (
          <button className="unfriend-button" onClick={this.handleClick}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Unfriend</span>
          </button>
        )
        break;
      case 4:
        <button hidden>Blocked!</button>
        break;
      case 5:
        button = (
          <button className="unblock-button" onClick={this.handleClick}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Unblock</span>
          </button>
        )
        break;
    }
    return (
      <div className="profile-header">
        <div className="cover-photo-box">
          <img src={user.cover_pic} />
        </div>
        <div className="profile-nav-bar">
          <div className="profile-nav-bar">
            <ul className="profile-nav-links">
              <li>
                <Link to={`/profile/${user.id}`}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link to={`/profile/${user.id}`}>
                  Friends
                </Link>
              </li>
              <li>
                <Link to={`/profile/${user.id}`}>
                  Photos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-header-button">
          {button}
        </div>
        <div className="profile-picture-box">
          <img src={user.prof_pic} />
        </div>
        <div className="username">
          <h1>{user.first_name + ' ' + user.last_name}</h1>
        </div>
        {editVisible ? <EditProfileForm /> : <div></div>}
      </div>
    );
  }
}


export default ProfileHeader;
