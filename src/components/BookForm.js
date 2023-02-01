import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setBookTitle] = useState('');
  const [author, setBookAuthor] = useState('');

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const interimAddBook = () => {
    const interimBook = {
      id: uuid(),
      title,
      author,
    };

    dispatch(addBook(interimBook));
  };

  return (
    <form>
      <input
        type="text"
        className="fTitle"
        placeholder="Book title"
        name="fTitle"
        value={title}
        onChange={handleBookTitle}
      />
      <input
        type="text"
        className="fAuthor"
        placeholder="Book author"
        name="fAuthor"
        value={author}
        onChange={handleBookAuthor}
      />
      <button type="button" className="fSubmit" onClick={interimAddBook}>
        ADD BOOK
      </button>
    </form>
  );
};

export default BookForm;
