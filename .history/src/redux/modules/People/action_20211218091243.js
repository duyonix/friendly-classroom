import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const actInviteStudent = (classroomId) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actInviteStudentRequest());
        axios({
            url: pathAPI + "classroom/61b47551d1eb115c85cfc27b/inviteStudent",
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actInviteStudentSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actInviteStudentFailed(err));
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


export const actDeleteStudent = (classroomId) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actDeleteStudentRequest());
        axios({
            url: pathAPI + "classroom/" + classroomId + "/removeStudent",
            method: "PUT",
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
