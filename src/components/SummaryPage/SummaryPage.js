import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MovingComponent } from 'react-moving-text'
import { quiz } from 'reducers/quiz';
import { TfiAlarmClock } from 'react-icons/tfi';
import { Container, RestartButton, ContainerRow } from './SummaryPageStyling';
import { AccordionComponent } from './AccordionComponent';

export const SummaryPage = (props) => {
  const answers = useSelector((store) => store.quiz.answers)
  const wrongAnswers = answers.filter((answer) => answer.isCorrect === false)
  console.log(wrongAnswers)
  const countOfWrongAnswers = wrongAnswers.length
  console.log(countOfWrongAnswers)
  const dispatch = useDispatch()
  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }

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
  Your score is {props.score > 0 ? props.score : 0}/21!
      </MovingComponent>
      <ContainerRow><TfiAlarmClock /> <p>Time spent: 40s</p></ContainerRow>
      <h2>You had {countOfWrongAnswers} incorrect answers:</h2>
      <AccordionComponent />
      <RestartButton onClick={restartQuiz}>Play again
      </RestartButton>
    </Container>
  )
}