import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import NavBarContainer from '../shared/nav_bar_container';
import ProfileContent from './profile_content';
import EditProfileForm from './edit_profile_form';


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
    let comp;

    if (this.state.loading) {
      comp = <div className="loader">''</div>
    } else {
      comp = <ProfileContent user={user} />
    }

    return (
      <div className="profile-page">
        <NavBarContainer />
        <div className="main-content">
          {comp}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
  currentUser: state.session.currentUser,
  userId: ownProps.match.params.userId,
  user: state.users.user
})};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
