import React from 'react';
import { Link } from 'react-router-dom';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const user = this.props.user;

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
        <div className="edit-profile">
          <button>
            <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
            <span>Edit Profile</span>
          </button>
        </div>
        <div className="profile-picture-box">
          <img src={user.prof_pic} />
        </div>
        <div className="username">
          <h1>{user.first_name + ' ' + user.last_name}</h1>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
