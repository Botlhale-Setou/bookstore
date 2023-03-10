import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayAbook from './DisplayAbook';
import { gettingBooks } from '../redux/fetch/booksFetcher';

const DisplayBookList = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(gettingBooks());
  }, [dispatch]);

  return (
    <div className="book_cont">
      <ul className="bookList">
        {books.map((book) => (
          <DisplayAbook
            Id={book.Id}
            key={book.Id}
            Title={book.title}
            Author={book.author}
            Category={book.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default DisplayBookList;
