import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import merge from 'lodash/merge';

const defaultState = {
  editProfile: false,
  editPic: false,
  friendRequests: false,
  messages: false,
  notifications: false,
  approveDeny: false,
};

const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, state, { [action.modal]: true });
    case CLOSE_MODAL:
      return merge({}, state, { [action.modal]: false });
    default:
      return state;
  }
}

export default ModalReducer;
