import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { receiveUser } from '../../actions/user_actions';
import NavBar from './nav_bar';
import FriendRequests from './friend_requests';

const mapStateToProps = ({ session, modal }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  setNullUser: () => dispatch(receiveUser(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
