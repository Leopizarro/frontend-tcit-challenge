import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewPost } from '../postslist/postslistSlice';
import { NEWPOST_NAME_INPUT_CONSTANTS, NEWPOST_DESCRIPTION_INPUT_CONSTANTS} from '../../constants/input-constants';
import { NEWPOST_BUTTON_CONSTANTS } from '../../constants/buttons-constants';
import './NewPost.css';

export const NewPost = () => {
    const dispatch = useDispatch()
    const NAME_INPUT_CONSTANTS = NEWPOST_NAME_INPUT_CONSTANTS
    const DESCRIPTION_INPUT_CONSTANTS = NEWPOST_DESCRIPTION_INPUT_CONSTANTS
    const [postNameInput, setPostNameInput] = useState('')
    const [postDescriptionInput, setPostDescriptionInput] = useState('')
    const [requestStatus, setRequestStatus] = useState('idle')

    let isLoading = requestStatus === 'loading'

    const handlePostNameChange = (e) => setPostNameInput(e.target.value)

    const handlePostDescriptionChange = (e) => setPostDescriptionInput(e.target.value)

    const handleAddNewPost = async (e) => {
        e.preventDefault()
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
                <input 
                    className="newpost-input"
                    type={NAME_INPUT_CONSTANTS.TYPE}
                    placeholder={NAME_INPUT_CONSTANTS.PLACEHOLDER}
                    value={postNameInput}
                    disabled={isLoading}
                    onChange={handlePostNameChange} 
                    required
                ></input>
                <input
                    className="newpost-input"
                    type={DESCRIPTION_INPUT_CONSTANTS.TYPE}
                    placeholder={DESCRIPTION_INPUT_CONSTANTS.PLACEHOLDER}
                    value={postDescriptionInput}
                    disabled={isLoading}
                    onChange={handlePostDescriptionChange}
                    required
                ></input>
                <button
                    type={NEWPOST_BUTTON_CONSTANTS.TYPE}
                    disabled={isLoading}
                >{NEWPOST_BUTTON_CONSTANTS.PLACEHOLDER}</button>
            </form>
        </div>
    )

}