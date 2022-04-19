import {FIND_ALL_EXPENSE, CREATE_EXPENSE} from "../actions/expense-action";

const expenseReducer = (state = [], action) => {
  switch (action.type) {
     case FIND_ALL_EXPENSE:
        console.log("here2 ",action);
        return action.expense;
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