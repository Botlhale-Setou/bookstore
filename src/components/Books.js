import React from 'react';
import Navbar from './Navbar';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => (
  <div>
    <Navbar />
    <div className="bookList">
      <Book title="Mastery" author="Robert Greene" />
    </div>
    <BookForm />
  </div>
);

export default Books;
