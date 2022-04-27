import {FIND_ALL_USERS,UPDATE_USERS} from "../actions/users-action";

const usersReducer = (state = [], action) => {
  switch (action.type) {
  case UPDATE_USERS:
  console.log(state);
            return state.map(
            users => users._id === action.users._id ?
            action.users : users);
     case FIND_ALL_USERS:
        return action.users;

     default:
                  return state;
              }
          }

     export default usersReducer;