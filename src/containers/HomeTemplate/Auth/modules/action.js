import axios from "axios";
import * as actionTypes from "./constants";

export const loginUser = (user, history) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        axios({
            url: ``,
            method: "POST",
            data: user,
        })
            .then((res) => {
                localStorage.setItem("User", JSON.stringify(res.data));
                dispatch(actLoginSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actLoginFailed(err));
            })
    }
}

export const resetLogin = () => {
    return (dispatch) => {
        dispatch(actLoginReset());
    }
}

export const actLoginRequest = () => {
    return {
        type: actionTypes.LOGIN_REQUEST,
    }
}

export const actLoginReset = () => {
    return {
        type: actionTypes.LOGIN_RESET,
    }
}

export const actLoginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: data
    }
}
export const actLoginFailed = (err) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        payload: err
    }
}

export const registerUser = (user) => {
    return (dispatch) => {
        dispatch(actRegisterRequest())
        axios({
            url: ``,
            method: "POST",
            data: user
        })
            .then((res) => {
                dispatch(actRegisterSuccess(res.data))
            })
            .catch((err) => {
                dispatch(actRegisterFailed(err))
            })
    }
}

export const resetRegister = () => {
    return (dispatch) => {
        dispatch(actRegisterReset())
    }
}
export const actRegisterRequest = () => {
    return {
        type: actionTypes.REGISTER_REQUEST
    }
}

export const actRegisterSuccess = (data) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: data
    }
}

export const actRegisterFailed = (err) => {
    return {
        type: actionTypes.REGISTER_FAILED,
        payload: err
    }
}

export const actRegisterReset = () => {
    return {
        type: actionTypes.REGISTER_RESET
    }
}