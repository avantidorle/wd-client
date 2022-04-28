import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-action";
import PostsListItem from "./PostsListItem";


const PostsList = ({gid}) => {
const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {findAllPosts(dispatch, gid)});

  return (
  <>

    <ul className="list-group1">
      {   posts.map && posts.map(posts =>
          <PostsListItem key={posts._id}
           posts={posts} gid={gid}/>)
      }
    </ul>
    </>
  );
}

export default PostsList;