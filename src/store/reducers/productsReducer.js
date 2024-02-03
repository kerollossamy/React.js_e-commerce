const INITIAL_VALUE = {
    products: [],
    error: null,
};

const productsReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default productsReducer;