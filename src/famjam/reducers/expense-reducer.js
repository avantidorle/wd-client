import {FIND_ALL_EXPENSE} from "../actions/expense-action";

const expenseReducer = (state = [], action) => {
  switch (action.type) {
     case FIND_ALL_EXPENSE:
        return action.expense;
     default:
        return state;
  }
}

export default expenseReducer;