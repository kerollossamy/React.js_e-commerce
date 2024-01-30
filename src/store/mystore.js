import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/Root';
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;