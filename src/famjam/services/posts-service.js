import axios from 'axios';
const API_BASE = 'http://localhost:4000/famjam';
const POSTS_API = `${API_BASE}`;

export const findAllPosts = async (gid) => {
    const response = await axios.get(`${POSTS_API}/${gid}/posts`);
    const posts = response.data;
    return posts;
}

export const findAllPostsByUser  = async (userId) => {
    const response = await axios.get(`${POSTS_API}/posts/user/${userId}`);
    console.log("inside service");
    console.log(response);
    return response.data;
}

export const createPosts = async (posts, gid) => {
    const response = await axios.post(`${POSTS_API}/${gid}/posts`, posts)
    return response.data;
}

export const deletePosts = async (posts, gid) => {
    const response = await axios
        .delete(`${POSTS_API}/${gid}/posts/${posts._id}`);
    return response.data;
}

export const updatePosts = async (posts, gid) => {
    const response = await axios.put(`${POSTS_API}/${gid}/posts/${posts._id}`, posts);
    return response.data;
}