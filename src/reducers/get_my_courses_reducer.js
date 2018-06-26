import {GET_MY_COURSES} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_MY_COURSES:
            state = action.payload.data;
        }
    return state;
}
