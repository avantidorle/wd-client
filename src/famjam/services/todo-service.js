import axios from 'axios';
import React from 'react';
import {useEffect, useState} from "react";
import {findUserById} from "./user-service";
import {getToken} from "../GoogleAuthentication/tokens";
const API_BASE = 'http://localhost:4000/famjam';
const TODO_API = `${API_BASE}`;

export const findAllSections = async (gid) => {
    const response = await axios.get(`${TODO_API}/${gid}/todo`);
    const sections = response.data;
    return sections;
}

export const CreateTodo = async (todo, sid, gid) => {
    console.log("Inside createtodo");
    const [calendarId, setCalendarId] = useState([]);
    findUserById(sessionStorage.getItem("currentUserId")).then(r => {
        setCalendarId(r.calendarId);
    });
    const defaultDate = new Date();
    const response = await axios.put(`${TODO_API}/${gid}/todo/${sid}`, todo);
    //Post to google calendar
    const token = await getToken();
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({summary: 'FAMJAM-TODOS'})
    };
    console.log("calendarId",calendarId);
    let eventURL = "https://www.googleapis.com/calendar/v3/calendars/" + calendarId + "/events";
    console.log("eventURL",eventURL);
    // console.log("Event URL is");
    if(eventURL.includes("#")) {
        eventURL= eventURL.replace("#","%23");
    }
    const requestToCreateCalendarEvent = await fetch(
        eventURL, requestOptions,
    )
    let eventId = await requestToCreateCalendarEvent.json();
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