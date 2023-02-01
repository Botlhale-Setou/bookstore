import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;

  const dispatch = useDispatch();
  const interimRemBook = () => {
    dispatch(remBook(id));
  };

  return (
    <div className="book">
      <div className="bookInfo">
        <p className="genre">Action</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="bookOptions">
          <p>Comments</p>
          <button type="button" onClick={interimRemBook}>Remove</button>
          <p>Edit</p>
        </div>
      </div>

      <div className="extraInfo">
        <p>Progress</p>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
