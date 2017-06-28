import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import { fetchFriendship, createFriendRequest, updateFriendRequest, unfriend } from '../../actions/friendship_actions';
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
  requestFriendship: (receiverId) => dispatch(createFriendRequest(receiverId)),
  respondToRequest: (senderId, friendship) => dispatch(updateFriendRequest(senderId, friendship)),
  unfriend: (id) => dispatch(unfriend(id)),
  fetchFriendship: (friendshipId) => dispatch(fetchFriendship(friendshipId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
