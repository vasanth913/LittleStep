import { actionTypes } from "src/redux/constants/action-types";

const inititalState = {
    products : [],
}

export const productReducer = (state = inititalState, {type, payload}) => {

    switch (type){
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state, 
                products: payload
            };
        case actionTypes.SET_PRODUCTS:
            return {
                ...state, 
                products: payload
            };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = inititalState, {type, payload}) => {

    switch (type){
        case actionTypes.SELECTED_PRODUCTS:
            return {
                ...state, 
                ...payload
            };
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
                return {};
        default:
            return state;
    }
}

