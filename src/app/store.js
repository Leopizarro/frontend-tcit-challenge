import { configureStore } from '@reduxjs/toolkit';
import postsListReducer from '../features/postslist/postslistSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    postsList: postsListReducer,
    search: searchReducer
  },
});
