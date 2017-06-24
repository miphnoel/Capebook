import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  users: {},
  showUser: null
};

const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, {showUser: action.user});
    case RECEIVE_USERS:
      return merge({}, state, {users: action.users});
    default:
      return state;
  }
}

export default UsersReducer;
