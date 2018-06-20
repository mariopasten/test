import { combineReducers } from 'redux';
import UserInSession from  './user_in_sesion_reducer';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    userInSession: UserInSession,

});

export default rootReducer;
