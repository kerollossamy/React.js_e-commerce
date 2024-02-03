import api from "./Api";
import { fetchProductsSuccess, fetchProductsFailure } from "./fetches";

// Fetch each category
export const getProductsByCategory = (category) => {
    return (dispatch) => {
        return api
            .get(`/products/category/${category}`)
            .then((response) => {
                dispatch(fetchProductsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error.message));
            });
    };
};