import React from 'react';
import { Link } from 'react-router-dom';

import EditProfileForm from './edit_profile_form';

const ProfileHeader = ({ user, currentUser, editVisible, openModal }) => {
  let button;
  if (user.id === currentUser.id) {
    button = (
      <button className="edit-profile" onClick={() => openModal('editProfile')}>
        <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
        <span>Edit Profile</span>
      </button>
    )
  } else {
    button = (
      <button className="friend-status">
        <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
        <span>Add Friend</span>
      </button>
    )
  }
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
      <div className="profile-header-button">
        {button}
      </div>
      <div className="profile-picture-box">
        <img src={user.prof_pic} />
      </div>
      <div className="username">
        <h1>{user.first_name + ' ' + user.last_name}</h1>
      </div>
      {editVisible ? <EditProfileForm /> : <div></div>}
    </div>
  );
}

export default ProfileHeader;
