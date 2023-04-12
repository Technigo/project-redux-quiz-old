import React from 'react'
import { useSelector } from 'react-redux'
import { MovingComponent } from 'react-moving-text'
import { Container, RestartButton } from './SummaryPageStyling';
import { AccordionComponent } from './AccordionComponent';

export const SummaryPage = (props) => {
  const answers = useSelector((store) => store.quiz.answers)
  const wrongAnswers = answers.filter((answer) => answer.isCorrect === false)
  console.log(wrongAnswers)
  const countOfWrongAnswers = wrongAnswers.length
  console.log(countOfWrongAnswers)
  // const correctAnswers = answers.filter((answer) => answer.isCorrect === true)
  return (
    <Container>
      <MovingComponent
        type="zoomIn"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease-out"
        iteration="1"
        fillMode="none">
  Your score is {props.score > 0 ? props.score : 0}
      </MovingComponent>
      <h2>time taken</h2>
      <h2>You had {countOfWrongAnswers} incorrect answers:</h2>
      <AccordionComponent />
      <RestartButton>Play again
      </RestartButton>
    </Container>
  )
}