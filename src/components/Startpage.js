import React from 'react';
import styled from 'styled-components';

const StartPage = () => {
  return (
    <StyledStartPage>
      <p>This is the startpage</p>
      <StyledButton>
        <a href="/quiz">Start quiz</a>
      </StyledButton>
    </StyledStartPage>
  )
}
export default StartPage;

const StyledStartPage = styled.div`

`

const StyledButton = styled.button`

`
