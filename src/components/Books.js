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
      <div className="bookList">
        {bookArr.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
      </div>
      <BookForm />
    </div>
  );
};

export default Books;
