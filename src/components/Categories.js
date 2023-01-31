import React from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { setCompleted } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const interimCheckStatus = () => {
    dispatch(setCompleted());
  };

  return (
    <div>
      <Navbar />
      <button type="button" onClick={interimCheckStatus}>Check status</button>
    </div>
  );
};

export default Categories;
