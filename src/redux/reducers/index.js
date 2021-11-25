import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from '../modules/Auth/reducer';

const reducer = combineReducers([
    // Add reducers here
    loginReducer,
    registerReducer
]);

export default reducer;
