import React from 'react';
import { BgWrapper, OuterWrapper } from 'GlobalStyles';

import { CurrentQuestion } from 'components/CurrentQuestion';
import { ProgressBar } from 'components/ProgressBar';

export const QuestionPage = () => {
  return (
    <BgWrapper>
      <OuterWrapper>
        <CurrentQuestion />
        <ProgressBar />
      </OuterWrapper>
    </BgWrapper>
  )
};