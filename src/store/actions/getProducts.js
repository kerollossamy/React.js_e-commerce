import api from "./Api";
import { fetchProductsFailure, fetchProductsSuccess } from "./fetches";

export const getProducts = () => {
  return (dispatch) => {
    return api
      .get('/products')
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
