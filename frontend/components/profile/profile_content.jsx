import React from 'react';

import ProfileHeaderContainer from './profile_header_container';
import InfoColumn from './info_column';
import Timeline from './timeline';

const ProfileContent = ({ user, currentUser }) => {
  return (
    <div className="profile-content">
      <ProfileHeaderContainer />
      <div className="profile-bottom">
        <InfoColumn />
        <Timeline userId={user.id} />
      </div>
    </div>
  );
}

export default ProfileContent;
