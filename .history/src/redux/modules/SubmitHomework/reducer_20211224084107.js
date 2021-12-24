import * as actionTypes from "./constants";

const submissionState = {
    loading: false,
    data: null,
    err: null,

}

export const submissionReducer = (state = submissionState, { type, payload }) => {
    switch (type) {

        case actionTypes.HOMEWORK_DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.HOMEWORK_DETAIL_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.HOMEWORK_DETAIL_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.HOMEWORK_DETAIL_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };

        default:
            return { ...state };
    }
}




const submit_homeworkState = {
    loading: false,
    data: null,
    err: null,

}

export const submit_homeworkReducer = (state = submithomeworkState, { type, payload }) => {
    switch (type) {

        case actionTypes.HOMEWORK_DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.HOMEWORK_DETAIL_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.HOMEWORK_DETAIL_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.HOMEWORK_DETAIL_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };

        default:
            return { ...state };
    }
}