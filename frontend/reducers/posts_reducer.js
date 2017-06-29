import merge from 'lodash/merge';

import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';

const defaultState = {
  posts: {},
  errors: []
};

const PostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      newState = merge({}, state);
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.postId]
      return newState;
    default:
      return state;
  }
}

export default PostsReducer;
