import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { respondToRequest } from '../../actions/friendship_actions';

class ApproveDenyModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleResponse(e) => {
    e.preventDefault();


  }

  render() {
    return (
      <div
        className="modal-frame approve-deny-frame"
        onMouseOver={() => this.props.closeModal('approveDeny')}>
        <div
          className="approve-deny-dropdown"
          onMouseOver={(e) => e.stopPropagation()}>
          <ul className="approve-deny-options">
            <li
              id="confirm"
              onClick={() => respondToRequest()}></li>
          </ul>
        </div>
      </div>
    );
);

export default ApproveDenyModal;
