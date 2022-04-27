import * as service from '../services/users-service';
export const FIND_ALL_USERS = 'FIND_ALL_USERS';
export const UPDATE_USERS = 'UPDATE_USERS';

export const findAllUsers = async (dispatch) => {
 const users = await service.findAllUsers();
 dispatch({
   type: FIND_ALL_USERS,
   users
 });
}

export const updateUsers = async (dispatch, users) => {
console.log(users);
 const status = await service.updateUsers(users);
 dispatch({
   type: UPDATE_USERS,
   users
 });
}