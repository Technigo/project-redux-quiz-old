import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, SummaryPicture } from 'lib/Containers'
import { Header, ResultText, Quote } from '../lib/Text'
import { BigButton } from '../lib/Buttons'
import { quiz } from '../reducers/quiz'

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const rightAnswers = answers.filter((answer) => answer.isCorrect)
  const results = useSelector((state) => state.quiz.results)
  const dispatch = useDispatch()

  return (
    <Container>
      <Header>The results are in!</Header>
      <ResultText> You answered {rightAnswers.length} right out of {answers.length} questions!</ResultText>
      <Quote>
        {(rightAnswers.length > 8) ? results[0].text : (rightAnswers.length > 7) ? results[1].text : (rightAnswers.length > 4) ? results[2].text : results[3].text}
      </Quote>
      <SummaryPicture
        src={(rightAnswers.length > 8) ? results[0].image : (rightAnswers.length > 7) ? results[1].image : (rightAnswers.length > 4) ? results[2].image : results[3].image}
        alt="" />
      <NavLink to="/"><BigButton onClick={() => dispatch(quiz.actions.restart())}>Restart</BigButton></NavLink>
    </Container>
  )
}
