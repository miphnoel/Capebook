import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';

import ProfileHeader from './profile_header';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
  userId: ownProps.userId,
  user: state.user
})};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
