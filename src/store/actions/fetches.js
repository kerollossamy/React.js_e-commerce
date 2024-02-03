// Products
export const fetchProductsSuccess = (data) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: data.products,
});

export const fetchProductsFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
});

// Categories
export const fetchCategoriesSuccess = (categories) => ({
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
    type: 'FETCH_CATEGORIES_FAILURE',
    payload: error,
});