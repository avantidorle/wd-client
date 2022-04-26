import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam';
const TODO_API = `${API_BASE}`;

export const findAllSections = async (gid) => {
    const response = await axios.get(`${TODO_API}/${gid}/todo`);
    const sections = response.data;
    return sections;
}

export const createTodo = async (todo, sid, gid) => {
    const response = await axios.put(`${TODO_API}/${gid}/todo/${sid}`, todo);
    return response.data;
}

export const deleteTodo = async (todo, sid, gid) => {
    const response = await axios.put(`${TODO_API}/${gid}/todo/${sid}/${todo._id}`);
    return response.data;
}

export const updateTodo = async (todo, sid, gid) => {
    const response = await axios.put(`${TODO_API}/${gid}/todo/update/${sid}/${todo._id}`, todo);
    return response.data;
}

export const createSection = async (sections, gid) => {
    const response = await axios.post(`${TODO_API}/${gid}/todo`, sections);
    return response.data;
}

export const deleteSection = async (section, gid) => {
    const response = await axios.delete(`${TODO_API}/${gid}/todo/${section._id}`);
    return response.data;
}