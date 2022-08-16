import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPosts } from './searchSlice';
import { NAME_SEARCH_INPUT_CONSTANTS } from '../../constants/input-constants';
import { SEARCH_BUTTON_CONSTANTS } from '../../constants/buttons-constants';
import './Search.css';

export function Search() {
    const SEARCH_INPUT_CONSTANTS = NAME_SEARCH_INPUT_CONSTANTS
    const [searchField, setSearchField] = useState('')
    const dispatch = useDispatch()
    const handleChangeSearchField = (e) => setSearchField(e.target.value)
    const handleSearchPosts = (e) => dispatch(filterPosts(searchField))
    return(
        <div className="search-container">
            <input
                className="search-input"
                type={SEARCH_INPUT_CONSTANTS.TYPE}
                placeholder={SEARCH_INPUT_CONSTANTS.PLACEHOLDER}
                onChange={handleChangeSearchField}
            ></input>
            <button
                onClick={handleSearchPosts}
            >{SEARCH_BUTTON_CONSTANTS.PLACEHOLDER}</button>
        </div>
    )
}