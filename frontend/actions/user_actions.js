import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
}

export const fetchUsers = () => (dispatch) => {
  
  return APIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));
}
