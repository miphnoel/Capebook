import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';

import { createPost } from '../../actions/post_actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: '', active: false };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({ body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = (this.props.user ? this.props.user.id : this.props.currentUser.id);
    this.props.createPost({
      recipient_id: id,
      body: this.state.body
    }).then(() => this.setState({ body: '', active: false }));
  }

  render() {
    const { user, currentUser } = this.props;
    let placeholder, postLabel;
    if (!user) {
      placeholder = `What's on your mind, ${currentUser.first_name}?`;
      postLabel = "Create a Post";
    } else if (user.id === currentUser.id) {
      placeholder = "What's on your mind?";
      postLabel = "Status";
    } else {
      placeholder = `Write something to ${user.first_name}...`
      postLabel = "Post";
    }

    let frame;
    if (this.state.active) {
      frame = (
        <div
          className="modal-frame"
          onClick={() => this.setState({ active: false })}>
        </div>
      );
    } else {
      frame = <div></div>;
    }

    return (
      <div className="post-form-box">
        {
          this.state.active
            ? (
              <div
                className="modal-frame"
                onClick={() => this.setState({ active: false })}>
              </div>
            ) : (
              <div></div>
            )
        }
        <div className={this.state.active ? 'focus' : ''}>
          <div className="post-form-header">
            <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
            <span>{postLabel}</span>
          </div>
          <div className="post-form-content">
            <Link to={`/profile/${currentUser.id}`}>
              <img src={currentUser.prof_pic} />
            </Link>
            <div className="text-container">
              <Textarea
                spellCheck="false"
                onChange={this.update}
                onFocus={() => this.setState({ active: true })}
                value={this.state.body}
                placeholder={placeholder}></Textarea>
            </div>
          </div>
          <div className="post-form-footer">
            <button
              className="save-button"
              onClick={this.handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ users, session }) => ({
  user: users.user,
  currentUser: session.currentUser,
});

const mapDispatchtoProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
});


export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(PostForm);
