import React from 'react';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-header">
        <div className="cover-photo-box">
          <div className="edit-profile"></div>
        </div>
        <div className="profile-nav-bar">
          <div className="profile-nav-links">
            Links
          </div>
        </div>
        <div className="profile-picture">

        </div>
      </div>
    );
  }
}

export default ProfileHeader;
