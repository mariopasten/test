import {GET_LOGIN} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_LOGIN:
            state = action.payload.data;
        }
    return state;
}
