/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';
import { ReturnButton } from 'components/ReturnButton';
import { OuterWrapperStartpage } from 'components/OuterWrapperStartpage';
import styled from 'styled-components/macro';
// import { getLatestVariableDefinition } from 'eslint-plugin-react/lib/util/variable';

const Summary = () => {
  const summaryAnswers = useSelector((state) => state.quiz.answers);
  const result = summaryAnswers.filter((answer) => answer.isCorrect);

  return (
    <OuterWrapperStartpage>
    <InnerWrapperSummary>
        <BigText>You got {result.length}/{summaryAnswers.length} answers correct!</BigText>
        <SmallText>Your quiz summary</SmallText>
        <CardContainer>
        {summaryAnswers.map((results) => (
          <Card>
            <h2>Question number: {results.questionId}</h2>
            <h3>You answered: {results.answer}</h3>

            {results.isCorrect ? (
              <h4> Your answer is correct </h4>
            ) : (
              <h4> Your answer is not correct </h4>
            )}
            {!results.isCorrect && (
              <p>
              Correct answer is:{' '}
                {results.question.options[results.question.correctAnswerIndex]}
              </p>
            )}
          </Card>
        ))}
           </CardContainer>
        <ReturnButton />
      </InnerWrapperSummary>
      </OuterWrapperStartpage>
  );
};

const InnerWrapperSummary = styled.div`
  background-color: pink;
  width: 60%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  border: solid 2px green;
`
const CardContainer = styled.div`
border: solid blue 2px;
display: grid;
gap: 22px;
grid-template-columns: repeat(1, 1fr);
margin-top: 30px; 

@media (min-width: 1025px) {
  grid-template-columns: repeat(3, 1fr);
}
`

const Card = styled.div `
border: solid red 2px;
background-color: #FFAC83;
border-radius: 3%;
padding: 30px;
// margin: 15px;

h2{
font-family: Montserrat, sans-serif;
}

h4{
margin: 10px 0 5px 0;
}

p{
  margin: 10px 0 30px 0;
}
`

const BigText = styled.h1`
border: solid black 2px;

`
const SmallText = styled.p`
border: solid yellow 2px;
margin: 15px 0 40px 0;

`


export default Summary;
