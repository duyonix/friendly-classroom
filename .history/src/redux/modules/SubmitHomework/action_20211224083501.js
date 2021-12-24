import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const actFetchSubmission = (homeworkId, studentId) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;
    return (dispatch) => {
        dispatch(actHomeworkRequest());
        axios({
            url: pathAPI + "submission/getSubmission",
            method: "POST",
            data: { homeworkId, studentId },
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actSubmissionSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actSubmissionFailed(err));
            })
    }
}

export const resetSubmission = () => {
    return (dispatch) => {
        dispatch(actSubmissionReset());
    }
}

export const actSubmissionRequest = () => {
    return {
        type: actionTypes.SUBMISSION_REQUEST,
    }
}

export const actSubmissionReset = () => {
    return {
        type: actionTypes.SUBMISSION_RESET,
    }
}

export const actSubmissionSuccess = (data) => {
    return {
        type: actionTypes.SUBMISSION_SUCCESS,
        payload: data
    }
}
export const actSubmissionFailed = (err) => {
    return {
        type: actionTypes.SUBMISSION_FAILED,
        payload: err
    }
}









export const actFetch = (id) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;
    return (dispatch) => {
        dispatch(actHomeworkRequest());
        axios({
            url: pathAPI + "homework/getAllHomeworkMetadataOfClass",
            method: "POST",
            data: { classroomId: id },
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