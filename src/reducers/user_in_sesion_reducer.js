import {USER_IN_SESSION} from '../constants/actionTypes'

export default function(state = null, action) {
    switch (action.type) {
        case USER_IN_SESSION:
            state = action.payload.data;
    }
   return state;
}
