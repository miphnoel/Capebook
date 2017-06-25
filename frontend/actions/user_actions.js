import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveFriends = (users) => ({
  type: RECEIVE_FRIENDS,
  users
})

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
}

export const fetchFriends = () => (dispatch) => {
  return APIUtil.fetchFriends()
    .then(users => dispatch(receiveFriends(users)));
}

export const updateUser = (id, formData) => (dispatch) => {
  return APIUtil.updateUser(id, formData)
    .then(user => dispatch(receiveUser(user)));
}

export const updateProfile = (id, profile) => (dispatch) => {
  return APIUtil.updateProfile(id, profile)
    .then(user => dispatch(receiveUser(user)));
}
