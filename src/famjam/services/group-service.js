import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam';
const GROUP_API = `${API_BASE}`;

export const findAllGroups = async () => {
    const response = await axios.get(GROUP_API);
    const groups = response.data;
    return groups;
}

export const createGroup = async (groupData) => {
    const response = await axios.post(GROUP_API, groupData);
    return response.data;
}

export const deleteGroup = async (gid) => {
    const response = await axios.delete(`${GROUP_API}/${gid}`);
    return response.data;
}

export const addUserToGroup = async (data,gid) => {
    const response = await axios.put(`${GROUP_API}/${gid}`, data);
    return response.data;
}

export const deleteUserFromGroup = async (uid, gid) => {
    const response = await axios.put(`${GROUP_API}/group/${uid}/${gid}`);
    return response.data;
}
