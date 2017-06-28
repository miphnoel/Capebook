import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_USERS = "RECEIVE_USERS"


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
})

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
}

export const fetchFriends = (id) => (dispatch) => {
  return APIUtil.fetchFriends(id)
    .then(friends => dispatch(receiveFriends(friends)));
}

export const updateUser = (id, formData) => (dispatch) => {
  return APIUtil.updateUser(id, formData)
    .then(user => dispatch(receiveUser(user)));
}

export const updateProfile = (id, profile) => (dispatch) => {
  return APIUtil.updateProfile(id, profile)
    .then(user => dispatch(receiveUser(user)));
}

export const fetchAllUsers = () => (dispatch) => {
  return ApiUtil.fetchAllUsers()
    .then(users => dispatch(receiveUsers(users)));
}
