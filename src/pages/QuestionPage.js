import React from 'react';
import { OuterWrapper, MovieImg } from 'GlobalStyles';

import { CurrentQuestion } from 'components/CurrentQuestion';
import { ProgressBar } from 'components/ProgressBar';

export const QuestionPage = () => {
  return (
    <OuterWrapper>
      <MovieImg>
        <CurrentQuestion />
        <ProgressBar />
      </MovieImg>
    </OuterWrapper>
  )
};