import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const loginUser = (user) => {
    return (dispatch) => {
        dispatch(actHomeworkRequest());
        axios({
            url: pathAPI + "authorize/login",
            method: "POST",
            data: user,
        })
            .then((res) => {
                // alert("Đăng nhập thành công");
                localStorage.setItem("User", JSON.stringify(res.data));
                dispatch(actLoginSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actLoginFailed(err));
            })
    }
}

export const resetHomework = () => {
    return (dispatch) => {
        dispatch(actHomeworkReset());
    }
}

export const actHomeworkRequest = () => {
    return {
        type: actionTypes.LOGIN_REQUEST,
    }
}

export const actHomeworkReset = () => {
    return {
        type: actionTypes.LOGIN_RESET,
    }
}

export const actHomeworkSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: data
    }
}
export const actHomeworkFailed = (err) => {
    return {
        type: actionTypes.LOGIN_FAILED,
        payload: err
    }
}
