import {FORGOT_PASSWORD} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case FORGOT_PASSWORD:
            state = action.payload.data;
        }
    return state;
}
