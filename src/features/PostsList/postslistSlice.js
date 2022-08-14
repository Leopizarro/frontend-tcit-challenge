import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    requestStatus: 'idle'
}

/* const getPosts = () => {
    fetch('http://127.0.0.1:3000/posts/')
    .then(res => res.json())
    .then(posts =>{ return posts })
    .catch(err =>{ return err })
}
 */
const getPostsAsync = async () => {
    const res = await fetch('http://127.0.0.1:3000/posts/')
    const posts = await res.json()
    return posts
}

const addPostAsync = async (newPost) => {
    const res = await fetch('http://127.0.0.1:3000/posts/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPost)
        });
    const newPostAdded = await res.json()
    console.log(newPostAdded)
    return newPostAdded
}

const deletePostAsync = async (postId) => {
    console.log(postId)
    const res = await fetch('http://127.0.0.1:3000/posts/' + postId, {
        method: 'DELETE',
        });
    const postDeleted = await res.json()
    console.log(postDeleted)
    return postDeleted
}



export const postsListSlice = createSlice({
    name: 'postsList',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        /* postsFiltered: (state, action) => {
            const search = action.payload
            const filteredPosts = state.posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
            state.posts = filteredPosts
            state.requestStatus= 'idle'
        }, */
        postDeleted: (state, action) => {
            const deletedPostId = action.payload.id
            const postIndex = state.posts.findIndex(post => post.id === deletedPostId)
            state.posts.splice(postIndex, 1)
        },
        postAdded: (state, action) => {
            console.log(action.payload)
            const newPostAdded = action.payload
            state.posts.push(newPostAdded)
        },
      postsLoading: (state, action) => {
        state.requestStatus = 'loading'
      },
      postsLoaded: (state, action) => {
        console.log(action)
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

  /* export const fetchPosts = createAsyncThunk(
    'posts/fetch',
    async () => {
        const posts = await getPosts()
        console.log('asdasd',posts);
        return posts
    }
) */

/* export const selectPosts = (state) => state.postsList.posts; */

const selectPosts = (state) => state.postsList.posts
export const selectAllPosts = createSelector(selectPosts, (posts) => posts)
console.log('selectposts', selectAllPosts)


export const fetchPosts = () => async (dispatch) => {
    dispatch(postsLoading())
    const apiPosts = await getPostsAsync()
    dispatch(postsLoaded(apiPosts))
    
}

export function deletePost(postId) {
    return async function saveNewPostThink(dispatch, detState) {
        const postToBeDeletedId = postId
        const postAlreadyDeleted = await deletePostAsync(postToBeDeletedId)
        console.log('xsasda',postAlreadyDeleted)
        dispatch(postDeleted(postAlreadyDeleted))
    }
}

export function saveNewPost(post) {
    return async function saveNewPostThink(dispatch, detState) {
        const newPost = post
        const addedNewPost = await addPostAsync(newPost)
        dispatch(postAdded(addedNewPost))
    }
}