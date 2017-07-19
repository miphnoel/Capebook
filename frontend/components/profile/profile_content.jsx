import React from 'react';

import ProfileHeaderContainer from './profile_header_container';
import InfoColumn from './info_column';
import Feed from '../feed/feed';

const ProfileContent = ({ user, currentUser }) => {
  return (
    <div className="profile-content">
      <ProfileHeaderContainer />
      <div className="profile-bottom">
        <InfoColumn />
        <Feed />
      </div>
    </div>
  );
}

export default ProfileContent;
