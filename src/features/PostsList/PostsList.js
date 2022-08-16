import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchField } from '../search/searchSlice';
import Post from './Post';
import './PostsList.css';
import { TABLE_HEADERS_CONSTANTS } from '../../constants/postslist-constants';

export function PostsList() {
    const NAME_HEADER_CONSTANT = TABLE_HEADERS_CONSTANTS.TABLE_HEADER_NAME_CONSTANT
    const DESCRIPTION_HEADER_CONSTANT = TABLE_HEADERS_CONSTANTS.TABLE_HEADER_DESCRIPTION_CONSTANT
    const ACTION_HEADER_CONSTANT = TABLE_HEADERS_CONSTANTS.TABLE_HEADER_ACTION_CONSTANT
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
        <table>
            <thead>
                <tr>
                    <th>{ NAME_HEADER_CONSTANT }</th>
                    <th>{ DESCRIPTION_HEADER_CONSTANT }</th>
                    <th>{ ACTION_HEADER_CONSTANT }</th>
                </tr>
            </thead>
            <tbody>
                {
                filteredPosts.map(post => {
                    return(<Post key={post.id} post={post}/>)
                })
                }
            </tbody>
        </table>
    )
    
}