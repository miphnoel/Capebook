import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FormReducer from './form_reducer';
import UsersReducer from './users_reducer';
import ModalReducer from './modal_reducer';
import FriendshipsReducer from './friendships_reducer';
import PostsReducer from './posts_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  friendships: FriendshipsReducer,
  posts: PostsReducer,
  form: FormReducer,
  modal: ModalReducer,
  search: SearchReducer,
});

export default RootReducer;
