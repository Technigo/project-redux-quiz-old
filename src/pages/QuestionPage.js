import React from 'react';
import styled from 'styled-components';
import { BgWrapper, OuterWrapper } from 'GlobalStyles';

import { CurrentQuestion } from 'components/CurrentQuestion';
import { ProgressBar } from 'components/ProgressBar';

export const QuestionPage = () => {
  return (
    <QuestionWrapper>
      <OuterWrapper>
        <CurrentQuestion />
        <ProgressBar />
      </OuterWrapper>
    </QuestionWrapper>
  )
};

const QuestionWrapper = styled(BgWrapper)`
 /*  background-image: url(./images/blue_lila_bg_mov.jpg); */
`;