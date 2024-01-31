// Action creator for adding a product to favorites
export const addToFavorites = (productId) => ({
    type: 'ADD_TO_FAVORITES',     // Action type indicating addition to favorites
    payload: productId,           // Payload containing the ID of the product to be added
});

// Action creator for removing a product from favorites
export const removeFromFavorites = (productId) => ({
    type: 'REMOVE_FROM_FAVORITES', // Action type indicating removal from favorites
    payload: productId,            // Payload containing the ID of the product to be removed
});