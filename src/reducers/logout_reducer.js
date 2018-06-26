import {LOGOUT_USER} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case LOGOUT_USER:
            state = action.payload.data;
        }
    return state;
}
