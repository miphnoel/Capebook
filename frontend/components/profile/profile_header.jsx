import React from 'react';

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
              NAVLINKS
            </ul>
          </div>
        </div>
        <div className="edit-profile"></div>
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
