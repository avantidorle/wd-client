import React from 'react'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";

const ExpensesScreen = () => {
    return(
        <div className="border border-secondary bg-gradient">
            <div className="row mt-3">
                <div className="col-10">
                    <h1 className="ms-2">Expenses</h1>
                </div>
                <div className="col-2 mt-2">
                    <button className="bg-transparent border-0"><i className="fa-solid fa-circle-plus fa-2x fa-inverse float-right ms-5 ps-2 "/></button>
                </div>
            </div>

            <div>


            </div>
                <div>
                    <ul className="list-group mt-2">
                        <li className="list-group-item">
                            <div>
                                <div className="row">
                                    <div className="col-11">
                                    <input type="text" className="form-control-plaintext bg-transparent" value="Title"/>
                                    </div>
                                    <div className="col-1 mt-2"><button className="bg-transparent border-0"><i className="fa-solid fa-xmark fa-inverse" /></button></div>
                                </div>
                                <div>
                                    <textarea className="form-control" rows="3" placeholder="Describe the expense"></textarea>
                                </div>
                                <div className="mt-2">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Amount</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="$20.00"
                                               aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-2">
                                        <input type="date" className="form-control-plaintext border border-secondary rounded"/>
                                    </div>

                                    <div className="dropdown col-5">
                                        <button className="btn btn-transparent dropdown-toggle border border-secondary" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Payee
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><input className="form-check-input ms-2" type="checkbox" value=""
                                                       id="flexCheckChecked"/>
                                                <label className="form-check-label ms-1" htmlFor="flexCheckChecked">
                                                    User 1
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-1"></div>
                                    <div className="col-4">
                                        <button type="submit" className="rounded-pill btn-success btn-lg float-end"> Add Expense </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default ExpensesScreen;