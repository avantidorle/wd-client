import {useDispatch} from "react-redux";
import {deleteExpense} from "../../actions/expense-action";

const ExpenseListItem = ({expense}) => {
    const dispatch = useDispatch();

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
                        <button className="bg-transparent border-0">
                            <i className="fa-solid fa-pen fa-inverse"/>
                        </button>
                        <button className="bg-transparent border-0" onClick={() => deleteExpense(dispatch, expense)}>
                            <i className="fas fa-trash-can ms-2 fa-inverse"/>
                        </button></div>
                </div>
            </li>
        </>

    )
}

export default ExpenseListItem;