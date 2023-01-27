import React from 'react';

const BookForm = () => (
  <form>
    <input
      type="text"
      className="fTitle"
      placeholder="Book title"
      name="fTitle"
    />
    <input
      type="text"
      className="fAuthor"
      placeholder="Book author"
      name="fAuthor"
    />
    <button type="button" className="fSubmit">ADD BOOK</button>
  </form>
);

export default BookForm;
