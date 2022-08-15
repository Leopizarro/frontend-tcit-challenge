export const getPostsAPI = async () => {
    const res = await fetch('http://127.0.0.1:3000/posts/')
    const posts = await res.json()
    return posts
}

export const addPostAPI = async (newPost) => {
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

export const deletePostAPI = async (postId) => {
    console.log(postId)
    const res = await fetch('http://127.0.0.1:3000/posts/' + postId, {
        method: 'DELETE',
        });
    const postDeleted = await res.json()
    console.log(postDeleted)
    return postDeleted
}