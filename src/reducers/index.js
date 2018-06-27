import { combineReducers } from 'redux';
import UserInSession from  './user_in_sesion_reducer';
import GetLoginUser from './get_login_reducer';
import RegisterNewUser from './register_new_user_reducer';
import MyCourses from './get_my_courses_reducer';
import LogOutUser from './logout_reducer';
import MyPopulations from './get_my_populations_reducer';
import CoursesByPopulation from './get_courses_by_population_reducer';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    userInSession: UserInSession,
    getLoginUser: GetLoginUser,
    registerNewUser: RegisterNewUser,
    myCourses: MyCourses,
    logOutUser: LogOutUser,
    myPopulations: MyPopulations,
    coursesByPopulation: CoursesByPopulation,
});

export default rootReducer;
