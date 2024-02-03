import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import favoritesReducer from './favoritesReducer';
import cartReducer from './cartReducer';

const combinedReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
    cart: cartReducer
});

export default combinedReducer;
