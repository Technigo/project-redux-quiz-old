import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { quiz } from 'reducers/quiz.js';

export const Options = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuesionIndex]
  );
  const dispatch = useDispatch();

  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(99);

  const handleOnclickButton = index => {
    setQuestionAnswered(true);
    setAnswerIndex(index);

    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
    );
  };
  const classChecker = index => {
    if (!questionAnswered) {
      return '';
    }
    if (index === question.correctAnswerIndex) {
      return 'correct-answer';
    } else if (index === answerIndex) {
      return 'wrong-answer';
    }
  };

  return (
    <>
      {question.options.map((option, index) => {
        return (
          <div>
            <button
              key={index}
              className={classChecker(index)}
              type="button"
              onClick={() => handleOnclickButton(index)}
            >
              {option}
            </button>
          </div>
        );
      })}
    </>
  );
};
