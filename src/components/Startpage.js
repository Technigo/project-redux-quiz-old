import React from 'react';
import styled from 'styled-components';
import { ButtonWrap, StyledButton } from 'styledcomponents/Buttons';

const StartPage = () => {
  return (
    <StyledStartPage>
      <p>
          In the rapid evolution of technology, AI is affecting more parts of our
          digital lives than before. Challenging our own abilities to create. While some
          results are comical, others are getting hard to distinguish from reality.
      </p>
      <p>
          Midjourney is a research lab and the name of its program that creates images
          from textual descriptions using machine learning. In the following pages you
          will see some examples of the images it can create.
      </p>
      <p>Can you separate which images are made by Midjourney or not?</p>
      <ButtonWrap href="/quiz">
        <StyledButton>
          Start quiz
        </StyledButton>
      </ButtonWrap>
    </StyledStartPage>
  )
}
export default StartPage;

const StyledStartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255,105,180,0.1);
  padding: 5% 10%; 
  p {
    text-align: center;
    line-height: 1.5rem;
  }
`
