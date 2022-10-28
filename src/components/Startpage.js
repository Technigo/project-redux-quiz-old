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
      <Highlight>Can you separate which images are made by Midjourney or not?</Highlight>
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
  background-color: #33001A;
  border-radius: 15px;
  padding: 5% 10%; 
  -webkit-appearance: none;
  -webkit-box-shadow: -4px 4px 20px 4px rgba(0,0,0,0.6);
  box-shadow: -1px 1px 10px 1px rgba(0,0,0,0.6);
  -moz-box-shadow: -1px 1px 10px 1px rgba(0,0,0,0.6);
  p {
    text-align: left;
    line-height: 1.5rem;
    font-size: 1.2rem;
    color: white;
    font-family: 'Times New Roman', Times, serif;
  }

  @media (min-width: 790px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`
const Highlight = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: white;
  font-size: 1.25rem;
`
