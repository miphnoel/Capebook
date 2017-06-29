import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

export const fetchTimeline = (id) => (dispatch) => {
  return ApiUtil.fetchTimeline(id)
    .then(posts => dispatch(receivePosts(posts)));
}

export const createPost = (post) => (dispatch) => {
  return ApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)));
}

export const updatePost = (post) => (dispatch) => {
  return ApiUtil.updatePost(post)
  .then(post => dispatch(replacePost(id, post)));
}

export const deletePost = (id) => (dispatch) => {
  return ApiUtil.deletePost(id)
    .then(id => dispatch(removePost(post)));
}

export const createComment = (comment) => (dispatch) => {
  return ApiUtil.createComment(comment);
}
