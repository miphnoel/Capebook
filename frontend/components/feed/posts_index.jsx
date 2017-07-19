import React from 'react';
import { connect } from 'react-redux';

import { fetchTimeline, fetchNewsFeed } from '../../actions/post_actions';
import Post from './post.jsx';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.fetchTimeline(this.props.user.id)
        .then(() => this.setState({ loading: false }));
    } else {
      this.props.fetchNewsFeed()
        .then(() => this.setState({ loading: false }));
    }
  }

  render() {
    if (this.state.loading) {
      return <div className="loader"></div>
    }

    const { posts } = this.props
    const postList = posts.postIds.map(id => (
      <Post key={id} post={posts[id]} currentUser={this.props.currentUser}/>
      )
    );

    return (
      <ul className="post-list">
        {postList}
      </ul>
    );
  }
}

const mapStatetoProps = ({ session, users, posts }) => ({
  currentUser: session.currentUser,
  user: users.user,
  posts
});

const mapDispatchtoProps = (dispatch) => ({
  fetchTimeline: (id) => dispatch(fetchTimeline(id)),
  fetchNewsFeed: () => dispatch(fetchNewsFeed()),
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(PostsIndex);
