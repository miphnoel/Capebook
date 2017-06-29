import merge from 'lodash/merge';

import { RECEIVE_FRIEND_REQUESTS,
         RECEIVE_FRIENDSHIP,
         REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

const defaultState = { friendRequests: [], friendship: {} };

const FriendshipsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_FRIEND_REQUESTS:
      newState.friendRequests = action.friendRequests;
      return newState;
    case RECEIVE_FRIENDSHIP:
      return merge({}, state, { friendship: action.friendship })
    case REMOVE_FRIENDSHIP:
      newState.friendship = {};
      return newState;
    default:
      return state;
  }
}

export default FriendshipsReducer;
