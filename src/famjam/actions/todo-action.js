import * as service from '../services/todo-service';

export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FIND_ALL_SECTIONS = 'FIND_ALL_SECTIONS';
export const CREATE_SECTION = 'CREATE_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';

export const findAllSections = async (dispatch, gid) => {
 const sections = await service.findAllSections(gid);
 dispatch({
   type: FIND_ALL_SECTIONS,
   sections
 });
}

export const createTodo = async (dispatch, todo, sid, gid) => {
    const response = await service.CreateTodo(todo, sid, gid);
    dispatch({
        type: CREATE_TODO,
        todo
    });
}

export const deleteTodo = async (dispatch, todo, sid, gid) => {
    const response = await service.deleteTodo(todo,sid, gid);
    dispatch({
        type: DELETE_TODO,
        todo
    });
}

export const updateTodo = async (dispatch, todo, sid, gid) => {
    const response = await service.updateTodo(todo, sid, gid);
    dispatch({
        type: UPDATE_TODO,
        todo
    });
}

export const createSection = async (dispatch, section, gid) => {
    const newSection = await service.createSection(section, gid);
    dispatch({
        type: CREATE_SECTION,
        newSection
    });
}

export const deleteSection = async (dispatch, section, gid) => {
    const response = await service.deleteSection(section, gid);
    dispatch({
        type: DELETE_SECTION,
        section
    });
}