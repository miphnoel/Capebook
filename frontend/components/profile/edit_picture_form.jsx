import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

class EditPictureForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prof_pic: null,
      cover_pic: null
    };

    this.uploadProfPic = this.uploadProfPic.bind(this);
    this.uploadCoverPic = this.uploadCoverPic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeOneFrame(e, modal) {
    e.stopPropagation();
    this.props.closeModal(modal);
  }

  uploadProfPic(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => this.setState({prof_pic: file});
    if (file) reader.readAsDataURL(file);
  }

  uploadCoverPic(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => this.setState({cover_pic: file});
    if (file) reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.prof_pic) {
      formData.append("user[prof_pic]", this.state.prof_pic);
    }
    if (this.state.cover_pic) {
      formData.append("user[cover_pic]", this.state.cover_pic);
    }
    this.props.updateUser(this.props.user.id, formData)
      .then( () => this.props.closeModal('editPic'));
  }

  render() {
    return (
      <div
        className='modal-frame picture-modal'
        onClick={(e) => this.closeOneFrame(e, 'editPic')}>
        <div
          className='edit-picture-form'
          onClick={(e) => e.stopPropagation()}>
          <div className="upload-prof-pic">
            <label className="upload-pic-label">Update Profile Picture
              <input
                type="file"
                onChange={this.uploadProfPic}
              />
            </label>
          </div>
          <div className="upload-cover-pic">
            <label className="upload-pic-label">Update Cover Photo
              <input
                type="file"
                onChange={this.uploadCoverPic}
              />
            </label>
          </div>
          <div className="edit-picture-button">
            <button className="save-button" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  user: users.showUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, formData) => dispatch(updateUser(id, formData)),
  closeModal: (modal) => dispatch(closeModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPictureForm);
