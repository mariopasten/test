import { combineReducers } from 'redux';
import UserInSession from  './user_in_sesion_reducer';
import GetLoginUser from './get_login_reducer';
import RegisterNewUser from './register_new_user_reducer';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    userInSession: UserInSession,
    getLoginUser: GetLoginUser,
    registerNewUser: RegisterNewUser,
});

export default rootReducer;
