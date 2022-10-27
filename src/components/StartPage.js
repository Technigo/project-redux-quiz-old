import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from './CurrentQuestion';
import { Container } from './StyledComponents/Container';

export const StartPage = () => {
  const dispatch = useDispatch()
  const start = useSelector((state) => state.quiz.quizStarted);

  return (
    <div>
      <Container>
        {!start ? <button type="button" onClick={() => dispatch(quiz.actions.startQuiz())}>Start</button>
          : <CurrentQuestion />}
      </Container>
    </div>
  )
}
