import * as service from '../services/todo-service';

export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FIND_ALL_SECTIONS = 'FIND_ALL_SECTIONS';

export const findAllSections = async (dispatch) => {
 const sections = await service.findAllSections();
 dispatch({
   type: FIND_ALL_SECTIONS,
   sections
 });
}

export const createTodo = async (dispatch, todo, sid) => {
    const response = await service.createTodo(todo, sid);
    dispatch({
        type: CREATE_TODO,
        todo
    });
}

export const deleteTodo = async (dispatch, todo, sid) => {
    const response = await service.deleteTodo(todo,sid);
    dispatch({
        type: DELETE_TODO,
        todo
    })
}