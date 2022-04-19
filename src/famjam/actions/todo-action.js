import * as service from '../services/todo-service';

export const FIND_ALL_TODO = 'FIND_ALL_TODO';

export const findAllTodo = async (dispatch) => {
 const todo = await service.findAllTodo();
 dispatch({
   type: FIND_ALL_TODO,
   todo
 });
}