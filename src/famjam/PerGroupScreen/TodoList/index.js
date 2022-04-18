import React from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {findAllExpense} from "../../actions/expense-action";
import ExpenseListItem from "./ExpenseListItem.js"

const ExpenseList = () => {
    const expense = useSelector(state => console.log("here1",state));
    const dispatch = useDispatch();
    useEffect(() => findAllExpense(dispatch),[]);
  return (
  <>
    <ul className="list-group">
      {
        expense.map && expense.map(expense =>
          <ExpenseListItem key={expense._id}
                        expense={expense}/>)
      }
    </ul>
   </>
  );
}

export default ExpenseList;