import React from 'react';
import { connect } from 'react-redux';

import DeletePost from './delete_post';
import EditPost from './edit_post';
import { openModal } from '../../actions/modal_actions';

class PostMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edit: false, delete: false }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editVisible && this.state.delete) {
      this.setState({ edit: true, delete: false })
    } else if (!nextProps.editVisible && this.state.edit) {
      this.setState({ edit: false })
    } else if (!nextProps.deleteVisible && this.state.delete) {
      this.setState({ delete: false })
    }
  }

  openDelete() {
    this.setState({ delete: true });
    this.props.openModal('deletePost');
  }

  render() {
    return (
      <div className="post-menu">
        <div className="post-menu-buttons">
          <button onClick={() => this.setState({ edit: true })}>
            ✎
          </button>
          <button onClick={() => this.openDelete()}>
            ✕
          </button>
        </div>
        {this.state.edit
          ? ( <div
                className="modal-frame"
                onClick={() => this.setState({ edit: false })} >
                <EditPost post={this.props.post} />
              </div> )
          : <div></div>
        }
        {this.state.delete
          ? ( <div
                className="modal-frame"
                onClick={() => this.setState({ delete: false })} >
                <DeletePost post={this.props.post} />
              </div> )
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
