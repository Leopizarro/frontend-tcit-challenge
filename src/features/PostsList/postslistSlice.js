import { createSlice, createSelector } from '@reduxjs/toolkit';
import { addPostAPI, getPostsAPI, deletePostAPI } from '../../api/apiCalls';

const initialState = {
    posts: [],
    requestStatus: 'idle'
}

export const postsListSlice = createSlice({
    name: 'postsList',
    initialState,
    reducers: {
        postDeleted: (state, action) => {
            const deletedPostId = action.payload.id
            const postIndex = state.posts.findIndex(post => post.id === deletedPostId)
            state.posts.splice(postIndex, 1)
        },
        postAdded: (state, action) => {
            const newPostAdded = action.payload
            state.posts.push(newPostAdded)
        },
        postsLoading: (state, action) => {
            state.requestStatus = 'loading'
        },
        postsLoaded: (state, action) => {
            const newPosts = []
            action.payload.forEach(post => {
                newPosts.push(post)
            })
            state.posts = newPosts
            state.requestStatus = 'idle'
        }
    },
});

export const {
postDeleted,
postAdded,
postsLoading,
postsLoaded
} = postsListSlice.actions;

export default postsListSlice.reducer;


const selectPosts = (state) => state.postsList.posts

export const selectAllPosts = createSelector(selectPosts, (posts) => posts)

export const fetchPosts = () => async (dispatch) => {
    dispatch(postsLoading())
    const apiPosts = await getPostsAPI()
    dispatch(postsLoaded(apiPosts))
}

export function deletePost(postId) {
    return async function saveNewPostThink(dispatch, detState) {
        const postToBeDeletedId = postId
        const postAlreadyDeleted = await deletePostAPI(postToBeDeletedId)
        dispatch(postDeleted(postAlreadyDeleted))
    }
}

export function saveNewPost(post) {
    return async function saveNewPostThink(dispatch, detState) {
        const newPost = post
        const addedNewPost = await addPostAPI(newPost)
        dispatch(postAdded(addedNewPost))
    }
}