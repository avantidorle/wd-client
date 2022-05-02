import axios from 'axios';
import {getToken} from "../GoogleAuthentication/tokens";

const API_BASE = 'http://localhost:4000/famjam/users';
const USERS_API = `${API_BASE}`;

export const findOneUser = async (email) => {
    console.log("looking for "+ email);
    const response = await axios.get(`${USERS_API}/${email}`);
    console.log("inside service user response is ");
    console.log(response);
    return response.data;
}

export const findGoogleUser = async () =>{
    const token = await getToken();
    const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        );
    console.log(response);
    return response.data;
}

export const createUser = async (user,email) => {
    user.email = email;
    console.log("inside service");
    console.log(user);
    const response = await axios.post(USERS_API, user)
    return response.data;
}

export const findAllUsers = async (gid) => {
    const response = await axios.get(`${USERS_API}/group/${gid}`);
    const users = response.data;
    return users;
}

export const updateUsers = async (users) => {
    const response = await axios.put(`${USERS_API}/${users._id}`, users);
    console.log(response.data);
    console.log("dnwkej");
    return response.data;
}

export const findUserById = async (usersId) => {
    console.log("userId in findUserById",usersId);
    const response = await axios.get(`${USERS_API}/id/${usersId}`);
    return response.data;
}