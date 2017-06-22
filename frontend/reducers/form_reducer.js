import merge from 'lodash/merge';

import { RECEIVE_LOGIN_ERRORS, RECEIVE_SIGNUP_ERRORS, CLEAR_ERRORS } from '../actions/form_actions';

const defaultState = {
  signup: {
    placeholders: {
      first_name: "First name",
      last_name: "Last name",
      email: "Email",
      password: "New password",
      dob: "01/01/2001",
      gender: "Male"
    },
    errors: []
  },

  login: {
    errors: []
  }
}

const FormReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return merge({}, state, {signup: {errors: action.errors}});
    case RECEIVE_LOGIN_ERRORS:
      return merge({}, state, {login: {errors: action.errors}});
    case CLEAR_ERRORS:
      const loginErrors = {login: {errors: []}};
      const signupErrors = {signup: {errors: []}};
      return merge({}, state, loginErrors, signupErrors);
    default:
      return state;
    }
};

export default FormReducer;
