import {FIND_GOOGLE_USER} from "../actions/users-action";

const googleReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_GOOGLE_USER:
            return action.gusers;
        default:
            return state;
    }
}

export default googleReducer;