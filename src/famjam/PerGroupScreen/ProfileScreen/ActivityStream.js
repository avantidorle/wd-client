import React, {useEffect, useState} from 'react'
import {findAllPostsByUser} from "../../services/user-service";
import ActivityStreamItem from "./ActivityItem";



const ActivityStream = () => {
    const [userPosts,setUserPosts] =  useState({});
    useEffect(()=>{findAllPostsByUser(sessionStorage.getItem("currentUserId")).then(r1 => {
        setUserPosts(r1)
    })},[]);
    return (
            <ul className="list-group">
                {
                    userPosts.map && userPosts.map(r =>
                        <ActivityStreamItem key={r._id}
                                            userPost={r} />)
                }
            </ul>
    );
}

export default ActivityStream;