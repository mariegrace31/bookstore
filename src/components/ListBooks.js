/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { bookItems, isLoading, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        ERROR:
        {' '}
        {error}
      </div>
    );
  }
  return (
    <div className="books-container">
      {
      Object.entries(bookItems).map(([itemId, books]) => (
        <div key={itemId}>
          {books.map((book) => (
            <Book key={itemId} book={book} itemId={itemId} />
          ))}
        </div>
      ))
}

    </div>
  );
}

export default Books;
