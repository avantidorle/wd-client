import * as service from '../services/expense-service';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const FIND_ALL_EXPENSE = 'FIND_ALL_EXPENSE';

export const findAllExpense = async (dispatch) => {
 const expense = await service.findAllExpense();
 dispatch({
   type: FIND_ALL_EXPENSE,
   expense
 });
}

export const createExpense = async (dispatch, expense) => {
    console.log(expense)
    const newExpense = await service.createExpense(expense);
    dispatch({
        type: CREATE_EXPENSE,
        newExpense
    });
}

export const deleteExpense = async (dispatch, expense) => {
    const response = await service.deleteExpense(expense);
    dispatch({
        type: DELETE_EXPENSE,
        expense
    })
}