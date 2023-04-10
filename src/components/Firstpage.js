import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Firstpage = () => {
  return (
    <Wrapper>
      <h2>TriviaQuiz</h2>
      <Link to="/quiz">Start</Link>
    </Wrapper>
  )
};

export default Firstpage;

const Wrapper = styled.div`
  background-color: white;
`;