import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

class EditPictureForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prof_pic: null,
      cover_pic: null,
      prof_url: '',
      cover_url: ''
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
    reader.onloadend = () => this.setState({
      prof_pic: file,
      prof_url: reader.result
    });
    if (file) reader.readAsDataURL(file);
  }

  uploadCoverPic(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => this.setState({
      cover_pic: file,
      cover_url: reader.result
    });
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
    const { cover_url, prof_url } = this.state;
    const { cover_pic, prof_pic } = this.props.user;

    return (
      <div
        className='modal-frame picture-modal'
        onClick={(e) => this.closeOneFrame(e, 'editPic')}>
        <div
          className='edit-picture-form'
          onClick={(e) => e.stopPropagation()}
          >
          <div className="cover-preview-box">
            <h3>Cover Photo</h3>
            <div className="cover-pic-preview">
              <img src={cover_url ? cover_url : cover_pic} />
            </div>
          </div>
          <div className="edit-pic-form-bottom">
            <div className="prof-preview-box">
              <h3>Profile</h3>
              <div className="prof-pic-preview">
                <img src={prof_url ? prof_url : prof_pic} />
              </div>
            </div>
            <div className="upload-buttons">
              <label className="upload-pic-label">Update Profile Picture
                <input
                  type="file"
                  hidden
                  onChange={this.uploadProfPic}
                  />
              </label>
              <label className="upload-pic-label">Update Cover Photo
                <input
                  type="file"
                  hidden
                  onChange={this.uploadCoverPic}
                  />
              </label>
              <button className="save-button" onClick={this.handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  user: users.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, formData) => dispatch(updateUser(id, formData)),
  closeModal: (modal) => dispatch(closeModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPictureForm);
