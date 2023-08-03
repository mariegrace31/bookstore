/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function Books() {
  const initialState = useSelector((state) => state.books);
  return (
    <ul>
      {initialState.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
}

export default Books;
