/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';
import { ReturnButton } from 'components/ReturnButtonSummary';
// import { OuterWrapperStartpage } from 'components/OuterWrapperStartpage';
import styled from 'styled-components/macro';
// import { getLatestVariableDefinition } from 'eslint-plugin-react/lib/util/variable';

const Summary = () => {
  const summaryAnswers = useSelector((state) => state.quiz.answers);
  const result = summaryAnswers.filter((answer) => answer.isCorrect);
  console.log(summaryAnswers)

  return (
    <OuterWrapperSummary>
     <ReturnButton />
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
      </InnerWrapperSummary>
      </OuterWrapperSummary>
  );
};

const OuterWrapperSummary = styled.div `
background: transparent;
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

  @media (max-width: 1023px) {
    width: 80%;
  }
`
const CardContainer = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 30px; 
  margin-bottom: 20px; 

  @media (min-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
  }

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}
`

const Card = styled.div `
  background-color: #D9B2DE;
  text-align: left;
  border-radius: 3%;
  padding: 5px 20px 5px 20px;
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
color: #69476E;

}

h4{
  margin: 10px 0 5px 0;
}

p{
  margin: 10px 0 30px 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
`
const Div = styled.div `
display: flex;
justify-content: space-between;
`

const BigText = styled.h1`
  background-color: #C371D2;
  text-align: center;
  margin: 20px;
  padding: 30px;
  color: #FFE7FF;
  box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);

  @media (max-width: 667px) {
    font-size: 20px;
  }

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
  color: #69476E;

  @media (max-width: 668px) {
  width: 40px;
  height: 40px;
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
