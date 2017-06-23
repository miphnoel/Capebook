import merge from 'lodash/merge';

import { RECEIVE_LOGIN_ERRORS, RECEIVE_SIGNUP_ERRORS, CLEAR_FORM_ERRORS } from '../actions/form_actions';

const defaultState = {
  signup: {
    placeholders: {
      first_name: "First name",
      last_name: "Last name",
      email: "Email",
      password: "New password",
      dob: "01/01/2001",
      alignment: "hero"
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
    case CLEAR_FORM_ERRORS:
      return defaultState;
    default:
      return state;
    }
};

export default FormReducer;
