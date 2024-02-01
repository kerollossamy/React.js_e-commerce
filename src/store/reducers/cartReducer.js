const initialState = {
    cartItems: [],
    cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                cartCount: state.cartCount + 1,
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
                cartCount: state.cartCount - 1,
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                cartCount: 0,
            };

        default:
            return state;
    }
};

export default cartReducer;
