import React from 'react';
import { Link } from 'react-router-dom';

class Friends extends React.Component {
  constructor(props) {
    super(props)

    this.state = {loading: true};
  }

  componentDidMount() {
    this.props.fetchFriends(this.props.userId)
      .then( () => this.setState({loading: false}));
  }

  componentWillUnmount() {
    this.setState({loading: true});
  }

  render () {
    let friends;

    if (this.state.loading) {
      friends = <div className="loader">''...</div>;
    } else {
      friends = this.props.friends.map(friend => (
        <li key={friend.id}>
          <Link to={`/profile/${friend.id}`}>
            <div className="friend-pic">
              <img src={friend.prof_pic} alt={friend.first_name + "_pic"}/>
              <div className="text-shadow">
                <span>{friend.first_name + ' ' + friend.last_name}</span>
              </div>
            </div>
          </Link>
        </li>
      ));
    }

    return (
      <div className="friends">
        <div className="friends-header">
          <i className="fa fa-users" aria-hidden="true"></i>
          <span>Friends</span>
        </div>
        <ul className="friends-grid">
          {friends}
        </ul>
      </div>
    );
  }
}

export default Friends;
