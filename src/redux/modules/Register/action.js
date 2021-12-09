import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const registerUser = (user) => {
    return (dispatch) => {
        dispatch(actRegisterRequest())
        axios({
            url: pathAPI + "/authorize/signup",
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