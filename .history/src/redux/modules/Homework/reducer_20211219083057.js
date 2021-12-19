import * as actionTypes from "./constants";

const homeworkState = {
    loading: false,
    data: [
        {
            topic: "Chương 1",
            homeworks: [
                {
                    title: "Nhân biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz",
                    deadline: "20.11.2021",
                },
                {
                    title: "Chia biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz2",
                    deadline: "20.11.2021",
                },
            ],
        },
        {
            topic: "Chương 2",
            homeworks: [
                {
                    title: "Cộng biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz",
                    deadline: "20.11.2021",
                },
                {
                    title: "Trừ biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz2",
                    deadline: "20.11.2021",
                },
            ],
        },
        {
            topic: "Chương 3",
            homeworks: [
                {
                    title: "Cộng biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz",
                    deadline: "20.11.2021",
                },
                {
                    title: "Trừ biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz2",
                    deadline: "20.11.2021",
                },
            ],
        },
        {
            topic: "Chương 4",
            homeworks: [
                {
                    title: "Cộng biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz",
                    deadline: "20.11.2021",
                },
                {
                    title: "Trừ biểu thức",
                    attachedFiles: ["https1", "https2"],
                    _id: "abcxyz2",
                    deadline: "20.11.2021",
                },
            ],
        },
    ],
    err: null,
    searchKey: ""
}

export const homeworkReducer = (state = homeworkState, { type, payload }) => {
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
    data: [
        {
            topic: "Chương 1",
            documents: [
                {
                    title: "Nhân biểu thức",
                    _id: "abcxyz",
                    createdAt: "20.11.2021",
                },
                {
                    title: "Chia biểu thức",

                    _id: "abcxyz2",
                    createdAt: "20.12.2021",
                },
            ],
        },
        {
            topic: "Chương 2",
            documents: [
                {
                    title: "Nhân biểu thức",
                    _id: "abcxyz",
                    createdAt: "20.11.2021",
                },
                {
                    title: "Chia biểu thức",

                    _id: "abcxyz2",
                    createdAt: "20.12.2021",
                },
            ],
        },
        {
            topic: "Chương 3",
            documents: [
                {
                    title: "Nhân biểu thức",
                    _id: "abcxyz",
                    createdAt: "20.11.2021",
                },
                {
                    title: "Chia biểu thức",

                    _id: "abcxyz2",
                    createdAt: "20.12.2021",
                },
            ],
        },
    ],
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



const documentDetailState = {
    loading: false,
    data: null,
    err: null,

}

export const documentDetailReducer = (state = documentDetailState, { type, payload }) => {
    switch (type) {

        case actionTypes.DOCUMENT_DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.DOCUMENT_DETAIL_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.DOCUMENT_DETAIL_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        case actionTypes.DOCUMENT_DETAIL_RESET:
            state.loading = false;
            state.data = null;
            state.err = null;
            return { ...state };
        default:
            return { ...state };
    }
}
