import React from "react";

const ActivityStreamItem = (userPost) => {
    return(
        <>
            <div>
                <hr/>

                {userPost.userPost.post}
                <div>
                    <i className="fa fa-thumbs-up" aria-hidden="true">
                </i> : {userPost.userPost.likes}
                </div>

            </div>
        </>
    )
}

export default ActivityStreamItem