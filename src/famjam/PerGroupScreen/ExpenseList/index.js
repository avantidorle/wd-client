import React from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {findAllExpense} from "../../actions/expense-action";
import ExpenseListItem from "./ExpenseListItem.js"

const ExpenseList = ({gid}) => {
    const expense = useSelector(state => state.expense);
    const dispatch = useDispatch();
    useEffect(() => {findAllExpense(dispatch, gid)});
  return (
  <>
    <ul className="list-group">
      {
        expense.map && expense.map(expense =>
          <ExpenseListItem key={expense._id}
                        expense={expense} gid={gid}/>)
      }
    </ul>
   </>
  );
}

export default ExpenseList;