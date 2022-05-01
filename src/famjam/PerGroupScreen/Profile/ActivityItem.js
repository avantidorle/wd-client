import React from "react";

const ActivityStreamItem = ({posts}) => {
    return(
        <>
            <div>
                {posts.post}
                likes : {posts.likes}
            </div>
        </>
    )
}

export default ActivityStreamItem