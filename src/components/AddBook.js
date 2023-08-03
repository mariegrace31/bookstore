/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';
import AddBookBtn from './AddBookBtn';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const handletitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSelectChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBook({
      title, author, category: 'Fiction', item_id: `item${Math.floor(Math.random() * 1000)}`,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="Book Title" onChange={handletitleChange} />
        <input type="text" value={author} placeholder="author" onChange={handleSelectChange} />
        <AddBookBtn />
      </form>
    </>
  );
}

export default AddBook;
