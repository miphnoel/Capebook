import * as ApiUtil from '../util/friendship_api_util';

export const RECEIVE_FRIEND_REQUESTs = "RECEIVE_FRIEND_REQUESTS"
export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP"
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP"

export const receiveFriendRequests = (friendRequests) => ({
  type: RECEIVE_FRIEND_REQUESTS,
  friendRequests
});

export const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const removeFriendship = (friendshipId) => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
});

export const fetchFriendRequests = () => (dispatch) => {
  return ApiUtil.fetchFriends()
    .then(friendRequests => dispatch(receiveFriendRequests(friendRequests)));
}

export const fetchFriendship = (id) => (dispatch) => {
  return ApiUtil.fetchFriendship(id)
    .then(friendship => dispatch(receiveFriendship(friendship)));
}

export const createFriendRequest = (receiverId) => (dispatch) => {
  return ApiUtil.createFriendRequest(receiverId)
  .then(friendship => dispatch(receiveFriendship(friendship)));
}

export const updateFriendRequest = (senderId, friendship) => (dispatch) => {
  return ApiUtil.updateFriendRequest(senderId, friendship)
  .then(friendship => dispatch(reciveFriendship(friendship)));
}

export const unfriend = (id) => (dispatch) => {
  return ApiUtil.deleteFriend(id)
    .then(id => dispatch(removeFriendship(id)));
}
