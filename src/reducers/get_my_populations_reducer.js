import {GET_MY_POPULATIONS} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_MY_POPULATIONS:
            state = action.payload.data;
        }
    return state;
}
