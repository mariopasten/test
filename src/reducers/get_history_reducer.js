import {GET_HISTORY_DATA} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_HISTORY_DATA:
            state = action.payload.data;
        }
    return state;
}
