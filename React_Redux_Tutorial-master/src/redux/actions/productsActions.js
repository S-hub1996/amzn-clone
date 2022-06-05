import reactStoreApi from "../../apis/reactStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () =>  async (dispatch)=>{
    const reponse = await reactStoreApi.get("/products") 

    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:reponse.data})
}

export const fetchProduct = (id) =>  async (dispatch)=>{
    const reponse = await reactStoreApi.get(`/products/${id}`) 

    dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:reponse.data})
}
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
