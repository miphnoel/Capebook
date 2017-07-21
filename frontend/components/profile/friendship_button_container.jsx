import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchFriendship, createFriendRequest, unfriend } from '../../actions/friendship_actions';
import FriendshipButton from './friendship_button';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.userId,
  currentUser: state.session.currentUser,
  editVisible: state.modal.editProfile,
  approveDenyVisible: state.modal.approveDeny,
  friendship: state.friendships.friendship
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
)(FriendshipButton);
