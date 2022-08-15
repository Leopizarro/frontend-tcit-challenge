import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPosts } from './searchSlice';
import './Search.css';

export function Search() {
    const [searchField, setSearchField] = useState('')
    const dispatch = useDispatch()
    const handleChangeSearchField = (e) => setSearchField(e.target.value)
    const handleSearchPosts = (e) => dispatch(filterPosts(searchField))
    return(
        <div className="search-container">
            <input className="search-input" type='text' placeholder='Filtro de Nombre' onChange={handleChangeSearchField}></input>
            <button onClick={handleSearchPosts}>Buscar</button>
        </div>
    )
}