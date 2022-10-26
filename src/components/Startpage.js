import React from 'react';
import styled from 'styled-components';

const StyledStartPage = styled.div`
  width: 40%;
`

const StyledButton = styled.button`

`

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
      <StyledButton>
        <a href="/quiz">Start quiz</a>
      </StyledButton>
    </StyledStartPage>
  )
}
export default StartPage;

