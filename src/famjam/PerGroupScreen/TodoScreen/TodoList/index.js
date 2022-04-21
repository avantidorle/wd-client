import React from "react";
import {findAllTodo} from "../../../actions/todo-action";
import TodoListItem from "./TodoListItem.js"

const TodoList = ({todos, section}) => {
  return (
  <>
  <div>
    <ul className="list-group">
      {
        todos && todos.map(todo =>
          <TodoListItem todo={todo} section={section}/>)
      }
    </ul>
   </div>
   </>
  );
}

export default TodoList;