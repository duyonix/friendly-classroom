import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const actInviteStudent = () => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actHomeworkRequest());
        axios({
            url: pathAPI + "homework/getAllHomeworkMetadataOfClass",
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actHomeworkSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actHomeworkFailed(err));
            })
    }
}


export const actInviteStudentRequest = () => {
    return {
        type: actionTypes.INVITE_STUDENT_REQUEST,
    }
}
export const actInviteStudentSuccess = (data) => {
    return {
        type: actionTypes.INVITE_STUDENT_SUCCESS,
        payload: data
    }
}
export const actInviteStudentFailed = (err) => {
    return {
        type: actionTypes.INVITE_STUDENT_FAILED,
        payload: err
    }
}


export const actDeleteStudent = () => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actDeleteStudentRequest());
        axios({
            url: pathAPI + "classroom/61b747d3f35b8a26c4e904da/removeStudent",
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actDeleteStudentSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actDeleteStudentFailed(err));
            })
    }
}


export const actDeleteStudentRequest = () => {
    return {
        type: actionTypes.DELETE_STUDENT_REQUEST,
    }
}

export const actDeleteStudentSuccess = (data) => {
    return {
        type: actionTypes.DELETE_STUDENT_SUCCESS,
        payload: data
    }
}
export const actDeleteStudentFailed = (err) => {
    return {
        type: actionTypes.DELETE_STUDENT_FAILED,
        payload: err
    }
}
