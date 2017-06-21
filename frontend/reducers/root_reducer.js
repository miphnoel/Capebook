import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FormReducer from './form_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  form: FormReducer,
});

export default RootReducer;
