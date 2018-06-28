import {GET_USER_AWARDS_DATA} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_USER_AWARDS_DATA:
            state = action.payload.data;
        }
    return state;
}
