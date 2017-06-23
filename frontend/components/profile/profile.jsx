import React from 'react';

import NavBarContainer from '../shared/nav_bar_container';
import ProfileHeaderContainer from './profile_header_container';

const Profile = (props) => {
  return (
    <div className='profile-page'>
      <NavBarContainer />
      <div className="main-content">
        <h1>Profile</h1>
        <ProfileHeaderContainer />

      </div>
    </div>
  );
}

export default Profile;
