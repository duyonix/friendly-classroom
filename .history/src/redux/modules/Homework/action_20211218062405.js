import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const actFetchHomeworkList = () => {
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
                dispatch(actHomeworkSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actHomeworkFailed(err));
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
        type: actionTypes.HOMEWORK_REQUEST,
    }
}

export const actHomeworkReset = () => {
    return {
        type: actionTypes.HOMEWORK_RESET,
    }
}

export const actHomeworkSuccess = (data) => {
    return {
        type: actionTypes.HOMEWORK_SUCCESS,
        payload: data
    }
}
export const actHomeworkFailed = (err) => {
    return {
        type: actionTypes.HOMEWORK_FAILED,
        payload: err
    }
}
