import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {deletePosts,updatePosts} from "../../actions/posts-action";


const PostsListItem = ({posts}) => {
const [disp, setDisp ] = useState("Hide");
 const [comments, setnewcomments] = useState(posts.comments);
  const dispatch = useDispatch();
    return(
    <div>
            <li className="list-group-item mt-3" id="postlist">

		    	<img src={posts.image} width="55" className="fj-display-img"/>
		    	<span className="spanning"><text className="wd-topic-heading ps-2">{posts.author}  </text>
		    	<a href="#" className="wd-follow-handle ps-2">@{posts.handle}</a>
                 <i className="fa fa-trash fa-pull-right" onClick={() => deletePosts(dispatch, posts)}></i></span><br/>
		    	<span className="wd-topic-description">{posts.post}</span><br/>
                <div className="wd-head-image">
                <img src={posts.postImage} className="wd-topic-heading-image pt-2"/></div>

                <span>
                <i onClick={() => updatePosts(dispatch, {
                ...posts,
                likes: posts.likes + 1})} className="far fa-thumbs-up ms-2 me-2 pt-2"></i>
                {posts.likes}

                <i class="fa-solid fa-comment ms-3 me-1" onClick={() => setDisp("Show")}/>Comment</span>
                 <div className="temp">
                 {disp === "Hide" && <></>}
                 {disp === "Show" &&
                 <div className = "temp2">
                 <span>
                 <button className="bg-transparent border-0" onClick={() => setDisp("Hide")} >
                 <i className="fa-solid fa-xmark fa-inverse" /></button>
                 <button className="plane border-0">
                 <i class="fa-solid fa-paper-plane"/></button></span>

                 <textarea className="form-control" placeholder="Write your comment"
                 onChange={(event) => setnewcomments(event.target.value)} />
                 </div>}
                 </div>
		    </li>
    </div>

    );
}
export default PostsListItem;
