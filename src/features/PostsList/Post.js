import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from './postslistSlice';

const Post = ({post}) => {
    const dispatch = useDispatch()
    const handleDeletePost = (e) => dispatch(deletePost(post.id))
    return(
        <div><p>name: {post.name}</p><p>description: {post.description}</p><button onClick={handleDeletePost}>Eliminar</button></div>
    )
}

export default Post;