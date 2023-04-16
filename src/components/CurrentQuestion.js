import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextButton } from './NextButton';
import { ProgressBar } from './ProgressBar';
import { AnswerButton } from './AnswerButton';
import { SummaryPage } from '../pages/Summary';
import { quiz } from '../reducers/quiz';
import './CurrentQuestion.css';

export const CurrentQuestion = () => {
  // const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  console.log(quiz);
  const dispatch = useDispatch();
  const [goToNextButton, setGoToNextButton] = useState(false);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oups, no question here!</h1>
    // return <h1>Oh no! I could not find the current question!</h1>;
  }
  const moveToNext = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setGoToNextButton(false);
  };

  return (
//     <div>
//       <h1>Question: {question.questionText}</h1>
//     </div>
//   )
// }
    <>
      {quizOver && <SummaryPage />}
      {!quizOver && (
        <div className="eslint-hater">
          <h1>How well do you know your garden: {question.questionText}</h1>
          <div className="answer-buttons">
            {question.options.map((option, index) => (
              <AnswerButton
                className="answerButton"
                key={option}
                index={index}
                option={option}
                setGoToNextButton={setGoToNextButton} />
            ))}
          </div>
          <div className="eslint-hater-bottom">
            {goToNextButton && <NextButton className="nextButton" clickAction={moveToNext} />}
            <ProgressBar />
          </div>
        </div>
      )}
    </>
  );
};
