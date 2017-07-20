import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfileHeaderContainer from './profile_header_container';
import Timeline from './timeline';
import FriendsPage from './friends_page';
import PhotosPage from './photos_page';



const ProfileContent = () => {
  return (
    <div className="profile-content">
      <ProfileHeaderContainer />
      <Switch>
        <Route exact path="/profile/:userId" component={Timeline} />
        <Route path="/profile/:userId/friends" component={FriendsPage} />
        <Route path="/profile/:userId/photos" component={PhotosPage} />
      </Switch>
    </div>
  );
}

export default ProfileContent;
