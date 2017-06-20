import { combineReducers } from 'redux';
import { reducer as formreducer } from 'redux-form';

import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  form: formReducer
});

export default RootReducer;
