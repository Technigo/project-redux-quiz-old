/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SummaryContainer,
  SummaryScore,
  RestartButton
} from 'styledcomponents/SummaryStyle';
import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const question = useSelector((state) => state.quiz.questions);
  const answer = useSelector((store) => store.quiz.answers);
  const rightAnswers = answer.filter((item) => item.isCorrect === true);
  const dispatch = useDispatch();

  return (
    <SummaryContainer>
      <h1>Sammanfattning</h1>

      {(rightAnswers.length <= 2 && (
        <img
          alt="bad"
          src="https://media.giphy.com/media/SmHXb7cDn1hVoNKZI4/giphy.gif"
          // src="https://media.giphy.com/media/0mLLCRteLho6WvLkN4/giphy.gif"
          width="480"
          height="480"
        />
      )) ||
        (rightAnswers.length === 3 && (
          <img
            alt="alright"
            /* src="https://media.giphy.com/media/LNxlSJpxAN55bS51Ro/giphy.gif" */
            src="https://media.giphy.com/media/hVUuQmXu7rtSNVUo6n/giphy.gif"
          />
        )) ||
        (rightAnswers.length >= 4 && (
          <img
            alt="amazing"
            src="https://media.giphy.com/media/ZbYi3xM1S5A5071TXe/giphy.gif"
            width="480"
            height="480"
          />
        ))}
      <SummaryScore>
        Du fick {rightAnswers.length} av {question.length} korrekta svar!
      </SummaryScore>
      <RestartButton
        onClick={() => {
          dispatch(quiz.actions.restart());
        }}
      >
        {' '}
        Börja om{' '}
      </RestartButton>
    </SummaryContainer>
  );
};
