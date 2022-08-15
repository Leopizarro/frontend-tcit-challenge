import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchField } from '../search/searchSlice';
import Post from './Post';
import './PostsList.css';

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
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acción</th>
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