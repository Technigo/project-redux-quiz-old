import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from 'components/CurrentQuestion';

const Questions = () => {
  return <CurrentQuestion />;
};

export default Questions;
