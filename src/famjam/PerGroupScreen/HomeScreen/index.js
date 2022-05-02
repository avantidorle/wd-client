import React, {useState} from 'react'
import FileBase64 from 'react-file-base64';
import {useDispatch} from "react-redux";
import PostsList from "../PostsList";
import {createPosts} from "../../actions/posts-action";
import "../../css/home.css";
import EventPosts from "../../Calendar/posts/EventPosts";


const HomeScreen = ({gid}) => {
const [newPosts, setNewPosts] =
      useState({post: ''});
      useState({postImage:''});
      const dispatch = useDispatch();
    return(
        <>
        <div className="row">
        <div className={"col-9"}>
        <span className="fj-search-glass"><i className="fa fa-search"/></span>
          <div className="input-group">
          <input type="search" className="form-control rounded-pill" id ="input" placeholder="Search Post" aria-label="Search"/>
          </div>
          <span><img src = "/images/tom.jpg" width="55" className="fj-display-img1"/>
          <textarea className = "form-control" placeholder = "What's happening?" id="exampleTextarea"
          onChange={(e) => setNewPosts({...newPosts,
          post: e.target.value})}>
          </textarea></span>
          <br/>
          <span>< button onClick={() => createPosts(dispatch, newPosts, gid)}
          className = "btn btn-primary rounded-pill" type="button" id="post">Post</button>
          <div className="file_input-container">
                  <FileBase64
                  multiple = {false}
                  onDone = {({base64}) => setNewPosts({...newPosts,
                  postImage: base64})}/></div></span><br/>
        <PostsList gid={gid}/>
        </div>
            <div className={"col-3"}>
                <EventPosts/>
            </div>
        </div>
        </>
    );
}

export default HomeScreen;
