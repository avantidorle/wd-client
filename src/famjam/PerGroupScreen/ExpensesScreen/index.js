import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import ExpenseList from "../ExpenseList"
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
import {createExpense, getExpense} from "../../actions/expense-action";


const ExpensesScreen = () => {
    const [disp, setDisp ] = useState("Hide");
    const [expenseList, setExpenseList] = useState({expense:'New Expense'});
    const dispatch = useDispatch();

    return(
        <>
        <div className=" bg-gradient">
            <div className="row mt-3">
                <div className="col-10">
                    <h1 className="ms-2 text-center">Expenses</h1>
                </div>
                <div className="col-2 mt-2">
                    <button className="bg-transparent border-0" onClick={() => setDisp("Show")}><i className="fa-solid fa-circle-plus fa-2x fa-inverse ms-5 ps-2 " /></button>
                </div>
            </div>
            <div>
                {disp === "Hide" && <></>}
                {disp === "Show" &&
                    <div className="p-3">
                        <div className="row">
                            <div className="col-11">
                                <input type="text" className="form-control-plaintext bg-transparent" value="Title" />
                            </div>
                            <div className="col-1 mt-2"><button className="bg-transparent border-0" onClick={() => setDisp("Hide")} ><i className="fa-solid fa-xmark fa-inverse" /></button></div>
                        </div>
                        <div>
                            <textarea className="form-control" rows="3" placeholder="Describe the expense"
                                onChange={(event) => setExpenseList({
                                    ...expenseList,
                                    title: event.target.value
                                })} />
                        </div>
                        <div className="mt-2">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Amount</span>
                                </div>
                                <input type="text" className="form-control" placeholder="$20.00"
                                    aria-label="Username" aria-describedby="basic-addon1"
                                    onChange={(event) => setExpenseList({
                                        ...expenseList,
                                        amount: event.target.value
                                    })} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-2">
                                <input type="date" className="form-control-plaintext text-secondary border border-secondary rounded"
                                    onChange={(event) => setExpenseList({
                                        ...expenseList,
                                        paymentDate: event.target.value
                                    })} />
                            </div>

                            <div className="dropdown col-5">
                                <button className="btn btn-transparent dropdown-toggle border border-secondary" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                        onChange={(event) => setExpenseList({
                                            ...expenseList,
                                            payee: event.target.value
                                        })}>
                                    Payee
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><input className="form-check-input ms-2" type="checkbox" value=""
                                        id="flexCheckChecked" />
                                        <label className="form-check-label ms-1" htmlFor="flexCheckChecked">
                                            User 1
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-1"/>
                            <div className="col-4">
                                <button type="submit" className="rounded-pill btn-success btn-lg float-end"
                                    onClick={() => createExpense(dispatch, expenseList) && setDisp("Hide")} >
                                    Add Expense
                                </button>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
            <li className="list-group-item pt-3 bg-primary text-center">
                <div className="row">
                    <div className="col-3">Expense Detail</div>
                    <div className="col-3">Payee</div>
                    <div className="col-2">Date of Payment</div>
                    <div className="col-2">Amount</div>
                    <div className="col-2"/>
                </div>
            </li>
            <ExpenseList />
            <li className="list-group-item pt-3  text-center border-0">
                <div className="row">
                    <div className="col-6"/>
                    <div className="col-2 bg-danger rounded">Total Expense</div>
                    {/*TODO: its not working*/}
                    <div className="col-2 bg-danger rounded">{ () => getExpense()}</div>
                    <div className="col-2"/>
                </div>
            </li>
        </>
    );
}

export default ExpensesScreen;