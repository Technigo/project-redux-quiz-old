import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ResultsContainer = styled.div`
background-image: url("../assets/matrix.jpg");
background-size: cover;
`

const ScoreText = styled.h2`
color:black;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size:3rem;
text-align:center;
`;

const Results = (props) => {
  const { score } = props;
  const quizOver = useSelector((store) => store.quiz.quizOver);
  console.log(quizOver)

  return (
    <ResultsContainer>
      <ScoreText>Your score was {score}</ScoreText>
    </ResultsContainer>
  )
}

export default Results;