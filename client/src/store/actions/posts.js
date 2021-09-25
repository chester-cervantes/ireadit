import * as api from '../../api';
import { FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../actionType';

// Action Creators
export const getPosts = () => {
    return async dispatch => {
        try {
            const { data } = await api.fetchPosts();
            dispatch({ type: FETCH_ALL, payload: data });
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const createPost = (post) => {
    return async dispatch => {
        try {
            const { data } = await api.createPost(post);
            console.log("test")
            dispatch({ type: CREATE_POST, payload: data });
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const updatePost = (id, post) => {
    return async dispatch => {
        try {
            const { data } = await api.updatePost(id, post);
            
            dispatch({ type: UPDATE_POST, payload: data });
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const deletePost = (id) => {
    return async dispatch => {
        try {
            await api.deletePost(id);
            
            dispatch({ type: DELETE_POST, payload: id });
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const likePost = (id) => {
    return async dispatch => {
        try {
            const { data } = await api.likePost(id);
            
            dispatch({ type: LIKE_POST, payload: data });
        } catch (error) {
            console.log(error.message)
        }
    }
}