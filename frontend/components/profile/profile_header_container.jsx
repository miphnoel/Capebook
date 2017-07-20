import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchFriendship, createFriendRequest, unfriend } from '../../actions/friendship_actions';
import ProfileHeader from './profile_header';

const mapStateToProps = ({ users, session, modal, friendships }) => ({
  user: users.user,
  currentUser: session.currentUser,
  editVisible: modal.editProfile,
  approveDenyVisible: modal.approveDeny,
  friendship: friendships.friendship
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  requestFriendship: (receiverId) => dispatch(createFriendRequest(receiverId)),
  unfriend: (id) => dispatch(unfriend(id)),
  fetchFriendship: (senderId) => dispatch(fetchFriendship(senderId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
