import * as service from '../services/expense-service';

export const CREATE_EXPENSE = 'CREATE_EXPENSE';

export const createExpense = async (dispatch, expense) => {
    const newExpense = await service.createExpense(expense);
    dispatch({
        type: CREATE_EXPENSE,
        newExpense
    });
}