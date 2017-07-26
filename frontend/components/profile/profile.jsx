import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import NavBar from '../nav_bar/nav_bar';
import ProfileContent from './profile_content';


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
    let comp;

    if (this.state.loading) {
      comp = <div className="loader">''</div>
    } else {
      comp = <ProfileContent user={this.props.user} />
    }

    return (
      <div className="profile-page">
        <NavBar />
        <div className="main-content">
          {comp}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
