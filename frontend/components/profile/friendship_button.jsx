import React from 'react';
import { connect } from 'react-redux';

import EditProfileForm from './edit_profile_form';
import ApproveDenyModal from './approve_deny_modal';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchFriendship,
         createFriendRequest,
         unfriend } from '../../actions/friendship_actions';

class FriendshipButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { status: props.friendship.status }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchFriendship(this.props.userId)
      .then(() => this.setState({ status: this.props.friendship.status }));
  }

  componentWillReceiveProps(nextProps) {
    const nextStatus = nextProps.friendship.status
    if (nextStatus &&
        nextStatus !== this.props.friendship.status) {
      this.setState({ status: nextStatus });
    }
  }

  handleClick(e) {
    e.preventDefault(e)
    switch (this.state.status) {
      case -1:
        this.props.openModal('editProfile');
        break;
      case 0:
        this.props.requestFriendship(this.props.userId);
        this.setState({ status: 1 });
        break;
      case 1:
      case 3:
      case 5:
        this.props.unfriend(this.props.friendship.id);
        this.setState({ status: 0 });
    }
  }

  render() {
    const { editVisible, approveDenyVisible } = this.props;
    let button;
    switch (this.state.status) {
      case -1:
        button = (
          <button className="edit-profile" onClick={this.handleClick}>
            <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
            <span>Edit Profile</span>
          </button>
        )
        break;
      case 0:
        button = (
          <button className="add-friend" onClick={this.handleClick}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Add Friend</span>
          </button>
        )
        break;
      case 1:
        button = (
          <button className="cancel-request" onClick={this.handleClick}>
            <i className="fa fa-user-times fa-lg" aria-hidden="true"></i>
            <span>Cancel Request</span>
          </button>
        )
        break;
      case 2:
        button = (
          <button
            className="response-button"
            onMouseOver={() => this.props.openModal('approveDeny')}
            onMouseLeave={() => this.props.closeModal('approveDeny')}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Respond to Friend Request</span>
            {approveDenyVisible ? <ApproveDenyModal /> : <div></div>}
          </button>
        )
        break;
      case 3:
        button = (
          <button className="unfriend-button" onClick={this.handleClick}>
            <i className="fa fa-user-times fa-lg" aria-hidden="true"></i>
            <span>Unfriend</span>
          </button>
        )
        break;
      case 4:
        button = <button disabled>You've been blocked!</button>
        break;
      case 5:
        button = (
          <button className="unblock-button" onClick={this.handleClick}>
            <i className="fa fa-user-plus fa-lg" aria-hidden="true"></i>
            <span>Unblock</span>
          </button>
        )
        break;
    }
    return (
      <div>
        <div className="grey-button">
          {button}
        </div>
        {editVisible ? <EditProfileForm /> : <div></div>}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.userId,
  currentUser: state.session.currentUser,
  editVisible: state.modal.editProfile,
  approveDenyVisible: state.modal.approveDeny,
  friendship: state.friendships.friendship
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  requestFriendship: (receiverId) => dispatch(createFriendRequest(receiverId)),
  unfriend: (id) => dispatch(unfriend(id)),
  fetchFriendship: (senderId) => dispatch(fetchFriendship(senderId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendshipButton);
