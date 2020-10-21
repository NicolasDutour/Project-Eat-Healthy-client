import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGOUT
} from './actionTypes'
import axios from 'axios'

export const register = (username, email, password) => async (
    dispatch,
) => {
    try {
        const res = await axios.post('http://localhost:1337/auth/local/register', {
            username,
            email,
            password,
        })

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })

    } catch (err) {
        console.log(err.response)
    }
}

export const login = (identifier, password) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:1337/auth/local', {
            identifier,
            password,
        })

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })

    } catch (err) {
        console.log(err.response)
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
}