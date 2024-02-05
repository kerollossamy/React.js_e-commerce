import api from "./Api";
import { fetchProductsFailure, fetchProductsSuccess } from "./fetches";

export const getProducts = () => {
  return (dispatch) => {
    return api
      .get('/products?limit=100')
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};