import React from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const DeletePost = ({ post, deletePost, openModal, closeModal }) => (
  <div
    className="modal-frame"
    onClick={() => closeModal('deletePost')}>
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
            onClick={() => closeModal()}>
            Cancel
          </button>
          <div>
            <button
              className="neutral-button"
              onClick={() => closeModal().then(() => openModal())}>
              Edit Post
            </button>
            <button
              className="save-button"
              onClick={() => deletePost(post.id).then(() => closeModal())}>
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  closeModal: () => dispatch(closeModal('deletePost')),
  openModal: () => dispatch(openModal('editPost')),
});

export default connect(
  null,
  mapDispatchToProps
)(DeletePost);
