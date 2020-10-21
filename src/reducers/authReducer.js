import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    USER_LOADED,
    LOGOUT
} from "../actions/actionTypes";

const initialState = {
    jwt: localStorage.getItem("jwt"),
    isAuthenticated: null,
    loading: true,
    user: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("jwt", action.payload.jwt);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                ...state,
                jwt: null,
                isAuthenticated: false,
                loading: false
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        default:
            return state;
    }
};

export default auth;