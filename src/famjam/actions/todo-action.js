import * as service from '../services/todo-service';

export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FIND_ALL_SECTIONS = 'FIND_ALL_SECTIONS';
export const CREATE_SECTION = 'CREATE_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';

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
    });
}

export const updateTodo = async (dispatch, todo, sid) => {
    const response = await service.updateTodo(todo, sid);
    dispatch({
        type: UPDATE_TODO,
        todo
    });
}

export const createSection = async (dispatch, section) => {
    const newSection = await service.createSection(section);
    dispatch({
        type: CREATE_SECTION,
        newSection
    });
}

export const deleteSection = async (dispatch, section) => {
    const response = await service.deleteSection(section);
    dispatch({
        type: DELETE_SECTION,
        section
    });
}