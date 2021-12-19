import * as actionTypes from "./constants";

const peopleState = {
    loading: false,
    data: null,
    err: null,
    searchKey: ""
}

export const peopleReducer = (state = peopleState, { type, payload }) => {
    switch (type) {

        case actionTypes.HOMEWORK_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.HOMEWORK_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.HOMEWORK_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.HOMEWORK_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default:
            return { ...state };
    }
}




const documentState = {
    loading: false,
    data: null,
    err: null,
    searchKey: ""
}

export const documentReducer = (state = documentState, { type, payload }) => {
    switch (type) {

        case actionTypes.DOCUMENT_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.DOCUMENT_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.DOCUMENT_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.DOCUMENT_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default:
            return { ...state };
    }
}

