import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FormReducer from './form_reducer';
import UsersReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  form: FormReducer,
  users: UsersReducer,
});

export default RootReducer;
