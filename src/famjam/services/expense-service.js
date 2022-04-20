import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam/group1/expense';
const EXPENSE_API = `${API_BASE}`;

export const findAllExpense = async () => {
    const response = await axios.get(EXPENSE_API);
    const expense = response.data;
    return expense;
}

export const createExpense = async (expense) => {
    const response = await axios.post(EXPENSE_API, expense)
    return response.data;
}

export const deleteExpense = async (expense) => {
    const response = await axios
        .delete(`${EXPENSE_API}/${expense._id}`);
    return response.data;
}


export const updateExpense = async (expense) => {
    console.log("inside service status");
    const response = await axios.put(`${EXPENSE_API}/${expense._id}`, expense);
    return response.data;
}




export function getExpense() {
    const response = axios.get(EXPENSE_API);
    const expense = response.data;
    let total = 0;
    let i;
    for (i = 0; i < expense.length; i++) {  //loop through the array
        total += expense[i].amount;  //Do the math!
    }
    console.log(total);
    return total;
}
