import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { updateFriendRequest } from '../../actions/friendship_actions';

class ApproveDenyModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(status) {
    const { user, friendship, updateFriendRequest } = this.props;
    return e => {
      e.preventDefault;
      updateFriendRequest({ id: friendship.id, sender_id: user.id, status: status })
        .then(() => this.props.closeModal('approveDeny'));
    }
  }

  render() {
    return (
      <div
        className="dropdown-frame"
        onMouseOver={(e) => e.stopPropagation()}>
        <div className="approve-deny-dropdown">
          <ul className="approve-deny-options">
            <li key="confirm" onClick={ this.handleResponse("approved") }>
              Confirm
            </li>
            <li key="deny" onClick={ this.handleResponse("denied") }>
              Delete request
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, friendships }) => ({
  user: users.user,
  friendship: friendships.friendship
});

const mapDispatchToProps = (dispatch) => ({
  updateFriendRequest: (senderId, friendship) => dispatch(updateFriendRequest(senderId, friendship)),
  closeModal: (modal) => dispatch(closeModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApproveDenyModal);
