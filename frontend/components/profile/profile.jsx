import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import NavBarContainer from '../shared/nav_bar_container';
import ProfileHeader from './profile_header';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {loading: true};
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
      .then( () => this.setState({loading: false}));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.setState({loading: true});
      this.props.fetchUser(nextProps.userId)
        .then( () => this.setState({loading: false}));
    }
  }

  componentWillUnmount() {
    this.setState({loading: true});
  }

  render() {
    const user = this.props.user;
    debugger
    if (this.state.loading) {
      return (
        <div className="profile-page">
          <NavBarContainer />
          <div className="main-content">
            <div className="loader">Retrieving Intel...</div>
          </div>
        </div>
      );
    } else {
        return (
          <div className='profile-page'>
            <NavBarContainer />
            <div className="main-content">
              <h1>Profile</h1>
              <ProfileHeader user={user}/>
            </div>
          </div>
        );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
  currentUser: state.session.currentUser,
  userId: ownProps.match.params.userId,
  user: state.user
})};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
