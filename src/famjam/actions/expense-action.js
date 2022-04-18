import * as service from '../services/expense-service';

export const FIND_ALL_EXPENSE = 'FIND_ALL_EXPENSE';

export const findAllExpense = async (dispatch) => {
 const expense = await service.findAllExpense();
 console.log("here3 ",expense);
 dispatch({
   type: FIND_ALL_EXPENSE,
   expense
 });
}