import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_FRIENDS } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  users: {},
  friends: {},
  user: null
};

const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { user: action.user });
    case RECEIVE_USERS:
      return merge({}, state, { users: action.users })
    case RECEIVE_FRIENDS:
      const newState = merge({}, state);
      newState.friends = action.friends;
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;
