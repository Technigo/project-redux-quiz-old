import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, SummaryPicture } from 'lib/Containers'
import { Header, SummaryText } from '../lib/Text'
import { BigButton } from '../lib/Buttons'
import { quiz } from '../reducers/quiz'

export const Summary = () => {
  const summary = useSelector((state) => state.quiz.summary)
  const dispatch = useDispatch()

  return (
    <Container>
      <Header>The results are in!</Header>
      <SummaryText>
        You answered {summary.correctAnswers} right out of {summary.numberOfQuestions} questions!
      </SummaryText>
      <SummaryText>{summary.quote}</SummaryText>
      <SummaryPicture src={summary.image} alt="" />
      <NavLink to="/"><BigButton style={{ marginTop: '20px' }} onClick={() => dispatch(quiz.actions.restart())}>Restart</BigButton></NavLink>
    </Container>
  )
}
