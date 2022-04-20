import * as service from '../services/todo-service';

export const FIND_ALL_TODO = 'FIND_ALL_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const findAllTodo = async (dispatch) => {
 const todo = await service.findAllTodo();
 dispatch({
   type: FIND_ALL_TODO,
   todo
 });
}

export const createTodo = async (dispatch, todo) => {

    const newTodo = await service.createTodo(todo);
    dispatch({
        type: CREATE_TODO,
        newTodo
    });
}

export const deleteTodo = async (dispatch, todo) => {
    const response = await service.deleteTodo(todo);
    dispatch({
        type: DELETE_TODO,
        todo
    })
}