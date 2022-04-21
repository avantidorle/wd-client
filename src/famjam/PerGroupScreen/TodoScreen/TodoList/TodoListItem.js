import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../../actions/todo-action";
import EditPopup from "./EditPopup.js";
import InfoPopup from "./InfoPopup.js";

const TodoListItem = ({todo, section}) => {

    const sid = section._id;
    const dispatch = useDispatch();
    const getDate=(date)=>{
        return new Date(date).toDateString()
    }
    return(
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-1">
                    <input class="form-check-input" type="checkbox" title="Checking will remove the task" value="" onClick={() => deleteTodo(dispatch, todo, sid)}/>
                </div>
                <div className="col-8">
                    <div>{todo.title}</div>
                    <div className="row">
                        <div><small className="me-4 text-secondary">Created by: {todo.createdBy}</small>
                        <small className="me-4 text-secondary">Assigned to: {todo.assignedTo}</small></div>
                    </div>
                </div>
                <div className="col-2">{getDate(todo.dueDate)}</div>
                <div className="col-1">
                    <button className="bg-transparent border-0">
                       <EditPopup sid={sid} todo={todo}/>
                    </button>
                    <button className="bg-transparent border-0">
                        <InfoPopup todo={todo}/>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem;