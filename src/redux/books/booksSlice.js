import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => {
      state.bookItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
