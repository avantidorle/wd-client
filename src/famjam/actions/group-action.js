import * as service from '../services/group-service';

export const FIND_ALL_GROUPS = 'FIND_ALL_GROUPS';
export const CREATE_GROUP = 'CREATE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';


export const findAllGroups = async (dispatch) => {
 const groups = await service.findAllGroups();
 dispatch({
   type: FIND_ALL_GROUPS,
   groups
 });
}

export const createGroup = async (dispatch, groupName) => {
    const newGroup = await service.createGroup(groupName);
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
