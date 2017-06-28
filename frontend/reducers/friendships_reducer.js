import merge from 'lodash/merge';

import { RECEIVE_FRIEND_REQUESTS,
         RECEIVE_FRIENDSHIP,
         REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

const defaultState = { friendRequests: {}, friendship: {} };

const FriendshipsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIEND_REQUESTS:
      return merge({}, state, { friendRequests: action.friendRequests });
    case RECEIVE_FRIENDSHIP:
      return merge({}, state, { friendship: action.friendship})
    case REMOVE_FRIENDSHIP:
      const newState = merge({}, state);
      delete newState.friendRequests[action.id]
      return newState;
    default:
      return state;
  }
}

export default FriendshipsReducer;
