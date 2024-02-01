import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import favoritesReducer from './favoritesReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
    cart: cartReducer
});

export default rootReducer;
