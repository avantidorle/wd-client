import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
import TodoList from "../TodoList";
import {createTodo} from "../../actions/todo-action";
import React, {useState} from 'react'
import {useDispatch} from "react-redux";

const TodoScreen = () => {
    const [disp, setDisp ] = useState("Hide");
    const [todoItem, setTodoItem] = useState({todo:''});
    const dispatch = useDispatch();
    return(
        <>
            <div className="row">
                <div className="col-11"><h1>Todo</h1></div>
                <div className="col-1 mt-2"><i class="fa-xl fa-solid fa-circle-plus float-end mt-2 me-4"></i></div>
            </div>

            <TodoList/>

            {disp === "Show" && <></>}
            {disp === "Hide" &&
                <div className="mt-2">
                    <button type="button" class="btn btn-dark" onClick={() => setDisp("Show")}>
                    <i className="fa-solid fa-circle-plus fa-xl me-2"></i> Add Task</button>
                </div>
            }
            {disp === "Hide" && <></>}
            {disp === "Show" &&
                    <div className="border border-dark rounded mt-2">
                        <div className="row">
                            <div className="col-11">
                                <input type="text" className="form-control-plaintext ps-2" placeholder="Title"
                                onChange={(event) => setTodoItem({
                                    ...todoItem,
                                    title: event.target.value
                                })} />
                            </div>
                            <div className="col-1">
                                <i class="fa fa-window-close float-end fa-xl me-2 mt-4" onClick={() => setDisp("Hide")}></i>
                            </div>
                        </div>
                        <div><textarea className="form-control" rows="3" placeholder="Description"
                            onChange={(event) => setTodoItem({
                                ...todoItem,
                                description: event.target.value
                            })}>
                        </textarea></div>
                        <div className="row mt-2 mb-2">
                            <div className="col-2">

                            <input type="date" className="form-control-plaintext text-center text-secondary border border-dark rounded"
                                onChange={(event) => setTodoItem({
                                ...todoItem,
                                dueDate: event.target.value
                                })}/>
                            </div>
                            <div className="col-8">
                            <div className="dropdown">
                              <button className="btn btn-transparent dropdown-toggle border border-dark" type="button" id="dropdownMenuButton"
                              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Assign to
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">User1</a>
                                <a className="dropdown-item" href="#">User2</a>
                              </div>
                            </div>
                            </div>
                            <div className="col-2">
                                <button type="button" className="btn btn-success rounded-pill float-end me-2"
                                onClick={() => createTodo(dispatch, todoItem) && setDisp("Hide")}>
                                Add Task</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default TodoScreen;