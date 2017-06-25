import { connect } from 'react-redux';
import values from 'lodash/values';

import { fetchFriends } from '../../actions/user_actions';
import Friends from './friends';

const mapStateToProps = (state) => ({
  friends: values(state.users.users)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFriends: () => dispatch(fetchFriends())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
