import {useDispatch} from "react-redux";

const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();

    return(
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-4">{todo.title}</div>
                <div className="col-3">{todo.createdBy}</div>
                <div className="col-3">{todo.assignedTo}</div>
                <div className="col-2">{todo.dueDate}</div>
            </div>
        </li>
    )
}

export default TodoListItem;