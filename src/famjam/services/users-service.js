import axios from 'axios';

const API_BASE = 'http://localhost:4000/famjam/users';
const USERS_API = `${API_BASE}`;

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    const users = response.data;
    return users;
}

export const updateUsers = async (users) => {
    const response = await axios.put(`${USERS_API}/${users._id}`, users);
    console.log(response.data);
    console.log("dnwkej");
    return response.data;
}