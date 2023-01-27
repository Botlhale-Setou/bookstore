import React from 'react';

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, author } = props;
  return (
    <div className="book">
      <div className="bookInfo">
        <p className="genre">Action</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="bookOptions">
          <p>Comments</p>
          <p>Remove</p>
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

export default Book;
