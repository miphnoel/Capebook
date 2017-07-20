import { connect } from 'react-redux';
import values from 'lodash/values';

import { fetchFriends } from '../../actions/user_actions';
import Friends from './friends_box';

const mapStateToProps = ({ users }) => ({
  friends: values(users.friends),
  userId: users.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFriends: (id) => dispatch(fetchFriends(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
