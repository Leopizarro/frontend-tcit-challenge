import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsListReducer from '../features/PostsList/postslistSlice';
import searchReducer from '../features/Search/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    postsList: postsListReducer,
    search: searchReducer
  },
});
