import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'

export const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  const dispatch = useDispatch();

  const SummaryContainer = styled.div`
    `;

  const SummaryScore = styled.h3`
    `;

  const RestartButton = styled.button`
    `;

  return (
    <SummaryContainer>
      <p>summary-page</p>
      <SummaryScore>
          You got {rightAnswers.length} out of {question.length} correct
      </SummaryScore>
      <RestartButton onClick={() => { dispatch(quiz.actions.restart()) }}> Börja om </RestartButton>
    </SummaryContainer>
  )
};