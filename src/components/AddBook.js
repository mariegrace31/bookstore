import React from 'react';

function AddBook() {
  return (
    <>
      <form>
        <input type="text" placeholder="Book Title" />
        <select>
          <option>Author</option>
        </select>
        <button type="submit">Add book</button>
      </form>

    </>
  );
}

export default AddBook;
