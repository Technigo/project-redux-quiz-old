import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';
import { Title } from 'reusable-components/Title'
import { CountdownBox } from './CurrentQuestion/CurrentQuestionStyling'

export const Timer = ({ countdownRef, setScore, score }) => {
  const currentQuestionId = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex].id
  )
  const dispatch = useDispatch()
  const [expirationTime, setExpirationTime] = useState(Date.now() + 10000);

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <span>00</span>;
    } else {
      return <span>{seconds.toString().padStart(2, '0')}</span>;
    }
  };

  const handleComplete = (questionId, answerIndex) => {
    setExpirationTime(Date.now() + 10000);
    console.log('Countdown completed');
    console.log(currentQuestionId)
    setScore(score - 2)
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    dispatch(quiz.actions.goToNextQuestion())
    countdownRef.current.stop();
    countdownRef.current.start();
  };

  return (
    <CountdownBox>
      <Title fontSize="1em">
        <Countdown
          zeroPadTime={2}
          renderer={renderer}
          ref={countdownRef}
          date={expirationTime}
          onComplete={() => {
            handleComplete(currentQuestionId, null);
          }} />
      </Title>
    </CountdownBox>
  )
}