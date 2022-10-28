/* eslint-disable */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { NextButton } from 'components/NextButton'
import { ReturnButton } from 'components/ReturnButton'
import Summary from 'components/Summary'
import styled from 'styled-components/macro';
import ProgressBar from 'components/Progressbar';


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const store = useSelector((state) => state.quiz)
  const result = useSelector((state) => state.quiz.questions.length)
  const id = useSelector(state => state.quiz.questions[state.quiz.currentQuestion].id)

  console.log('store', store)
  console.log('result', result) //funkar

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const answer = useSelector((state) => 
  state.quiz.answers.find((a) => ( a.questionId === question.id)
  ));
  

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
 
    if (question.correctAnswerIndex === answerIndex) {
        document.getElementById(`${answerIndex}`).style.background = 'green'

    } else {
      document.getElementById(`${answerIndex}`).style.background = 'red'
    }
  }

  const bgcolor = '#6a1b9a'
  let completed =Math.round((question.id/result) *100)

  return (
  <>
    {!store.quizOver ? (
       <OuterWrapperQuestion>
        <InnerWrapperQuestion>
        <QuestionWrapper>        
        <ProgressBar bgcolor={bgcolor} completed={completed} />
        <Text>Question: {question.questionText}</Text>
        </QuestionWrapper>

      <AnswerWrapper>
      <Test>
      <QuestionButtonContainer>
        {question.options.map((option, index) => {
          return (
          <button 
          className={answer ? 'disabled-true' : 'disabled-false'} 
          id={index}
          onClick={() => onAnswerSubmit(question.id, index)} 
          key={option} 
          type="button" 
          disabled={answer}
          >
          {option}</button>
          )
        })}
    </QuestionButtonContainer>
    </Test> 
      <div className="nav-button-wrapper">
      <ReturnButton /> <NextButton />
      </div>
    
      </AnswerWrapper>
      </InnerWrapperQuestion>
      </OuterWrapperQuestion>
  ) : ( 
    <>
    <Summary />
    </>
    )}
  </>
)
} 

const OuterWrapperQuestion = styled.main`
background-color: lightgrey;
width: 100%;
`

const InnerWrapperQuestion = styled.div`
background-color: #FFE4FF;
width: 80%;
// height: 100vh;
margin: 0 auto;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`

const QuestionWrapper = styled.div `
width: 100%;
height: 45vh;
background-color: #A27DA7;
margin: 0px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const Counter = styled.p`
border-radius: 50%;
background-color: beige;
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
`
const Text = styled.h1`
color: whitesmoke;
// border: solid blue 2px;
width: 100%;
`

const AnswerWrapper = styled.div `
width: 80%;
height: 60vh;
background-color: #FFE4FF;
flex-direction: column;
justify-content: center;
display: flex;
// border: solid 2px red;

.nav-button-wrapper{
  display: flex;
  justify-content: center;
  padding: 20px;
}

`
const QuestionButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  width: 500px;
  box-sizing: border-box;

@media (max-width: 667px) {
  width: 150px;

}

.disabled-true{
  font-size: 20px;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  color: whitesmoke;
  padding: 20px;
  margin: 0px;
  }

.disabled-false{
  font-size: 20px;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: #78557D;
  color: whitesmoke;
  padding: 20px;
  margin: 0px;
  }


  @media (min-width: 667px) {
    grid-template-columns: repeat(2, 1fr);

  }
`
const Test = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


