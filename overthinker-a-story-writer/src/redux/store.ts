import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import storyReducer from './storySlice';
import diaryReducer from './diarySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    story: storyReducer,
    diary: diaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
