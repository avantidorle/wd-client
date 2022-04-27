import {useDispatch} from "react-redux";
import "./expense.css"
import {Form, Button} from "react-bootstrap"
import Popup from 'reactjs-popup';
import {deleteExpense, updateExpense} from "../../actions/expense-action";
import React, {useState} from "react";

const ExpenseListItem = ({expense, gid}) => {
    const dispatch = useDispatch();
    const id = expense._id;
    const [title, setTitle] = useState(expense.title);
    const [amount, setAmount] = useState(expense.amount);
    const [date, setDate] = useState(expense.paymentDate);
    const [payee,setPayee] = useState(expense.payee)
    const getDate=(date)=>{
        return new Date(date).toLocaleDateString()
    }
    return(
        <>
            <li className="list-group-item pt-3 text-center">
                <div className="row">
                    <div className="col-3">{expense.title}</div>
                    <div className="col-3">{expense.payee}</div>
                    <div className="col-2">{getDate(expense.paymentDate)}</div>
                    <div className="col-2">{expense.amount}$</div>
                    <div className="col-2">
                        <Popup trigger={<button className="bg-transparent border-0" >
                                <i className="fa-solid fa-pen fa-inverse"/>
                            </button>  }
                                   position="left">
                            <div className=" row align-items-center border border-2 border-success rounded rounded">
                                <div className="col bg-secondary rounded">
                                    <div><h3 className={"text-center text-dark"}>Edit the expense</h3></div>
                                    <Form >
                                            <div className="mt-1">
                                                <h6 className=" text-dark" >Title</h6>
                                            </div>
                                            <div >
                                                <Form.Group>
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Title"
                                                        rows={3}
                                                        name="title"
                                                        value={title}
                                                        onChange={(e)=> setTitle(e.target.value)}
                                                    />
                                                </Form.Group>
                                            </div>

                                        <div className="mt-1">
                                            <h6 className=" text-dark" > Amount </h6>
                                        </div>
                                        <div >
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Amount"
                                                    name="amount"
                                                    value={amount}
                                                    onChange={(e)=> setAmount(e.target.value)}
                                                />
                                            </Form.Group>

                                        </div>

                                        <div className="d-grid" >
                                            <h6 className=" text-dark mt-2 color-secondary" >Payee</h6>

                                            <div className="dropdown d-grid">
                                                <button className=" dropdown-toggle border border-secondary text-dark payee" type="button"
                                                        id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                    {payee}
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><input className="form-check-input ms-2" type="checkbox" value=""
                                                               id="flexCheckChecked" />
                                                        <label className="form-check-label ms-1" htmlFor="flexCheckChecked">
                                                            User 1
                                                        </label>
                                                    </li>
                                                    <li><input className="form-check-input ms-2" type="checkbox" value=""
                                                               id="flexCheckChecked" />
                                                        <label className="form-check-label ms-1" htmlFor="flexCheckChecked">
                                                            User 2
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <h6 className=" text-dark" > Payment Date </h6>
                                        </div>
                                        <div >
                                            <Form.Group>
                                                <Form.Control
                                                    type="Date"
                                                    name="date"
                                                    onChange={(e)=> setDate(e.target.value)}
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="d-grid">
                                            <button className="  btn btn-success mt-2 mb-2" variant="success" type="button" block
                                                    onClick={() => updateExpense(dispatch, {...expense,
                                                        title: title,
                                                        amount: amount,
                                                        payee: payee,
                                                        paymentDate: date
                                                    }, gid)} >
                                                Edit Expense
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Popup>
                        <button className="bg-transparent border-0" onClick={() => deleteExpense(dispatch, expense, gid)}>
                            <i className="fas fa-trash-can ms-2 fa-inverse"/>
                        </button>
                    </div>
                </div>
            </li>
        </>

    )
}

export default ExpenseListItem;