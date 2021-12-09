import { combineReducers } from 'redux';
import loginReducer from '../modules/Login/reducer';
import registerReducer from '../modules/Register/reducer';
;

const reducer = combineReducers({
    // Add reducers here
    loginReducer,
    registerReducer,
});

export default reducer;
