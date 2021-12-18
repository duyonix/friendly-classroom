import * as actionTypes from "./constants";

// User Info Reducer
const homeworkInfo = {
    loading: false,
    data: null,
    err: null
}

export const fetchUserInfoReducer = (state = homeworkInfo, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_USER_INFO_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_USER_INFO_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_USER_INFO_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default: return { ...state };
    }
}

// Create Classroom Reducer
const stateCreateClassroom = {
    loading: false,
    data: null,
    err: null
}

export const createClassroomReducer = (state = stateCreateClassroom, { type, payload }) => {
    switch (type) {
        case actionTypes.CREATE_CLASSROOM_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.CREATE_CLASSROOM_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.CREATE_CLASSROOM_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.CREATE_CLASSROOM_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default: return { ...state };
    }
}

// Join Classroom Reducer
const stateJoinClassroom = {
    loading: false,
    data: null,
    err: null
}

export const joinClassroomReducer = (state = stateJoinClassroom, { type, payload }) => {
    switch (type) {
        case actionTypes.JOIN_CLASSROOM_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.JOIN_CLASSROOM_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.JOIN_CLASSROOM_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.JOIN_CLASSROOM_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default: return { ...state };
    }
}

