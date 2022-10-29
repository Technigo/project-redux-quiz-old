/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';
import { ReturnButton } from 'components/ReturnButtonSummary';
// import { OuterWrapperStartpage } from 'components/OuterWrapperStartpage';
import styled from 'styled-components/macro';
import confettiIcon from '../confetti.png';
import Confetti from 'react-confetti'
// import { getLatestVariableDefinition } from 'eslint-plugin-react/lib/util/variable';

const Summary = () => {
  const summaryAnswers = useSelector((state) => state.quiz.answers);
  const result = summaryAnswers.filter((answer) => answer.isCorrect);
  console.log(summaryAnswers)

  return (
    <>
      {/* <Confetti /> */}
      <OuterWrapperSummary>
        <ReturnButton />
        <SummaryIcon src={`${confettiIcon}`} alt="icon"/>
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
              <IconCorrect>
                <h3>✔</h3>
              </IconCorrect> 
              ) : (
              <IconNotCorrect>
                <h3>✖️</h3>
              </IconNotCorrect>
              )}
            </Div>
              {!results.isCorrect && (
                <p>
                Correct answer is:{' '}
                  {results.question.options[results.question.correctAnswerIndex]}
                </p>
              )}
            </Card>
          ))}
          </CardContainer>
        </InnerWrapperSummary>
      </OuterWrapperSummary>
    </>
  );
};

const OuterWrapperSummary = styled.div `
  background: transparent;
  width: 100%;
  height: 100%;
  padding-top: 10px;
`

const SummaryIcon = styled.img`
width: 70px;
margin: 20px 0 0 5px;
position: absolute;
top: 70px;
left: 75%;

  @media (min-width: 668px) {
    width: 120px;
    margin: 20px 0 0 5px;
    position: absolute;
    top: 75px;
    left: 80%;
  }
  @media (min-width: 1024px) {
    width: 120px;
    margin: 20px 0 0 5px;
    position: absolute;
    top: 75px;
    left: 80%;
  }
}
`

const InnerWrapperSummary = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (max-width: 1023px) {
    width: 80%;
    padding-top: 10px;
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
  width: 251px;
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
  line-height: 78px;
}
h4{
  margin: 10px 0 5px 0;
}
p{
  margin: 10px 0 10px 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
  font-size: 13px;
}
@media (max-width: 1023px) {
  width: 205px;
  font-size: 10px;
  h3{
    font-size: 20px;
  }
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
  color: black;
  font-size: 37px;
  width: 540px;
  box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0,0,0,0.56);

  @media (max-width: 820px) {
    font-size: 32px;
    width: 450px;
  }

  @media (max-width: 667px) {
    font-size: 20px;
    width: auto;
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
  h3{
    border-radius: 50%;
    background-color: white;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F848B7;
    font-size: 27px;
  }
`

const IconNotCorrect = styled.p `
  h3{
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 27px;
    color: #BD8700;
  }
`

export default Summary;
