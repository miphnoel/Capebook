import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

class EditPictureForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prof_pic: this.props.user.prof_pic,
      cover_pic: this.props.user.cover_pic
    }
  }

  closeOneFrame(e, modal) {
    e.stopPropagation();
    this.props.closeModal(modal);
  }

  render() {
    return (
      <div
        className='modal-frame picture-modal'
        onClick={(e) => this.closeOneFrame(e, 'editPic')}>
        <div
          className='edit-picture-form'
          onClick={(e) => e.stopPropagation()}>
          <h1>EditPictureForm</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  user: users.showUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: (modal) => dispatch(closeModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPictureForm);
