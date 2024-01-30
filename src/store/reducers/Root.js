import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer
});

export default rootReducer;
