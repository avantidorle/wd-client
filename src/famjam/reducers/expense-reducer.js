import {FIND_ALL_EXPENSE, CREATE_EXPENSE, DELETE_EXPENSE} from "../actions/expense-action";

const expenseReducer = (state = [], action) => {
  switch (action.type) {
     case FIND_ALL_EXPENSE:
        return action.expense;
    case DELETE_EXPENSE:
        return state.filter(
            expense => expense._id !== action.expense._id);
    case CREATE_EXPENSE:
        const newExpense = {
            expense: action.expense,
        }
        return [
            ...state,
            newExpense,
        ];
    default:
        return state;
    }
}

export default expenseReducer;