import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryEntry } from "./type";

interface DiaryState {
  diaries: DiaryEntry[];
}

const initialState: DiaryState = {
  diaries: [],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiary: (state, action: PayloadAction<DiaryEntry>) => {
      state.diaries.push(action.payload);
    },
    editDiary: (state, action: PayloadAction<DiaryEntry>) => {
      const index = state.diaries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      if (index !== -1) {
        state.diaries[index] = action.payload;
      }
    },
    removeDiary: (state, action: PayloadAction<number>) => {
      state.diaries = state.diaries.filter(
        (entry) => entry.id !== action.payload
      );
    },
  },
});

export const { addDiary, editDiary, removeDiary } = diarySlice.actions;
export default diarySlice.reducer;
