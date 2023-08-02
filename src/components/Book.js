/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PropTypes } from 'prop-types';
import RemoveBookBtn from './RemoveBookBtn';

function Book({ book }) {
  return (
    <>
      <li key={book.item_id}>
        {book.title}
        <span>{book.author}</span>
        <RemoveBookBtn itemId={book.item_id} />
        <span>{book.item_id}</span>
      </li>
    </>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
