import React from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';

import { updatePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

class EditPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: props.post.body };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({ body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost({ id: this.props.post.id, body: this.state.body })
      .then(() => this.props.closeModal());
  }

  render() {
    return (
      <div
        className="modal-frame"
        onClick={() => this.props.closeModal('editPost')}>
        <div
          className="inner-modal-wrap edit-wrap"
          onClick={e => e.stopPropagation()}
          >
          <div className="post-form-box">
            <div className="post-form-header">
              <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
              <span>Edit Post</span>
            </div>
            <div className="post-form-content">
              <img src={this.props.currentUser.prof_pic} />
              <div className="text-container">
                <Textarea
                  className="edit-post-area"
                  autoFocus
                  spellCheck="false"
                  onChange={this.update}
                  value={this.state.body} />
              </div>
            </div>
            <div className="post-form-footer">
              <button
                className="save-button"
                onClick={this.handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchtoProps = (dispatch) => ({
  updatePost: (post) => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal('editPost'))
});


export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(EditPost);
