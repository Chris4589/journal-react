import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { uiReducer } from './uiReducer';
import { loading } from '../reducers/loading';
import { NotesRedurces } from '../reducers/NotesRedurces';

// eslint-disable-next-line no-undef
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth:authReducer,
  ui: uiReducer,
  loading,
  notes:NotesRedurces
});


export const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(thunk))
);