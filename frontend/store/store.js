import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preLoadedState = {}) => (
  createStore(
    RootReducer,
    preLoadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
