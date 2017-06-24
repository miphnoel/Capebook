import React from 'react';

import ProfileHeader from './profile_header';
import InfoColumn from './info_column';
import Timeline from './timeline';

const ProfileContent = ({ user }) => {
  return (
    <div className="profile-content">
      <ProfileHeader user={user} />
      <div className="profile-bottom">
        <InfoColumn user={user} />
        <Timeline userId={user.id} />
      </div>
    </div>
  );
}

export default ProfileContent;
