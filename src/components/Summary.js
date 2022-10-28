/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';
import { ReturnButton } from 'components/ReturnButton';
// import { OuterWrapperStartpage } from 'components/OuterWrapperStartpage';
import styled from 'styled-components/macro';
// import { getLatestVariableDefinition } from 'eslint-plugin-react/lib/util/variable';

const Summary = () => {
  const summaryAnswers = useSelector((state) => state.quiz.answers);
  const result = summaryAnswers.filter((answer) => answer.isCorrect);
  console.log(summaryAnswers)

  return (
    <OuterWrapperSummary>
    <InnerWrapperSummary>
        <BigText>You got {result.length}/{summaryAnswers.length} answers correct!</BigText>
        <CardContainer>
        {summaryAnswers.map((results) => (
          <Card>
            <Counter>{results.questionId}</Counter>
            <p>{results.question.questionText}</p>
          <Div>
            <h3>{results.answer}</h3>
            {results.isCorrect ? (
            <IconCorrect>✔</IconCorrect> 
            ) : (
            <IconNotCorrect>✖️</IconNotCorrect>
            )}
          </Div>
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
      </OuterWrapperSummary>
  );
};

const OuterWrapperSummary = styled.div `
background: repeating-linear-gradient(
  to right,
  #f6ba52,
  #f6ba52 10px,
  #ffd180 10px,
  #ffd180 20px
);
width: 100%;
height: 100%;
padding-top: 10px;
`
const InnerWrapperSummary = styled.div`
  background-color: none;
  width: 60%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`
const CardContainer = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 30px; 

@media (min-width: 1025px) {
  grid-template-columns: repeat(3, 1fr);
}
`

const Card = styled.div `
  background-color: #D9B2DE;
  text-align: left;
  border-radius: 3%;
  padding: 30px;
  box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);


h2{
  font-family: Montserrat, sans-serif;
}

h3 {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
  font-size: 24px;
  display: flex;
flex-direction: row;

}

h4{
  margin: 10px 0 5px 0;
}

p{
  margin: 10px 0 30px 0;
  font-family: 'Helvetica Neue';
}
`
const Div = styled.div `
display: flex;
justify-content: space-between;
`

const BigText = styled.h1`
  background-color: #C371D2;
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
  text-align: center;
  margin: 20px;
  padding: 30px;
  box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
`

const Counter = styled.h2`
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
monospace;
  border-radius: 50%;
  background-color: #FFE7FF;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IconCorrect = styled.p `
  border-radius: 50%;
  background-color: #FFE7FF;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
 font-size: 25px;
`

const IconNotCorrect = styled.p `
  border-radius: 50%;
  background-color: #FFE7FF;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  font-size: 25px;
`

export default Summary;
