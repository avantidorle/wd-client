import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam/group1/todo';
const TODO_API = `${API_BASE}`;


export const findAllSections = async () => {
    const response = await axios.get(TODO_API);
    const sections = response.data;
    return sections;
}

export const createTodo = async (todo, sid) => {
    const response = await axios.put(`${TODO_API}/${sid}`, todo);
    return response.data;
}

export const deleteTodo = async (todo, sid) => {
    const response = await axios.put(`${TODO_API}/${sid}/${todo._id}`);
    return response.data;
}

export const updateTodo = async (todo, sid) => {
    const response = await axios.put(`${TODO_API}/update/${sid}/${todo._id}`, todo);
    return response.data;
}

export const createSection = async (sections) => {
    const response = await axios.post(TODO_API, sections);
    return response.data;
}


export const deleteSection = async (section) => {
    const response = await axios.delete(`${TODO_API}/${section._id}`);
    return response.data;
}