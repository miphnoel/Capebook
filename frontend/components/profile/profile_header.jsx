import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FriendshipButton from './friendship_button';
import EditPictureForm from './edit_picture_form';
import { openModal } from '../../actions/modal_actions';

const ProfileHeader = ({ user, currentUser, editPicVisible, openModal }) => {

  function handleClick() {
    if (user.id === currentUser.id) { openModal(); }
  }

  return (
    <div className="profile-header">
      <div className="cover-photo-box">
        <img
          src={user.cover_pic}
          onClick={() => handleClick()}  />
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
      <FriendshipButton userId={user.id} />
      <div className="profile-picture-box">
        <img
          src={user.prof_pic}
          onClick={() => handleClick()} />
      </div>
      <div className="username">
        <h1>{user.first_name + ' ' + user.last_name}</h1>
      </div>
      {editPicVisible ? <EditPictureForm /> : <div></div>}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  currentUser: state.session.currentUser,
  editPicVisible: state.modal.editPic,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal('editPic')),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
