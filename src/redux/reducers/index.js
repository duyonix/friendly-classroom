import { combineReducers } from 'redux';
import loginReducer from '../modules/Login/reducer';
import registerReducer from '../modules/Register/reducer';
import { fetchUserInfoReducer, createClassroomReducer, joinClassroomReducer } from '../modules/Home/reducer';

const reducer = combineReducers({
    // Add reducers here
    loginReducer,
    registerReducer,
    fetchUserInfoReducer,
    createClassroomReducer,
    joinClassroomReducer
});

export default reducer;
