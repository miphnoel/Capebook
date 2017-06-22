export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const receiveLoginErrors = errors => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
});
