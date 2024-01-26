import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// thunk enables async feature and takes another callback function with dispatch
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error){
        console.log(error.message)
    }

}

export const createPost = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.createPost(newPost)
        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (error){
        console.log(error.message)
    }

}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error){
        console.log(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};
export const likePost = (id) => async (dispatch) => {
    try {
       // await api.deletePost(id);

      //  dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};