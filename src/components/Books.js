import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const bookArr = useSelector((state) => state.book);
  return (
    <div>
      <Navbar />
      {bookArr}
      <div className="bookList">
        <Book title="Mastery" author="Robert Greene" />
      </div>
      <BookForm />
    </div>
  );
};

export default Books;
