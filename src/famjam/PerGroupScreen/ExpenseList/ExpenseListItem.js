import {useDispatch} from "react-redux";

const ExpenseListItem = ({expense}) => {
    const dispatch = useDispatch();

    return(
        <li className="list-group-item pt-3">
            <div className="row">
                <div className="col-5">{expense.title}</div>
                <div className="col-4">{expense.payee}</div>
                <div className="col-2">{expense.amount}$</div>
            </div>
        </li>
    )
}

export default ExpenseListItem;