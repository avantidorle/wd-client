import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam';
const GROUP_API = `${API_BASE}`;

export const findAllGroups = async () => {
    const response = await axios.get(GROUP_API);
    const groups = response.data;
    return groups;
}