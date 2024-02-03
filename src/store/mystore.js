import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducer from './reducers/combinedReducer';
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk';

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;