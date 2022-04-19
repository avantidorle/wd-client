import React from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {findAllTodo} from "../../actions/todo-action";
import TodoListItem from "./TodoListItem.js"

const TodoList = () => {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();
    useEffect(() => {findAllTodo(dispatch)});
  return (
  <>
    <ul className="list-group">
      {
        todos.map && todos.map(todo =>
          <TodoListItem key={todo._id}
                        todo={todo}/>)
      }
    </ul>
   </>
  );
}

export default TodoList;