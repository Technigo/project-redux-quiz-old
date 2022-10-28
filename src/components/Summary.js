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
  console.log(summaryAnswers)

  return (
    <OuterWrapperStartpage>
    <InnerWrapperSummary>
        <BigText>You got {result.length}/{summaryAnswers.length} answers correct!</BigText>
        <CardContainer>
        {summaryAnswers.map((results) => (
          <Card>
            <Counter>{results.questionId}</Counter>
            <p>{results.question.questionText}</p>
            <h3>You answered: {results.answer}</h3>
            {results.isCorrect ? (
              <h4> <Icon>✔</Icon> Your answer is correct </h4>
            ) : (
              <h4><Icon>✖️</Icon> Your answer is not correct</h4>
            )}
            {!results.isCorrect && (
              <p>
              (Correct answer is:{' '}
                {results.question.options[results.question.correctAnswerIndex]})
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
  background-color: #FCD3FF;
  width: 60%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  /* border: solid 2px green; */
`
const CardContainer = styled.div`
  /* border: solid blue 2px; */
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 30px; 

@media (min-width: 1025px) {
  grid-template-columns: repeat(3, 1fr);
}
`

const Card = styled.div `
  /* border: solid red 2px; */
  background-color: #A27DA7;
  text-align: left;
  border-radius: 3%;
  padding: 30px;
  box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);

    // margin: 15px;

h2{
  font-family: Montserrat, sans-serif;
}

h4{
  margin: 10px 0 5px 0;
}

p{
  margin: 10px 0 30px 0;
  font-style: italic;
}
`

const BigText = styled.h1`
  text-align: center;
`

const Counter = styled.h2`
  border-radius: 50%;
  background-color: #FFE7FF;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.p `
  border-radius: 50%;
  background-color: #FFE7FF;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Summary;
