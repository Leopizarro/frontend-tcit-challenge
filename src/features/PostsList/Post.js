import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from './postslistSlice';
import { DELETE_POST_BUTTON_CONSTANTS } from '../../constants/buttons-constants';

const Post = ({post}) => {
    const dispatch = useDispatch()
    const handleDeletePost = (e) => dispatch(deletePost(post.id))
    return(
        <tr>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td><button onClick={handleDeletePost}>{ DELETE_POST_BUTTON_CONSTANTS.PLACEHOLDER }</button></td>
        </tr>
    )
}

export default Post;