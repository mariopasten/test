import {GET_COURSES_BY_POPULATION} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_COURSES_BY_POPULATION:
            let d = new Date();
            state = [action.payload.data, d];
        }
    return state;
}
