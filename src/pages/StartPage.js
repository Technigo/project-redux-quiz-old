import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OuterWrapper, Button } from 'GlobalStyles';

export const StartPage = () => {
  return (
    <OuterWrapper>
      {/* <StartHeader>MOVIE QUIZ!!!</StartHeader> */}
      {/* <ButtonStart type="button"/> */}
      <Link to="/quiz"><ButtonStart type="button" />
      </Link>
    </OuterWrapper>
  )
};

// const StartHeader = styled.h1`
//   color: blueviolet;
//   font-size: 4rem;
//   /* font-family: var(--font-start);
//   font-weight: 400; */
//   /* font-style: normal; */
//   border: 3px solid red;
// `;

// Här kan StartPageImg placeras

export const ButtonStart = styled(Button)`
  padding: 25px;
  background-image: url(./images/start_quiz.png);
  background-color: transparent;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  border: 3px solid red;
/* height: 50px; */
`;