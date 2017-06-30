import React from 'react';
import { connect } from 'react-redux';

import { updateProfile } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditPictureForm from './edit_picture_form';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.user.profile;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const profile = this.state;
    this.props.updateProfile(this.props.user.id, profile)
      .then(() => this.props.closeModal('editProfile'));
  }


  render() {
    return (
      <div
        className="modal-frame"
        onClick={() => this.props.closeModal('editProfile')}>
        <div
          className="edit-profile-form"
          onClick={e => e.stopPropagation()}
          >
          <div className='edit-header'>
            <h3>Edit Profile</h3>
          </div>
          <div className='edit-pics'>
            <div className='edit-cover-pic'>
              <img src={this.props.user.cover_pic} />
              <button onClick={() => this.props.openModal('editPic')}>
                <i className="fa fa-camera" aria-hidden="true"></i>
              </button>
            </div>
            <div className='edit-prof-pic'>
              <img src={this.props.user.prof_pic} />
              <button onClick={() => this.props.openModal('editPic')}>
                <i className="fa fa-camera" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="edit-field">
            <label htmlFor="job" className="edit-label">
              <i className="fa fa-briefcase" aria-hidden="true"></i>
              <h3>Occupation</h3>
            </label>
            <input
              autoFocus
              id="job"
              type="text"
              value={this.state.job}
              placeholder="What do you do?"
              onChange={this.update('job')}
            />
          </div>
          <div className="edit-field">
            <label htmlFor="workplace" className="edit-label">
              <i className="fa fa-building" aria-hidden="true"></i>
              <h3>Company</h3>
            </label>
            <input
              id="workplace"
              type="text"
              value={this.state.workplace}
              placeholder="Where do you work?"
              onChange={this.update('workplace')}
            />
          </div>
          <div className="edit-field">
            <label htmlFor="education" className="edit-label">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <h3>Education</h3>
            </label>
            <input
              id="education"
              type="text"
              value={this.state.education}
              placeholder="Where did you go to school?"
              onChange={this.update('education')}
            />
          </div>
          <div className="edit-field">
            <label htmlFor="location" className="edit-label">
              <i className="fa fa-home" aria-hidden="true"></i>
              <h3>Current City</h3>
            </label>
            <input
              id="location"
              type="text"
              value={this.state.location}
              placeholder="Where do you live?"
              onChange={this.update('location')}
            />
          </div>
          <div className="edit-field">
            <label htmlFor="hometown" className="edit-label">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <h3>Hometown</h3>
            </label>
            <input
              id="hometown"
              type="text"
              value={this.state.hometown}
              placeholder="Where did you grow up?"
              onChange={this.update('hometown')}
            />
          </div>
          <div className="button-box">
            <button className="save-button" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
        </div>
        {this.props.editPicVisible ? <EditPictureForm />: <div></div>}
      </div>
    );
  }


}

const mapStateToProps = ({ users, modal }) => ({
  user: users.user,
  editPicVisible: modal.editPic,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (id, profile) => dispatch(updateProfile(id, profile)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: (modal) => dispatch(closeModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm);
