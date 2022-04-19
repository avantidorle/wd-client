import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
import TodoList from "../TodoList";

const TodoScreen = () => {
    return(
        <>
            <div className="row">
                <div className="col-11"><h1>Todo</h1></div>
                <div className="col-1 mt-2"><i class="fa-xl fa-solid fa-circle-plus"></i></div>
            </div>

            <TodoList/>

            <ul className="list-group mt-2">
                <li className="list-group-item">
                    <div>
                        <div className="row">
                            <div className="col-11">
                                <input type="text" className="form-control-plaintext" placeholder="Title"/>
                            </div>
                            <div className="col-1"><i class="fa-solid fa-xmark"></i></div>
                        </div>
                        <div><textarea className="form-control" rows="3" placeholder="Description"></textarea></div>
                        <div className="row pt-2">
                            <div className="col-2"><input type="date" className="form-control-plaintext"/></div>
                            <div className="col-8">
                            <div className="dropdown">
                              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
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
                                <button type="button" class="btn btn-success btn-lg rounded-pill">Add Task</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default TodoScreen;