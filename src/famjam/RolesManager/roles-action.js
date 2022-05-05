import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam';
const GROUP_API = `${API_BASE}`;

export const isExpenseAdmin = async (gid, uid) => {
    const response = await axios.get(`${GROUP_API}/group/${gid}`);
    const groups = response.data;
    if(groups && groups.expAdmin === uid) {
        return true;
    }
    return false;
}

export const isAdmin = async (gid, uid) => {
    const response = await axios.get(`${GROUP_API}/group/${gid}`);
    const groups = response.data;
    if(groups && groups.admin === uid) {
        return true;
    }
    return false;
}