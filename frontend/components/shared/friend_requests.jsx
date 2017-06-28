import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { fetchFriendRequests, updateFriendRequest } from '../../actions/friendship_actions';

class FriendRequests extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true }
  }

  componentDidMount() {
    this.props.fetchFriendRequests()
      .then(() => this.setState({ loading: false }));
  }

  componentWillUnmount() {
    this.setState({ loading: true })
  }

  render() {
    let requests;
    if (this.state.loading) {
      requests = <div className="loader">Retrieving Intel...</div>
    } else {
      requests = this.props.friendRequests.map(request => (
        <li key={request.id}>{request.sender_name}</li>
      ));
    }

    return (
      <div className='modal-frame transparent-frame'>
        <ul className='friend-requests'>
          {requests}
        </ul>
      </div>
    );

  }
}

const mapStateToProps = ({ session, friendships }) => ({
  currentUser: session.currentUser,
  friendRequests: friendships.friendRequests,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFriendRequests: () => dispatch(fetchFriendRequests()),
  updateFriendRequest: (senderId, friendship) => dispatch(
                        updateFriendRequest(senderId, friendship)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequests);
