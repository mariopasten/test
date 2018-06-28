import {GET_INFINITE_DATA} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_INFINITE_DATA:
            state = action.payload.data;
        }
    return state;
}
