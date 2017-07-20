import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import values from 'lodash/values';

import { fetchFriends } from '../../actions/user_actions';
import { createFriendRequest, updateFriendRequest, unfriend } from '../../actions/friendship_actions';

class FriendsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchFriends(this.props.userId)
    .then( () => this.setState({ loading: false }));
  }

  componentWillUnmount() {
    this.setState({ loading: true });
  }

  render() {
    let friends;

    if (this.state.loading) {
      friends = <div className="loader">...</div>;
    } else {
      friends = this.props.friends.map(friend => (
        <li key={friend.id}>
          <Link to={`/profile/${friend.id}`}>
            <img src={friend.prof_pic} alt={friend.first_name + "_pic"}/>
          </Link>
          <div className="friend-details">
            <Link to={`/profile/${friend.id}`}>
              <span>{friend.first_name + ' ' + friend.last_name}</span>
            </Link>
          </div>
        </li>
        )
      );
    }

    return (
      <div className="friends-page">
        <div className="friends-page-header">
          <i className="fa fa-users" aria-hidden='true'></i><h3>Friends</h3>
        </div>
        <ul>
          {friends}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users, session }) => ({
  friends: values(users.friends),
  userId: users.user.id,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchFriends: (id) => dispatch(fetchFriends(id)),
  createFriendRequest: (receiverId) => dispatch(createFriendRequest(receiverId)),
  updateFriendRequest: (friendship) => dispatch(updateFriendRequest(friendship)),
  unfriend: (id) => dispatch(unfriend(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPage);
