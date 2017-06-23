import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FormReducer from './form_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  form: FormReducer,
  user: UserReducer,
});

export default RootReducer;
