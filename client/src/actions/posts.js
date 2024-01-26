import * as api from '../api'

// thunk enables async feature and takes another callback function with dispatch
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch (error){
        console.log(error.message)
    }

}