import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const actFetchMemberList = () => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actMemberRequest());
        axios({
            url: pathAPI + "homework/getAllMemberMetadataOfClass",
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actMemberSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actMemberFailed(err));
            })
    }
}

export const resetMember = () => {
    return (dispatch) => {
        dispatch(actMemberReset());
    }
}

export const actMemberRequest = () => {
    return {
        type: actionTypes.HOMEWORK_REQUEST,
    }
}

export const actMemberReset = () => {
    return {
        type: actionTypes.HOMEWORK_RESET,
    }
}

export const actMemberSuccess = (data) => {
    return {
        type: actionTypes.HOMEWORK_SUCCESS,
        payload: data
    }
}
export const actMemberFailed = (err) => {
    return {
        type: actionTypes.HOMEWORK_FAILED,
        payload: err
    }
}





export const actInviteStudent = (classroomId, username) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actInviteStudentRequest());
        axios({
            url: pathAPI + "classroom/" + classroomId + "/inviteStudent",
            method: "PUT",
            data: { username: username },
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


export const actDeleteStudent = (classroomId, idStudent) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actDeleteStudentRequest());
        axios({
            url: pathAPI + "classroom/" + classroomId + "/removeStudent",
            method: "PUT",
            data: { studentId: idStudent },
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
