import {FIND_ALL_GROUPS} from "../actions/group-action";

const groupReducer = (state = [], action) => {
  switch (action.type) {
     case FIND_ALL_GROUPS:
        return action.groups;
     default:
        return state;
  }
}

export default groupReducer;