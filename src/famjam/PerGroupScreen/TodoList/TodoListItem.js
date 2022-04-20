import {useDispatch} from "react-redux";
import {deleteTodo} from "../../actions/todo-action";

const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();
    const getDate=(date)=>{
        return new Date(date).toDateString()
    }
    return(
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-1">
                    <input class="form-check-input" type="checkbox" value="" onClick={() => deleteTodo(dispatch, todo)}/>
                </div>
                <div className="col-3">{todo.title}</div>
                <div className="col-3">{todo.createdBy}</div>
                <div className="col-2">{todo.assignedTo}</div>
                <div className="col-2">{getDate(todo.dueDate)}</div>
                <div className="col-1">
                    <button className="bg-transparent border-0">
                        <i className="fa-solid fa-pen fa-inverse"/>
                    </button>
                    <button className="bg-transparent border-0">
                        <i className="fas fa-solid fa-comment ms-2 fa-inverse"/>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem;