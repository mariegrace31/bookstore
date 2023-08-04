import React from 'react';
import { PropTypes } from 'prop-types';
import RemoveBookBtn from './RemoveBookBtn';

function Book({ book, itemId }) {
  return (
    <>
      <li>
        {book.title}
        <span>{book.author}</span>
        <RemoveBookBtn itemId={itemId} />
        <span>{itemId}</span>
      </li>
    </>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};
