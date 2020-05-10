import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, SummaryPicture } from 'lib/Containers'
import { Header, ResultText, Quote } from '../lib/Text'
import { BigButton } from '../lib/Buttons'
import { quiz } from '../reducers/quiz'

export const Summary = () => {
  const summary = useSelector((state) => state.quiz.summary)
  const dispatch = useDispatch()

  return (
    <Container>
      <Header>The results are in!</Header>
      <ResultText>
        You answered {summary.correctAnswers} right out of {summary.numberOfQuestions} questions!
      </ResultText>
      <Quote>{summary.quote}</Quote>
      <SummaryPicture src={summary.image} alt="" />
      <NavLink to="/"><BigButton onClick={() => dispatch(quiz.actions.restart())}>Restart</BigButton></NavLink>
    </Container>
  )
}
