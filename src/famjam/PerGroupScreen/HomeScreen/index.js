import React, {useState, useEffect} from 'react'
import FileBase64 from 'react-file-base64';
import {useDispatch, useSelector} from "react-redux";
import PostsList from "../PostsList";
import {createPosts, findAllPosts} from "../../actions/posts-action";
import "../../css/home.css";
import EventPosts from "../../Calendar/posts/EventPosts";
import {findUserById} from "../../services/user-service";
import PostsListItem from "../PostsList/PostsListItem";


const HomeScreen = ({gid}) => {
    const posts = useSelector(state => state.posts);
    useEffect(() => {findAllPosts(dispatch, gid)});
    const [query, setQuery] = useState("");
    const [profilePic,setProfilePic] = useState();
    const [newPosts, setNewPosts] =
        useState({post: '', postImage:'',postedBy: sessionStorage.getItem('currentUserId')});
    const dispatch = useDispatch();



    useEffect( () => {
        findUserById(sessionStorage.getItem("currentUserId")).then(r => {
            setNewPosts({...newPosts, handle: r.handle, author: r.firstName, image: r.profilePicture})
            setProfilePic(r.profilePicture);
        })}, [],
    );


    return(
        <>
        <div className="row">
        <div className={"col-9"}>
        <span className="fj-search-glass"><i className="fa fa-search"/></span>
          <div className="input-group">
          <input type="search" className="form-control rounded-pill" id ="input" placeholder="Search Post" onChange = {e=>setQuery(e.target.value)}/>
          </div>
          <span><img src = {profilePic} width="55" className="fj-display-img1 "/>
          <textarea className = "form-control" placeholder = "What's happening?" id="exampleTextarea"
          onChange={(e) => setNewPosts({...newPosts,
          post: e.target.value  })}>
          </textarea></span>
          <br/>
              <span>< button onClick={() => createPosts(dispatch, newPosts, gid)} className = "btn btn-primary rounded-pill" type="button" id="post">Post</button>
                  <div className="file_input-container">
                          <FileBase64
                          multiple = {false}
                          onDone = {({base64}) => setNewPosts({...newPosts,
                          postImage: base64})}/>
                  </div>
              </span>
            <br/>

            <ul className="list-group1">
                {
                    posts.map && posts.filter(posts => posts.post && posts.post.includes(query)).map(posts =>
                    <PostsListItem key={posts._id}
                                   posts={posts} gid={gid}/>)
                }
            </ul>


        </div>
        <div className="col-2"></div>
        </>
    );
}

export default HomeScreen;
