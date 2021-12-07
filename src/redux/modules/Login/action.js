import axios from "axios";
import * as actionTypes from "./constants";

export const loginUser = (user, history) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        axios({
            url: "",
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
