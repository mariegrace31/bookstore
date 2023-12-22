import React from 'react';
import { PropTypes } from 'prop-types';
import RemoveBookBtn from './RemoveBookBtn';
import Completed from './Completed';
import Chapter from './Chapter';

function Book({ book, itemId }) {
  return (
    <>
      <div className="book">
        <div className="book-container">
          <div className="book-descr">
            <p className="action Text-Style-9">{book.category}</p>
            <h4 className="book-title">{book.title}</h4>
            <span className="book-author">{book.author}</span>
            <ul className="comment-container Text-Style-8">
              <li>comments</li>
              |
              <RemoveBookBtn itemId={itemId} />
              |
              <li>edit</li>
            </ul>
          </div>
          <Completed />
          <Chapter />
        </div>
      </div>
    </>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};
