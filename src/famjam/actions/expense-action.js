import * as service from '../services/expense-service';

export const FIND_ALL_EXPENSE = 'FIND_ALL_EXPENSE';

export const findAllExpense = async (dispatch) => {
 const expense = await service.findAllExpense();
 dispatch({
   type: FIND_ALL_EXPENSE,
   expense
 });
}