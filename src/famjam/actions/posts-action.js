import * as service from '../services/posts-service';
export const CREATE_POSTS = 'CREATE_POSTS';
export const DELETE_POSTS = 'DELETE_POSTS';
export const FIND_ALL_POSTS = 'FIND_ALL_POSTS';
export const UPDATE_POSTS = 'UPDATE_POSTS';

export const findAllPosts = async (dispatch, gid) => {
 const posts = await service.findAllPosts(gid);
 dispatch({
   type: FIND_ALL_POSTS,
   posts
 });
}

export const createPosts = async (dispatch, posts, gid) => {
    const newPosts = await service.createPosts(posts, gid);
    dispatch({
        type: CREATE_POSTS,
        newPosts
    });
}

export const deletePosts = async (dispatch, posts, gid) => {
    const response = await service.deletePosts(posts, gid);
    dispatch({
        type: DELETE_POSTS,
        posts
    })
}

export const updatePosts = async (dispatch, posts, gid) => {
 const status = await service.updatePosts(posts, gid);
 dispatch({
   type: UPDATE_POSTS,
   posts
 });
}
