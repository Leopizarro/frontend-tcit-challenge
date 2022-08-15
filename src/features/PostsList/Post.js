import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from './postslistSlice';

const Post = ({post}) => {
    const dispatch = useDispatch()
    const handleDeletePost = (e) => dispatch(deletePost(post.id))
    return(
        <tr>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td><button onClick={handleDeletePost}>Eliminar</button></td>
        </tr>
    )
}

export default Post;