import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchField } from '../Search/searchSlice';
import Post from './Post';

export function PostsList() {
    const loadingStatus = useSelector((state) => state.postsList.requestStatus)
    const posts = useSelector((state) => state.postsList.posts)
    const searchField = useSelector(selectSearchField)
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