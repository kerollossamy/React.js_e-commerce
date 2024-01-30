import api from "./Api";
import { fetchCategoriesFailure, fetchCategoriesSuccess } from "./fetches";

export const getCategories = () => {
    return (dispatch) => {
        return api
            .get('/products/categories')
            .then((response) => {
                dispatch(fetchCategoriesSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchCategoriesFailure(error.message));
            });
    };
};