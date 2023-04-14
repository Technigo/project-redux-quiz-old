import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MovingComponent } from 'react-moving-text'
import { quiz } from 'reducers/quiz';
import { TfiAlarmClock } from 'react-icons/tfi';
import { Button } from 'reusable-components/Button'
import { Title } from 'reusable-components/Title';
import { Container, ContainerRow, Question } from './SummaryPageStyling';
import { AccordionComponent } from './AccordionComponent';

export const SummaryPage = ({ score, setScore }) => {
  const answers = useSelector((store) => store.quiz.answers)
  const wrongAnswers = answers.filter((answer) => answer.isCorrect === false)
  const startTime = useSelector((store) => store.quiz.startTime)
  const countOfWrongAnswers = wrongAnswers.length

  const endTime = new Date().getTime()
  const seconds = (endTime - startTime) / 1000;

  const dispatch = useDispatch()
  const restartQuiz = () => {
    setScore(0)
    dispatch(quiz.actions.restart())
  }

  return (
    <Container main>
      <Title>
        <MovingComponent
          type="zoomIn"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease-out"
          iteration="2"
          fillMode="none">
        Your score is {score > 0 ? score : 0}/21!
        </MovingComponent>
      </Title>
      <ContainerRow><TfiAlarmClock /> <p>Time spent: {Math.floor(seconds)}s</p></ContainerRow>
      <Question>You had {countOfWrongAnswers} incorrect answers</Question>
      <AccordionComponent />
      <Button onClick={restartQuiz}>Play again
      </Button>
    </Container>
  )
}