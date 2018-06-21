import { combineReducers } from 'redux';
import UserInSession from  './user_in_sesion_reducer';
import GetLoginUser from './get_login_reducer';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    userInSession: UserInSession,
    getLoginUser: GetLoginUser,

});

export default rootReducer;
