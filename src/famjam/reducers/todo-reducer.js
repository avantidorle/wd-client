import {FIND_ALL_TODO, CREATE_TODO, DELETE_TODO} from "../actions/todo-action";

const todoReducer = (state = [], action) => {

  switch (action.type) {

     case FIND_ALL_TODO:
        return action.todo;
     case DELETE_TODO:
        return state.filter(todo => todo._id !== action.todo._id);
     case CREATE_TODO:
        const newTodo = {
            todo: action.todo,
        }
        return [
            ...state,
            newTodo,
        ];
     default:
        return state;
  }
}

export default todoReducer;