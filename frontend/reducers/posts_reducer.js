import merge from 'lodash/merge';

import { RECEIVE_POSTS,
         RECEIVE_POST,
         REPLACE_POST,
         REMOVE_POST } from '../actions/post_actions';

const defaultState = {};

const PostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      newState = merge({}, state);
      newState.postIds.unshift(action.post.id);
      newState[action.post.id] = action.post;
      return newState;
    case REPLACE_POST:
      newState = merge({}, state);
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.postId];
      newState.postIds = Object.keys(newState);
      return newState;
    default:
      return state;
  }
}

export default PostsReducer;
