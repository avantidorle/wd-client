import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-action";
import PostsListItem from "./PostsListItem";


const PostsList = () => {
const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {findAllPosts(dispatch)});

  return (
  <>

    <ul className="list-group1">
      {   posts.map && posts.map(posts =>
          <PostsListItem key={posts._id}
           posts={posts}/>)
      }
    </ul>
    </>
  );
}

export default PostsList;