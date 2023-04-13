/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { OptionButton, HintButton } from './styled_components/buttons.js'
import Hint from './Hint.js';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const dispatch = useDispatch();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setShowHint(false);
  }, [question]); // Sets showHint to false every time the question changes

  const handleAnswerClick = (answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex }));
    // Submit answer to the store

    setTimeout(() => {
      dispatch(quiz.actions.goToNextQuestion());
    }, 1500); // Delays the rendering of the next question after a button has been clicked
  };

  const handleHintClick = () => {
    setShowHint(true);
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((optionText, optionIndex) => (
          <OptionButton key={optionText} onClick={() => handleAnswerClick(optionIndex)}>
            {optionText}
          </OptionButton>
        ))}
        <HintButton onClick={handleHintClick}>Would you like a hint?</HintButton>
        {showHint && <Hint question={question} />}
      </div>
    </div>
  );
};
