import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz';

export const Timer = ({ countdownRef, setScore, score }) => {
  const currentQuestionId = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex].id
  )
  const dispatch = useDispatch()
  const [expirationTime, setExpirationTime] = useState(Date.now() + 10000);

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
    <Countdown
      ref={countdownRef}
      date={expirationTime}
      onComplete={() => {
        handleComplete(currentQuestionId, null);
      }} />
  )
}

// import React, { useState, useEffect } from 'react';

// export const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(() => seconds + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [seconds]);

//   return (
//     <div>
//       <h1>{seconds} seconds</h1>
//     </div>
//   );
// }
