import {REGISTER_NEW_USER} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case REGISTER_NEW_USER:
            state = action.payload.data;
        }
    return state;
}
