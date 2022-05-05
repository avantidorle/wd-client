import {FIND_ALL_USERS, FIND_ONE_USER, CREATE_USER,UPDATE_USERS, FIND_USER_ID} from "../actions/users-action";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_USERS:
             console.log(state);
            return state.map(
            users => users._id === action.users._id ?
            action.users : users);
        case FIND_ALL_USERS:
            return action.users;
        case FIND_USER_ID:
            return action.users;
        case FIND_ONE_USER:
            if(action.users === null){
                sessionStorage.setItem("dbUserEmail",undefined);
            }else{
                sessionStorage.setItem("dbUserEmail",action.users.email);
                sessionStorage.setItem("currentUserId",action.users._id);
                console.log("currentUserId",sessionStorage.getItem("currentUserId"));
            }
            return action.users;
        case CREATE_USER:
            const newUser = {
                users: action.users,
            }
            return [
                ...state,
                newUser,
            ];
        default:
            return state;
    }
}

export default userReducer;
