import * as service from '../services/posts-service';
export const CREATE_POSTS = 'CREATE_POSTS';
export const DELETE_POSTS = 'DELETE_POSTS';
export const FIND_ALL_POSTS = 'FIND_ALL_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';

export const findAllPosts = async (dispatch) => {
 const posts = await service.findAllPosts();
 dispatch({
   type: FIND_ALL_POSTS,
   posts
 });
}

export const createPosts = async (dispatch, posts) => {
    console.log(posts)
    const newPosts = await service.createPosts(posts);
    dispatch({
        type: CREATE_POSTS,
        newPosts
    });
}

export const deletePosts = async (dispatch, posts) => {
    const response = await service.deletePosts(posts);
    dispatch({
        type: DELETE_POSTS,
        posts
    })
}

export const updatePosts = async (dispatch, posts) => {
 const status = await service.updatePosts(posts);
 dispatch({
   type: UPDATE_POSTS,
   posts
 });
}
