import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfileHeader from './profile_header';
import Timeline from './timeline';
import FriendsPage from './friends_page';
import PhotosPage from './photos_page';

const ProfileContent = ({ user }) => {
  return (
    <div className="profile-content">
      <ProfileHeader user={user} />
      <Switch>
        <Route exact path="/profile/:userId" component={Timeline} />
        <Route path="/profile/:userId/friends" component={FriendsPage} />
        <Route path="/profile/:userId/photos" component={PhotosPage} />
      </Switch>
    </div>
  );
}

export default ProfileContent;
