import React from "react";
import Popup from 'reactjs-popup';

const InfoPopup = ({todo}) => {
    const getDate=(date)=>{
        return new Date(date).toDateString()
    }
    const getDaysLeft=(created, due)=>{
        const diff = new Date(due).getTime() - new Date(created).getTime();
        return Math.round(diff / (1000 * 3600 * 24));
    }
    return (
    <>
       <Popup trigger = {
            <i className="fas fa-solid fa-circle-info ms-2 fa-inverse"/>
       } position="right">
       <div className="p-2 bg-secondary text-dark border rounded">
            <small><div><strong>Title</strong>: {todo.title}</div>
            <div><strong>Description</strong>: {todo.description}</div>
            <div><strong>Date created</strong>: {getDate(todo.createdOn)}</div>
            <div><strong>Days left</strong>: {getDaysLeft(todo.createdOn, todo.dueDate)}</div></small>
       </div>
       </Popup>
    </>
    )
}

export default InfoPopup;