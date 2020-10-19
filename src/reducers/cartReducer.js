import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_TOTAL_PRICE,
    GET_TOTAL_PRODUCTS
} from "../actions/actionTypes";

const initialState = {
    cartProducts: [],
    totalProducts: 0,
    totalPrice: 0
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload],
            };
        case REMOVE_FROM_CART:
            const result = state.cartProducts.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cartProducts: result,
            }
        case GET_TOTAL_PRICE:
            let totalPrice = 0
            state.cartProducts.map(product => {
                totalPrice += product.price * product.units
                return totalPrice
            })
            return {
                ...state,
                totalPrice: totalPrice,
            };
        case GET_TOTAL_PRODUCTS:
            let totalProducts = 0
            state.cartProducts.map(product => {
                totalProducts += parseInt(product.units)
                return totalProducts
            })
            return {
                ...state,
                totalProducts: totalProducts,
            };
        default:
            return state;
    }
};

export default cart;