import React from 'react';
import { connect } from 'react-redux';

import DeletePost from './delete_post';
import EditPost from './edit_post';
import { openModal } from '../../actions/modal_actions';

class PostMenu extends React.Component {
  render() {
    return (
      <div className="post-menu">
        <div className="post-menu-buttons">
          <button onClick={() => this.props.openModal('editPost')}>
            ✎
          </button>
          <button onClick={() => this.props.openModal('deletePost')}>
            ✕
          </button>
        </div>
        {this.props.editVisible
          ? <EditPost post={this.props.post} />
          : <div></div>
        }
        {this.props.deleteVisible
          ? <DeletePost post={this.props.post} />
          : <div></div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ modal }) => ({
  deleteVisible: modal.deletePost,
  editVisible: modal.editPost,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMenu);
