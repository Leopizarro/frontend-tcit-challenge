import postsListReducer, {
    postDeleted,
    postAdded,
    postsLoaded,
    postsLoading
} from './postslistSlice'

describe('postsList reducer', () => {
    const initialState = {
        posts: [
            {id:'1', name: 'title name mock', description: 'description mock'},
            {id:'2', name: 'title name mock 2', description: 'description mock 2'},
            {id:'3', name: 'title name mock 3', description: 'description mock 3'},
            {id:'5', name: 'title name mock 4', description: 'description mock 4'},
        ],
        requestStatus: 'idle'
    };

    it('should handle initial state', () => {
        expect(postsListReducer(undefined, {type: 'unknown'})).toEqual({
            posts: [],
            requestStatus:'idle'
        })
    });

    it('should handle postLoading', () => {
        const mock = postsListReducer(initialState, postsLoading());
        expect(mock.requestStatus).toEqual('loading')
    });

    it('should handle postsLoaded', () => {
        const postsListTest = [
            {id:'8', name: 'title example', description: 'testing'},
            {id:'10', name: 'another title example', description: 'still testing'},
        ]
        const mock = postsListReducer(initialState, postsLoaded(postsListTest));
        expect(mock.posts).toEqual(postsListTest);
    });

    it('should handle postAdded', () => {
        const newPostTest = {id:'23', name:'new post name test', description: 'description test'};
        const expectedNewPosts = [
            {id:'1', name: 'title name mock', description: 'description mock'},
            {id:'2', name: 'title name mock 2', description: 'description mock 2'},
            {id:'3', name: 'title name mock 3', description: 'description mock 3'},
            {id:'5', name: 'title name mock 4', description: 'description mock 4'},
            {id:'23', name:'new post name test', description: 'description test'}
        ]
        const mock = postsListReducer(initialState, postAdded(newPostTest));
        expect(mock.posts).toEqual(expectedNewPosts);
    })

    it('should handle postDeleted', () => {
        const postToBeDeleted = {id:'3', name: 'title name mock 3', description: 'description mock 3'}
        const expectedNewPosts = [
            {id:'1', name: 'title name mock', description: 'description mock'},
            {id:'2', name: 'title name mock 2', description: 'description mock 2'},
            {id:'5', name: 'title name mock 4', description: 'description mock 4'}
        ];
        const mock = postsListReducer(initialState, postDeleted(postToBeDeleted));
        expect(mock.posts).toEqual(expectedNewPosts);
    })
})