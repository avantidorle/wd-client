import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import ActivityStreamItem from "./ActivityItem";
import {findAllPostsByUser} from "../../actions/posts-action";


const ActivityStream = () => {
    const posts = useSelector(state => state.expense);
    const dispatch = useDispatch();
    findAllPostsByUser(dispatch).then(r => console.log(r));
    console.log(posts);
    return (
        <>
            <ul className="list-group">
                {
                    posts.map && posts.map(post =>
                        <ActivityStreamItem key={post._id}
                                         post={post} />)
                }
            </ul>
        </>
    );
}

export default ActivityStream;