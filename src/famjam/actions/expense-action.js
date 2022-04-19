import * as service from '../services/expense-service';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const FIND_ALL_EXPENSE = 'FIND_ALL_EXPENSE';

export const findAllExpense = async (dispatch) => {
 const expense = await service.findAllExpense();
 console.log("here3 ",expense);
 dispatch({
   type: FIND_ALL_EXPENSE,
   expense
 });
}

export const createExpense = async (dispatch, expense) => {
    const newExpense = await service.createExpense(expense);
    dispatch({
        type: CREATE_EXPENSE,
        newExpense
    });
}