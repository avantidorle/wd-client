import React from "react";
import {findAllTodo} from "../../../actions/todo-action";
import TodoListItem from "./TodoListItem.js"

const TodoList = ({todos, sid}) => {
  return (
  <>
  <div>
    <ul className="list-group">
      {
        todos && todos.map(todo =>
          <TodoListItem todo={todo} sid={sid}/>)
      }
    </ul>
   </div>
   </>
  );
}

export default TodoList;