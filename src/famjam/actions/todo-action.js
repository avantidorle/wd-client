import * as service from '../services/todo-service';

export const FIND_ALL_TODO = 'FIND_ALL_TODO';

export const findAllTodo = async (dispatch) => {
 const todo = await service.findAllTodo();
 console.log("here3 ",todo);
 dispatch({
   type: FIND_ALL_TODO,
   todo
 });
}