const INITIAL_VALUE = {
    categories: [],
    error: null,
};

const categoriesReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
                error: null,
            };
        case 'FETCH_CATEGORIES_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default categoriesReducer;