import k2StoreApi from "../../apis/k2StoreApi";
import { actionTypes } from "src/redux/constants/action-types";

export const fetchProducts = () => 
    async (dispatch) => {
        const response = await k2StoreApi
        .get("/products")
        .catch((err) => {
            console.log('err', err);
        })
      dispatch({type: actionTypes.FETCH_PRODUCTS, payload: response.data})
    }

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const fetchProductDetail = (id) => 
  async (dispatch) => {
    const response= await k2StoreApi.get(`/products/${id}`).catch((err) => {
                console.log('err', err);
            })
    dispatch({type: actionTypes.SELECTED_PRODUCTS, payload: response.data})
  }

export const removeSelectedProducts = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCTS
    }
}