import {FIND_ALL_POSTS,DELETE_POSTS,CREATE_POSTS,UPDATE_POSTS,FIND_USER_POSTS} from "../actions/posts-action";

const postsReducer = (state = [], action) => {
    console.log("inside reducer post is")
    console.log(action)
  switch (action.type) {
     case FIND_ALL_POSTS:
        return action.posts;
     case CREATE_POSTS:
             const newPosts = {
                 posts: action.newPosts,
             }
             return [
                 ...state,
                 newPosts,
             ];
     case DELETE_POSTS:
        return state.filter(
        posts => posts._id !== action.posts._id);
     case UPDATE_POSTS:
          return state.map(
          posts => posts._id === action.posts._id ?
          action.posts : posts);
     case FIND_USER_POSTS:
          console.log("inside reducer");
          console.log(action.response);
          return action.posts;
     default:
             return state;
         }
     }

export default postsReducer;