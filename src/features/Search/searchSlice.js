import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchField: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchPosts: (state, action) => {
            const searchValue = action.payload
            state.searchField = searchValue
        }
    },
})

export const {
    searchPosts
} = searchSlice.actions

export default searchSlice.reducer

export const selectSearchField = (state) => state.search.searchField

export const filterPosts = (search) => (dispatch) => {
    dispatch(searchPosts(search))
}