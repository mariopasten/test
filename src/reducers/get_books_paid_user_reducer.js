import {GET_BOOK_PAID} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case GET_BOOK_PAID:
            state = action.payload.data;
        }
    return state;
}
