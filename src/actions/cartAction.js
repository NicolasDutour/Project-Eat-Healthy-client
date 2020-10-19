
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_TOTAL_PRICE,
    GET_TOTAL_PRODUCTS
} from './actionTypes'


export const addToCart = (product) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_CART,
            payload: product,
        })
    } catch (err) {
        console.log(err)
    }
}

export const removeFromCart = (id, units) => async (dispatch) => {
    try {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: { id, units },
        })
    } catch (err) {
        console.log(err)
    }
}

export const getTotalPrice = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_TOTAL_PRICE,
        })
    } catch (err) {
        console.log(err)
    }
}


export const getTotalProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_TOTAL_PRODUCTS,
        })
    } catch (err) {
        console.log(err)
    }
}