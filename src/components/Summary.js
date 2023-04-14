/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { Button } from './Button'

export const Summary = () => {
  const dispatch = useDispatch()

  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }
  const selectedAnswers = useSelector((store) => store.quiz.answers)
  const numberOfQuestions = useSelector((store) => store.quiz.questions)
  const numberOfCorrectAnswers = selectedAnswers.filter((answer) => answer.isCorrect)

  return (
    <StyledSummary>
      <StyledCup alt="cup" src="https://www.iconpacks.net/icons/1/free-cup-icon-788-thumb.png" />
      <StyledCongrats>Congratulations!</StyledCongrats>
      <StyledScore>Your total score: <span className="redScore">{numberOfCorrectAnswers.length}</span>/<span className="greenScore">{numberOfQuestions.length}</span></StyledScore>
      <StyledScore>Gött mos!</StyledScore>
      <StyledRecap>
        <StyledRecapText>
          {selectedAnswers.map((singleAnswer) => {
            if (singleAnswer.isCorrect) {
              return (
                <p>
                  <StyledQuestion>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</StyledQuestion>
                  <StyledAnswer><span style={{ color: '#2ECC71', fontSize: '24px', fontWeight: 'bold' }}>✓</span> {singleAnswer.answer}</StyledAnswer>
                </p>
              )
            } else {
              return (
                <p>
                  <StyledQuestion>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</StyledQuestion>
                  <StyledAnswer>❌ {singleAnswer.answer}</StyledAnswer>
                  <StyledCorrectAnswer>Correct answer: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}</StyledCorrectAnswer>
                </p>
              )
            }
          })}
        </StyledRecapText>
      </StyledRecap>
      <Button
        handleClick={() => onRestart()}
        buttonText="Start over" />
    </StyledSummary>
  )
}

const StyledSummary = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
width: 100%;
background-color: #0078bea7;
border-radius: 20px; 
padding-bottom: 30px;

@media (min-width:1024px) {
  width: 70%;
}

@media (min-width:667px) and (max-width:1024px){
  width:70%;
}
`

const StyledCongrats = styled.h1`
font-family: 'Just another hand';
font-size: 72px;
font-weight:400;
color:white;
text-align:center;
margin:0; 
`
const StyledScore = styled.h3`
font-family: 'Just another hand';
color: white;
font-size: 50px; 
font-weight:400;
text-align:center;
margin:0; 

.redScore {
  color:#FF6262;
}

.greenScore {
  color:#08F512;
}
`
const StyledQuestion = styled.h2`
font-family: 'Roboto';
font-size: 16px; 
color:#0c1559;
`
const StyledAnswer = styled.p`
font-family: 'Roboto';
font-size: 16px;
color:#0c1559;
`
const StyledCup = styled.img`
width: 40%;
align-self: center;
margin-top: 40px;
padding:10px;
`
const StyledRecap = styled.div`
display: flex;
flex-direction: column;
background: #AED6F1;
margin: 5%;
border-radius: 5px;
justify-content:center;

`
const StyledCorrectAnswer = styled.h2`
font-size: 14px;
font-family: 'Roboto';
color: #2ECC71;
`

const StyledRecapText = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
align-content:center;
gap: 0;
`
