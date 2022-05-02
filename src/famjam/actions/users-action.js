import * as service from '../services/user-service';
import {getToken} from "../GoogleAuthentication/tokens";

export const CREATE_USER = 'CREATE_USER';
export const FIND_ALL_USERS = 'FIND_ALL_USERS';
export const FIND_ONE_USER = 'FIND_ONE_USER';
export const FIND_GOOGLE_USER = 'FIND_GOOGLE_USER'
export const UPDATE_USERS = 'UPDATE_USERS';

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers();
    dispatch({
        type: FIND_ALL_USERS,
        users
    });
}

export const findOneUser = async (dispatch, email) => {
    const users = await service.findOneUser(email);
    dispatch({
        type: FIND_ONE_USER,
        users
    });
}


export const createUser = async (dispatch, user,email) => {
    const token = await getToken();
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({summary: 'FAMJAM-TODOS'})
    };
    const requestToCreateCalendar = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars", requestOptions,
    )
    let calendarId = await requestToCreateCalendar.json();
    user.calendarId=calendarId.id;
    const newUser = await service.createUser(user,email);



    // console.log("calendarId is " ,calendarId);
    dispatch({
        type: CREATE_USER,
        newUser,
        calendarId
    });

}

export const updateUsers = async (dispatch, users) => {
    console.log(users);
     const status = await service.updateUsers(users);
     dispatch({
       type: UPDATE_USERS,
       users
     });
    }