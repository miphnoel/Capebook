import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FormReducer from './form_reducer';
import UsersReducer from './user_reducer';
import ModalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  form: FormReducer,
  modal: ModalReducer,
});

export default RootReducer;
