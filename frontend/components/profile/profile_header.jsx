import React from 'react';
import { Link } from 'react-router-dom';

import EditProfileForm from './edit_profile_form';
import ApproveDenyModal from './approve_deny_modal';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { status: props.user.friendship.status }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { status, id } = this.props.user.friendship;
    if (status > 0 && id != this.props.friendship.id) {
      this.props.fetchFriendship(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { status, sender_id } = nextProps.friendship;
    if (status === this.props.friendship.status ||
        sender_id !== this.props.user.id) {
      return;
    } else if (status === "approved") {
      this.setState({ status: 3 });
    } else if (status === "denied") {
      if (this.props.user.id === sender_id) {
        this.setState({ status: 5 });
      } else {
        this.setState({ status: 4})
      }
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
            <i className="fa fa-user-times fa-lg" aria-hidden="true"></i>
            <span>Cancel Request</span>
          </button>
        )
        break;
      case 2:
        button = (
          <button
            className="response-button"
            onMouseOver={() => this.props.openModal('approveDeny')}
            onMouseLeave={() => this.props.closeModal('approveDeny')}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Respond to Friend Request</span>
            {approveDenyVisible ? <ApproveDenyModal /> : <div></div>}
          </button>
        )
        break;
      case 3:
        button = (
          <button className="unfriend-button" onClick={this.handleClick}>
            <i className="fa fa-user-times fa-lg" aria-hidden="true"></i>
            <span>Unfriend</span>
          </button>
        )
        break;
      case 4:
        button = <button disabled>You've been blocked!</button>
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
        <div className="grey-button">
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