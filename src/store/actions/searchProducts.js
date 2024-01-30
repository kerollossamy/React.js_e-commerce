import api from "./Api";
import { fetchProductsFailure, fetchProductsSuccess } from "./fetches";

export const searchProducts = (searchQuery = '') => {
    return (dispatch) => {
        return api
            .get(`/products/search?q=${searchQuery}`)
            .then((response) => {
                dispatch(fetchProductsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error.message));
            });
    };
};