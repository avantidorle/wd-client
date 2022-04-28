import React, {useState} from 'react'
import FileBase64 from 'react-file-base64';
import {useDispatch} from "react-redux";
import PostsList from "../PostsList";
import {createPosts} from "../../actions/posts-action";
import "../../css/home.css";


const HomeScreen = () => {
const [newPosts, setNewPosts] =
      useState({post: '', postedBy: sessionStorage.getItem('currentUserId')});
      useState({postImage:''});
      const dispatch = useDispatch();
    return(
        <>
        <div className="col-8">
        <span className="fj-search-glass"><i className="fa fa-search"></i></span>
          <div className="input-group">
          <input type="search" className="form-control rounded-pill" id ="input" placeholder="Search Post" aria-label="Search"/>
          </div>
          <span><img src = "/images/tom.jpg" width="55" className="fj-display-img1"/>
          <textarea className = "form-control" placeholder = "What's happening?" id="exampleTextarea"
          onChange={(e) => setNewPosts({...newPosts,
          post: e.target.value})}>
          </textarea></span>
          <br/>
          <span>< button onClick={() => createPosts(dispatch, newPosts)}
          className = "btn btn-primary rounded-pill" type="button" id="post">Post</button>
          <div className="file_input-container">
                  <FileBase64
                  multiple = {false}
                  onDone = {({base64}) => setNewPosts({...newPosts,
                  postImage: base64})}/></div></span><br/>
        <PostsList/></div>
        <div className="col-2"></div>
        </>
    );
}

export default HomeScreen;
