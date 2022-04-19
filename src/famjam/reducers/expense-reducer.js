import {
    CREATE_EXPENSE
} from "../actions/expense-action";

const expenseReducer = (state = [], action) => {
        switch (action.type) {
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