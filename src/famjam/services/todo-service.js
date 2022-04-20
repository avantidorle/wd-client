import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam/group1/todo';
const TODO_API = `${API_BASE}`;

export const findAllTodo = async () => {
    const response = await axios.get(TODO_API);
    const todo = response.data;
    return todo;
}

export const createTodo = async (todo) => {
    const response = await axios.post(TODO_API, todo)
    return response.data;
}

export const deleteTodo = async (todo) => {
    const response = await axios.delete(`${TODO_API}/${todo._id}`);
    return response.data;
}