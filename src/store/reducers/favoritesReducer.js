const initialState = {
    favorites: [],         // Array to store favorite products
    favoritesCount: 0,     // Count of favorite products
};

// Redux reducer for handling state changes related to product favorites
const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        // Action type for adding a product to favorites
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],    // Add product to favorites array
                favoritesCount: state.favoritesCount + 1,           // Increment favorites count
            };

        // Action type for removing a product from favorites
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: state.favorites.filter((favProduct) => favProduct.id !== action.payload), // Remove product from favorites array
                favoritesCount: state.favoritesCount - 1,           // Decrement favorites count
            };

        // Default case for any other action type
        default:
            return state;
    }
};

// Export the favorites reducer for use in the Redux store
export default favoritesReducer;