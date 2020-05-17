import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import symbolReducer from './reducers/symbolReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  symbolReducer,
  composeEnhancers(applyMiddleware(thunk))
);
