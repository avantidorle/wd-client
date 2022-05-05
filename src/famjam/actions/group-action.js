import * as service from '../services/group-service';

export const FIND_ALL_GROUPS = 'FIND_ALL_GROUPS';
export const CREATE_GROUP = 'CREATE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const ADD_USER = 'ADD_USER';


export const addUserToGroup = async (dispatch, email, gid) => {
    const users = await service.addUserToGroup(email, gid);
        dispatch({
            type: ADD_USER,
            users
        });
}

export const findAllGroups = async (dispatch) => {
 const groups = await service.findAllGroups();
 dispatch({
   type: FIND_ALL_GROUPS,
   groups
 });
}

export const createGroup = async (dispatch,groupData) => {
    const newGroup = await service.createGroup(groupData);
    dispatch({
        type: CREATE_GROUP,
        newGroup
    });
}


export const deleteGroup = async (dispatch, gid) => {
    const response = await service.deleteGroup(gid);
    dispatch({
        type: DELETE_GROUP,
        response
    });
}

export const signOut = () => {
    window.location.href = "/";
    //setIsLoggedIn(false);
    sessionStorage.clear();
}
