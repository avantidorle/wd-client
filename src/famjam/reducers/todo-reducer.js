import {FIND_ALL_TODO} from "../actions/todo-action";

const todoReducer = (state = [], action) => {

  switch (action.type) {

     case FIND_ALL_TODO:
        console.log("here2 ",action);
        return action.todo;
     default:
        return state;
  }
}

export default todoReducer;