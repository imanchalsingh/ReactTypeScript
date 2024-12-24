import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Story } from './type';



interface StoryState {
  stories: Story[];
}

const initialState: StoryState = {
  stories: [],
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    addStory: (state, action: PayloadAction<Story>) => {
      state.stories.push(action.payload);
    },
    editStory: (state, action: PayloadAction<Story>) => {
      const index = state.stories.findIndex(story => story.id === action.payload.id);
      if (index !== -1) {
        state.stories[index] = action.payload;
      }
    },
    removeStory: (state, action: PayloadAction<number>) => {
      state.stories = state.stories.filter(story => story.id !== action.payload);
    },
  },
});

export const { addStory, editStory, removeStory } = storySlice.actions;
export default storySlice.reducer;
