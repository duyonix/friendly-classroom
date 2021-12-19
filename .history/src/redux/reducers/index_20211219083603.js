import { combineReducers } from 'redux';
import loginReducer from '../modules/Login/reducer';
import registerReducer from '../modules/Register/reducer';
import {
    fetchUserInfoReducer,
    createClassroomReducer,
    joinClassroomReducer,
    updateClassroomReducer,
    deleteClassroomReducer,
    leaveClassroomReducer
} from '../modules/Home/reducer';
import {
    homeworkReducer,
    documentReducer,

    documentDetailReducer
} from '../modules/Homework/reducer';
import {
    peopleReducer,
    inviteStudentReducer,
    deleteStudentReducer
} from '../modules/People/reducer';
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
    homeworkReducer,
    documentReducer,
    peopleReducer,
    inviteStudentReducer,
    deleteStudentReducer,

    documentDetailReducer
});

export default reducer;
