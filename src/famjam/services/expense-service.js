import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam/group1/expense';
const EXPENSE_API = `${API_BASE}`;

export const findAllExpense = async () => {
    const response = await axios.get(EXPENSE_API);
    const expense = response.data;
    return expense;
}