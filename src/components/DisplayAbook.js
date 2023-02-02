import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletingBook } from '../redux/fetch/booksFetcher';
import progress from './progress.png';
import vert from './vert.png';

const DisplayAbook = (props) => {
  const {
    Category, Title, Author, Id,
  } = props;

  const dispatch = useDispatch();

  const bookRemoveHandle = () => {
    dispatch(deletingBook(Id));
  };

  return (
    <li className="book_item">
      <div className="bookInfo">
        <h3>{Category}</h3>
        <h2>{Title}</h2>
        <h4>{Author}</h4>
        <div className="bookOptions">
          <button type="button" className="bookOptBtn">
            Comments
          </button>
          <button
            type="button"
            className="bookOptBtn rem"
            onClick={bookRemoveHandle}
          >
            Remove
          </button>
          <button type="button" className="bookOptBtn">
            Edit
          </button>
        </div>
      </div>
      <div className="bookExtraInfo">
        <img src={progress} alt="Progress bar" className="pbar" />
        <div className="progress">
          <h3>0%</h3>
          <p>Completed</p>
        </div>
        <img src={vert} alt="Vertical line" className="vline" />
        <div className="progressExtra">
          <p className="pExtraTitle">CURRENT CHAPTER</p>
          <p>Chapter 1</p>
          <button type="button" className="updateProgressBtn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

DisplayAbook.propTypes = {
  Category: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default DisplayAbook;
