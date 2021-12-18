import { combineReducers } from 'redux';
import loginReducer from '../modules/Login/reducer';
import registerReducer from '../modules/Register/reducer';
import { fetchUserInfoReducer, createClassroomReducer, joinClassroomReducer, updateClassroomReducer, deleteClassroomReducer, leaveClassroomReducer } from '../modules/Home/reducer';
import { fetchAllPostReducer, fetchSinglePostReducer, createPostReducer, updatePostReducer, deletePostReducer } from '../modules/Stream/Post/reducer';
import { createCommentReducer, updateCommentReducer, deleteCommentReducer } from '../modules/Stream/Comment/reducer';

const reducer = combineReducers({
    // Add reducers here
    loginReducer,
    registerReducer,
    fetchUserInfoReducer,
    createClassroomReducer,
    joinClassroomReducer,
    updateClassroomReducer,
    deleteClassroomReducer,
    leaveClassroomReducer,
    fetchAllPostReducer,
    fetchSinglePostReducer,
    createPostReducer,
    updatePostReducer,
    deletePostReducer,
    createCommentReducer,
    updateCommentReducer,
    deleteCommentReducer,
});

export default reducer;
