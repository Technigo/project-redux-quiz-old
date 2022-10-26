import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';

export const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  const initialState = useSelector((state) => state.quiz.initialState);
  const dispatch = useDispatch();

  /* eslint-disable no-unused-vars */
  const onRestart = () => {
    dispatch(
      quiz.actions.restart({
        initialState
      })
    );
    /* eslint-disable no-unused-vars */

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
        <RestartButton onClick={() => onRestart()}> Börja om </RestartButton>
      </SummaryContainer>
    )
  }
};