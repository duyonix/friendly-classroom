import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from '../../containers/HomeTemplate/Auth/modules/reducer';

const reducer = combineReducers([
    // Add reducers here
    loginReducer,
    registerReducer
]);

export default reducer;
