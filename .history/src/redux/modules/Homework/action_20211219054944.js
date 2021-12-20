import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const actFetchHomeworkList = (id) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;
    console.log(accessToken);
    return (dispatch) => {
        dispatch(actHomeworkRequest());
        axios({
            url: pathAPI + "homework/getAllHomeworkMetadataOfClass",
            method: "POST",
            payload: { classroomId: id },
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
