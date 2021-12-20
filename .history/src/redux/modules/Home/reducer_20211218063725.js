import * as actionTypes from "./constants";


const homeworkInfo = {
    loading: false,
    data: null,
    err: null,
    searchKey: ""
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



