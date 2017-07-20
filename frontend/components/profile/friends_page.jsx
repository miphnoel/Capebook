import { connect } from 'react-redux';
import values from 'lodash/values';

import { createFriendRequest, updateFriendRequest, unfriend } from '../../actions/friendship_actions';

class FriendsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Friends Page</div>;
  }
}

const mapStateToProps = { users, session } => ({
  friends: values(users.friends),
  userId: users.user.id,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createFriendRequest: (receiverId) => dispatch(createFriendRequest(receiverId)),
  updateFriendRequest: (friendship) => dispatch(updateFriendRequest(friendship)),
  unfriend: (id) => dispatch(unfriend(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPage);
