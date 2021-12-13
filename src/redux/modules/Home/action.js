import axios from "axios";
import { pathAPI } from "../../../utils/constants";
import * as actionTypes from "./constants";

// action Fetch User Info
export const fetchUserInfo = () => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    // console.log("accessToken", accessToken);

    return (dispatch) => {
        dispatch(fetchUserInfoRequest());
        axios({
            url: pathAPI + "user/getInformation",
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
            .then(res => {
                dispatch(fetchUserInfoSuccess(res.data));
            })
            .catch(err => {
                // console.log(err.response.data);
                dispatch(fetchUserInfoFailed(err));
            }
            )
    }
}

const fetchUserInfoRequest = () => {
    return {
        type: actionTypes.FETCH_USER_INFO_REQUEST
    }
}

const fetchUserInfoSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USER_INFO_SUCCESS,
        payload: data
    }
}

const fetchUserInfoFailed = (err) => {
    return {
        type: actionTypes.FETCH_USER_INFO_FAILED,
        payload: err
    }
}


// action Create Classroom
export const createClassroom = (data) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(createClassroomRequest());
        axios({
            url: pathAPI + "classroom/create",
            method: "POST",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            data: data
        })
            .then(res => {
                alert("Tạo lớp học thành công");
                dispatch(createClassroomSuccess(res.data));
            })
            .catch(err => {
                // alert(err.response.data.message);
                dispatch(createClassroomFailed(err));
            }
            )
    }
}

export const resetCreateClassroom = () => {
    return (dispatch) => {
        dispatch(createClassroomReset());
    }

}

const createClassroomRequest = () => {
    return {
        type: actionTypes.CREATE_CLASSROOM_REQUEST
    }
}

const createClassroomSuccess = (data) => {
    return {
        type: actionTypes.CREATE_CLASSROOM_SUCCESS,
        payload: data
    }
}

const createClassroomFailed = (err) => {
    return {
        type: actionTypes.CREATE_CLASSROOM_FAILED,
        payload: err
    }
}

const createClassroomReset = () => {
    return {
        type: actionTypes.CREATE_CLASSROOM_RESET
    }
}


// action Join Classroom
export const joinClassroom = (data) => {
    let accessToken = "";
    if (localStorage.getItem("User"))
        accessToken = JSON.parse(localStorage.getItem("User")).token;

    return (dispatch) => {
        dispatch(joinClassroomRequest());
        axios({
            url: pathAPI + "classroom/join",
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + accessToken
            },
            data: data
        })
            .then(res => {
                alert("Tham gia lớp học thành công");
                dispatch(joinClassroomSuccess(res.data));
            })
            .catch(err => {
                // alert(err.response.data.message);
                dispatch(joinClassroomFailed(err));
            }
            )
    }
}

export const resetJoinClassroom = () => {
    return (dispatch) => {
        dispatch(joinClassroomReset());
    }
}


const joinClassroomRequest = () => {
    return {
        type: actionTypes.JOIN_CLASSROOM_REQUEST
    }
}

const joinClassroomSuccess = (data) => {
    return {
        type: actionTypes.JOIN_CLASSROOM_SUCCESS,
        payload: data
    }
}

const joinClassroomFailed = (err) => {
    return {
        type: actionTypes.JOIN_CLASSROOM_FAILED,
        payload: err
    }
}

const joinClassroomReset = () => {
    return {
        type: actionTypes.JOIN_CLASSROOM_RESET
    }
}



