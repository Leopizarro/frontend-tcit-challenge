import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchField } from '../Search/searchSlice';
import Post from './Post';
import { deletePost } from './postslistSlice';

export function PostsList() {
    const dispatch = useDispatch()
    const loadingStatus = useSelector((state) => state.postsList.requestStatus)
    const posts = useSelector((state) => state.postsList.posts)
    const searchField = useSelector(selectSearchField)
    const handleDeletePost = (e) => console.log(e.target.value)
    console.log('ult',searchField)
    console.log(posts)
    const filteredPosts = posts.filter(post => {return post.name.toLowerCase().includes(searchField.toLowerCase())})

    if (loadingStatus === 'loading') {
        return (
            <div>loading...</div>
        )
    }
    return (
        <div>
            {
            filteredPosts.map(post => {
                return(<Post post={post}/>)
            })
        }
        </div>
    )
    
}