import React from 'react';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { ProgressBar } from 'components/ProgressBar';

export const QuestionPage = () => {
  return (
    <>
      <CurrentQuestion />
      <ProgressBar />
    </>
  )
};