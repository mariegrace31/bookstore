/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function RemoveBookBtn({ itemId }) {
  const dispatch = useDispatch();
  return (
    <>
      <button type="submit" onClick={() => dispatch(removeBook(itemId))} className="btn-remove">remove</button>

    </>
  );
}

export default RemoveBookBtn;

RemoveBookBtn.propTypes = {
  itemId: PropTypes.string.isRequired,
};
