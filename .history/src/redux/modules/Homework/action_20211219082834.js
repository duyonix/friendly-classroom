import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

export const actFetchHomeworkList = (id) => {
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



export const actFetchHomeworkDetailList = (id) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;
    return (dispatch) => {
        dispatch(actHomeworkDetailRequest());
        axios({
            url: pathAPI + "homework/getHomeworkDetail",
            method: "POST",
            data: { homeworkId: id },
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actHomeworkDetailSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actHomeworkDetailFailed(err));
            })
    }
}

export const resetHomeworkDetail = () => {
    return (dispatch) => {
        dispatch(actHomeworkDetailReset());
    }
}

export const actHomeworkDetailRequest = () => {
    return {
        type: actionTypes.HOMEWORK_DETAIL_REQUEST,
    }
}

export const actHomeworkDetailReset = () => {
    return {
        type: actionTypes.HOMEWORK_DETAIL_RESET,
    }
}

export const actHomeworkDetailSuccess = (data) => {
    return {
        type: actionTypes.HOMEWORK_DETAIL_SUCCESS,
        payload: data
    }
}
export const actHomeworkDetailFailed = (err) => {
    return {
        type: actionTypes.HOMEWORK_DETAIL_FAILED,
        payload: err
    }
}




export const actFetchDocumentList = (id) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(actDocumentRequest());
        axios({
            url: pathAPI + "document/getAllDocumentMetadataOfClass",
            method: "POST",
            data: { classroomId: id },
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


export const actFetchDocumentDetailList = (id) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;
    return (dispatch) => {
        dispatch(actDocumentDetailRequest());
        axios({
            url: pathAPI + "homework/getDocumentDetail",
            method: "POST",
            data: { homeworkId: id },
            headers: {
                "Authorization": "Bearer " + accessToken
            },
        })
            .then((res) => {

                dispatch(actDocumentDetailSuccess(res.data));
            })
            .catch((err) => {
                dispatch(actDocumentDetailFailed(err));
            })
    }
}

export const resetDocumentDetail = () => {
    return (dispatch) => {
        dispatch(actDocumentDetailReset());
    }
}

export const actDocumentDetailRequest = () => {
    return {
        type: actionTypes.DOCUMENT_DETAIL_REQUEST,
    }
}

export const actDocumentDetailReset = () => {
    return {
        type: actionTypes.DOCUMENT_DETAIL_RESET,
    }
}

export const actDocumentDetailSuccess = (data) => {
    return {
        type: actionTypes.DOCUMENT_DETAIL_SUCCESS,
        payload: data
    }
}
export const actDocumentDetailFailed = (err) => {
    return {
        type: actionTypes.DOCUMENT_DETAIL_FAILED,
        payload: err
    }
}