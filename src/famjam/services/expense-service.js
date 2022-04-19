import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam';
const EXPENSE_API = `${API_BASE}/group1/expense`;

export const createExpense = async (expense) => {
    const response = await axios.post(EXPENSE_API, expense)
    return response.data;
}
