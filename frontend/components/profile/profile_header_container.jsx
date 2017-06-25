import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import ProfileHeader from './profile_header';

const mapStateToProps = ({ users, session, modal }) => ({
  user: users.showUser,
  currentUser: session.currentUser,
  editVisible: modal.editProfile,
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
