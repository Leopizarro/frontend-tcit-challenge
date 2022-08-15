import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewPost } from '../postslist/postslistSlice';
import './NewPost.css';

export const NewPost = () => {
    const dispatch = useDispatch()
    const [postNameInput, setPostNameInput] = useState('')
    const [postDescriptionInput, setPostDescriptionInput] = useState('')
    const [requestStatus, setRequestStatus] = useState('idle')

    let isLoading = requestStatus === 'loading'

    const handlePostNameChange = (e) => setPostNameInput(e.target.value)

    const handlePostDescriptionChange = (e) => setPostDescriptionInput(e.target.value)

    const handleAddNewPost = async (e) => {
        setRequestStatus('loading')
        const newPost = {title: postNameInput, description: postDescriptionInput}
        await dispatch(saveNewPost(newPost))
        setPostDescriptionInput('')
        setPostNameInput('')
        setRequestStatus('idle')
    }

    return(
        <div className='newpost-container'>
            <form onSubmit={handleAddNewPost}>
                <input placeholder='Nombre' value={postNameInput} disabled={isLoading} onChange={handlePostNameChange} required></input>
                <input placeholder='Descripción' value={postDescriptionInput} disabled={isLoading} onChange={handlePostDescriptionChange} required></input>
                <button type='submit' disabled={isLoading}>Crear</button>
            </form>
        </div>
    )

}