import searchReducer, { searchPosts } from './searchSlice'

describe('search reducer', () => {
    const initialState = {
        searchField: 'search'
    }

    it('should handle initial state', () => {
        expect(searchReducer(undefined, {type: 'unknown'})).toEqual({
            searchField: ''
        })
    });

    it('shpuld handle searchPosts', () => {
        const searchValue = 'searchtest'
        const mock = searchReducer(initialState, searchPosts(searchValue));
        expect(mock.searchField).toEqual(searchValue)
    })
})