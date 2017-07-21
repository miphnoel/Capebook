import React from 'react';
import { Link } from 'react-router-dom';

import FriendshipButtonContainer from './friendship_button_container';

const ProfileHeader = ({ user }) => {
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
              <Link to={`/profile/${user.id}/friends`}>
                Friends
              </Link>
            </li>
            <li>
              <Link to={`/profile/${user.id}/photos`}>
                Photos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <FriendshipButtonContainer userId={user.id} />
      <div className="profile-picture-box">
        <img src={user.prof_pic} />
      </div>
      <div className="username">
        <h1>{user.first_name + ' ' + user.last_name}</h1>
      </div>
    </div>
  );
}


export default ProfileHeader;
