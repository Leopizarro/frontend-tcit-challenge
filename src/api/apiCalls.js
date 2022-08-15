export const getPostsAPI = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/posts/')
        const posts = await res.json()
        return posts
    } catch (error) {
        console.error(error);
    }
}

export const addPostAPI = async (newPost) => {
    try {
        const res = await fetch('http://127.0.0.1:3000/posts/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPost)
        });
        const newPostAdded = await res.json()
        return newPostAdded
    } catch (error) {
        console.error(error);
    }
}

export const deletePostAPI = async (postId) => {
    try {
        const res = await fetch('http://127.0.0.1:3000/posts/' + postId, {
            method: 'DELETE',
            });
        const postDeleted = await res.json()
        return postDeleted
    } catch (error) {
        console.error(error);
    }
}