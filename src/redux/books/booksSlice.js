/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dR1UgaiSAd6UKy9GLW2m/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('ooops smoething wrent wrong');
  }
});

export const addNewBook = createAsyncThunk('books/addBook', async ({
  title,
  author,
  category,
  item_id: itemId,
}, thunkAPI) => {
  const newbook = {
    title,
    author,
    category,
    item_id: itemId,
  };
  await axios.post(url, newbook);
  thunkAPI.dispatch(fetchBooks());
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId, thunkAPI) => {
  await axios.delete(url.concat('/') + itemId);
  thunkAPI.dispatch(fetchBooks());
});

const initialState = {
  bookItems: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.item_id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookItems = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;