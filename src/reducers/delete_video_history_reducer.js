import {DELETE_VIDEO_HISTORY} from '../constants/actionTypes'
export default function(state = null, action) {
    switch (action.type) {
        case DELETE_VIDEO_HISTORY:
            state = action.payload.data;
        }
    return state;
}
