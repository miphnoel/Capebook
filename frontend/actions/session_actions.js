import * as APIUtil from '../util/session_api_util';

import { receiveSignupErrors, receiveLoginErrors, clearFormErrors } from './form_actions';
import { receiveUser } from './user_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const signup = (user) => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveSignupErrors(err.responseJSON)))
      .then(() => dispatch(clearFormErrors())
    );
};

export const login = (user) => dispatch => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveLoginErrors(err.responseJSON)))
      .then(() => dispatch(clearFormErrors())
    );
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
          err => dispatch(receiveErrors(err.responseJSON)))
      .then(() => dispatch(receiveUser(null)))
      .then(() => dispatch(clearFormErrors()));
};
