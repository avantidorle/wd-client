import * as service from '../services/group-service';

export const FIND_ALL_GROUPS = 'FIND_ALL_GROUPS';

export const findAllGroups = async (dispatch) => {
 const groups = await service.findAllGroups();
 dispatch({
   type: FIND_ALL_GROUPS,
   groups
 });
}