import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import ProfileHeader from './profile_header';

const mapStateToProps = ({ users, modal }) => {

  return({
  user: users.showUser,
  editVisible: modal.editProfile,
})};

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
