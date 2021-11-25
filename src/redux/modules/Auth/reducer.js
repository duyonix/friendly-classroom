import * as actionTypes from "./constants";

const initialStateLogin = {
    loading: false,
    data: null,
    error: null
}

export const loginReducer = (state = initialStateLogin, { type, payload }) => {
    switch (type) {

        case actionTypes.LOGIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.LOGIN_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.LOGIN_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.LOGIN_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default:
            return { ...state };
    }
}

const initialStateRegister = {
    loading: false,
    data: null,
    error: null
}

export const registerReducer = (state = initialStateRegister, { type, payload }) => {
    switch (type) {
        case actionTypes.REGISTER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.REGISTER_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state }
        case actionTypes.REGISTER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state }
        case actionTypes.REGISTER_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state }
        default:
            return { ...state }
    }
}


