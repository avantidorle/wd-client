import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../../../actions/todo-action";

import {Form, Button} from "react-bootstrap"
import Popup from 'reactjs-popup';

const EditPopup = ({sid, todo}) => {

    const [title, setTitle] = useState(todo.title);
    const [assignedTo, setAssignedTo] = useState(todo.assignedTo);
    const [dueDate, setDueDate] = useState(todo.dueDate);

    const dispatch = useDispatch();

    return (
    <>
                        <Popup trigger = {
                              <i className="fa-solid fa-pen fa-inverse"/>
                           } position="left">
                           <div className="row align-items-center border border-2 border-success rounded">
                              <div className="col bg-secondary rounded">
                                 <div><h4 className={"bg-secondary text-center text-dark mt-2"}>Edit todo</h4></div>
                                 <Form>
                                    <div className="mt-1">
                                        <h6 className="text-dark" > Title </h6>
                                    </div>
                                    <div>
                                        <Form.Group>
                                        <Form.Control as="textarea" placeholder="Title" rows={2} name="title" defaultValue={title}
                                            onChange={(e)=> setTitle(e.target.value)}/>
                                        </Form.Group>
                                    </div>

                                    <div className="d-grid">
                                        <h6 className=" text-dark mt-2 color-secondary">Assigned to</h6>
                                            <div className="dropdown d-grid">
                                                <button className="dropdown-toggle border border-secondary text-dark payee" type="button"
                                                   id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {assignedTo}
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">User1</a>
                                                    <a className="dropdown-item" href="#">User2</a>
                                                </div>
                                            </div>
                                    </div>

                                    <div className="mt-2">
                                        <h6 className="text-dark">Due date</h6>
                                    </div>
                                    <div>
                                        <Form.Group>
                                            <Form.Control type="Date" name="date" value={dueDate}
                                            onChange={(e)=> setDueDate(e.target.value)}/>
                                        </Form.Group>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-dark mt-2 mb-2" variant="success" type="button" block
                                        onClick={() => updateTodo(dispatch,
                                        {   ...todo,
                                            title: title,
                                            assignedTo: assignedTo,
                                            dueDate: dueDate,
                                        }, sid)} >
                                        Save
                                        </button>
                                    </div>
                                 </Form>
                              </div>
                           </div>
                        </Popup>
    </>
    )
}

export default EditPopup;