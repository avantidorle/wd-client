import axios from 'axios';

const API_BASE = 'http://localhost:4000/famjam/group1';
const POSTS_API = `${API_BASE}`;

export const findAllPosts = async () => {
    const response = await axios.get(POSTS_API);
    const posts = response.data;
    return posts;
}

export const createPosts = async (posts) => {
    const response = await axios.post(POSTS_API, posts)
    return response.data;
}

export const deletePosts = async (posts) => {
    const response = await axios
        .delete(`${POSTS_API}/${posts._id}`);
    return response.data;
}

export const updatePosts = async (posts) => {
    const response = await axios.put(`${POSTS_API}/${posts._id}`, posts);
    return response.data;
}