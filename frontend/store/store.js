import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger());
}

const configureStore = (preLoadedState = {}) => (
  createStore(
    RootReducer,
    preLoadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
