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
        type: actionTypes.HOMEWORK_REQUEST,
    }
}

export const actInviteStudentReset = () => {
    return {
        type: actionTypes.HOMEWORK_RESET,
    }
}

export const actInviteStudentSuccess = (data) => {
    return {
        type: actionTypes.HOMEWORK_SUCCESS,
        payload: data
    }
}
export const actInviteStudentFailed = (err) => {
    return {
        type: actionTypes.HOMEWORK_FAILED,
        payload: err
    }
}


export const actFetchDocumentList = () => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actDocumentRequest());
        axios({
            url: pathAPI + "homework/getAllDocumentMetadataOfClass",
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actDocumentSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actDocumentFailed(err));
            })
    }
}

export const resetDocument = () => {
    return (dispatch) => {
        dispatch(actDocumentReset());
    }
}

export const actDocumentRequest = () => {
    return {
        type: actionTypes.DOCUMENT_REQUEST,
    }
}

export const actDocumentReset = () => {
    return {
        type: actionTypes.DOCUMENT_RESET,
    }
}

export const actDocumentSuccess = (data) => {
    return {
        type: actionTypes.DOCUMENT_SUCCESS,
        payload: data
    }
}
export const actDocumentFailed = (err) => {
    return {
        type: actionTypes.DOCUMENT_FAILED,
        payload: err
    }
}
