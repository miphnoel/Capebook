import React from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class DeletePost extends React.Component {

  switchModals() {
    this.props.closeModal('deletePost');
    this.props.openModal('editPost');
  }

  handleDelete() {
    this.props.deletePost(this.props.post.id)
    this.props.closeModal();
  }

  render() {
    const { post, deletePost, openModal, closeModal } = this.props;

    return (
      <div
        className="inner-modal-wrap delete-wrap"
        onClick={e => e.stopPropagation()}
        >
        <div className="delete-post-box">
          <div className="delete-post-header">
            Delete Post
          </div>
          <div className="delete-post-warning">
            <p>This post will be deleted and you won't be able to find it anymore.
            You can also edit this post, if you just want to change something.</p>
          </div>
          <div className="delete-post-footer">
            <button
              className="neutral-button"
              onClick={() => closeModal('deletePost')}>
              Cancel
            </button>
            <div>
              <button
                className="neutral-button"
                onClick={() => this.switchModals()}>
                Edit Post
              </button>
              <button
                className="save-button"
                onClick={() => this.handleDelete()}>
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(
  null,
  mapDispatchToProps
)(DeletePost);
