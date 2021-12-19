import * as actionTypes from "./constants";

const initialState = {
    loading: false,
    data: null,
    err: null,
    searchKey: ""
}

const loginReducer = (state = initialState, { type, payload }) => {
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

export default loginReducer;
