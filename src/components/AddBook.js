import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import AddBookBtn from './AddBookBtn';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const length = useSelector((state) => state.books.length + 1);

  const handletitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSelectChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title, author, category: 'Fiction', item_id: `item${length}`,
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
