import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createComment,
         updateComment,
         deleteComment } from '../../actions/post_actions';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: '' }

    this.update = this.update.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleCreate(e) {
    this.props.createComment({
      parent_id: this.props.parentId, body: this.state.body
    }).then(() => this.setState({ body: '' }))
  }

  render() {
    return (
      <form
        className="comment-form"
        onSubmit={this.handleCreate}>
        <Link to={`/profile/${this.props.currentUser.id}`}>
          <img src={this.props.currentUser.prof_pic} />
        </Link>
        <input
          type="text"
          value={this.state.body}
          placeholder="Write a comment..."
          onChange={this.update}>
        </input>
        <button hidden />
      </form>
    );
  }
}


const mapStatetoProps = ({ session, modal }) => ({
  currentUser: session.currentUser,
  deleteCommentVisible: modal.deleteComment,
});

const mapDispatchtoProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment)),
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(CommentForm);
