import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer
});

export default rootReducer;
