/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import '../index.css';
import { ProgressBar } from './ProgressBar';
import { QuizSummary } from './QuizSummary';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const [selectedOption, setSelectedOption] = useState(null);
  const [disabled, setDisabled] = useState(false); // added state for disabling options buttons
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedOption(null);
    setDisabled(false); // Reset the disabled state when the question changes
  }, [question, isQuizOver]);

  const onButtonClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
    dispatch(quiz.actions.submitAnswer({
      questionId: question.id,
      answerIndex: selectedOption
    }))
    setSelectedOption(null);
  }

  const onAnswerSelect = (index) => {
    setSelectedOption(index);
    setDisabled(true); // disable options buttons once an answer is selected
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (isQuizOver) {
    return <QuizSummary />;
  }

  return (
    <div className="quiz-section">
      <div className="question-section">
        <h1>Marvel movie-Quiz</h1>
        <h2>Question:
          <br />
          {question.questionText}
        </h2>
        <div className="options">
          {question.options.map((singleOption, index) => (
            <button
              className={selectedOption === index ? 'selected' : ''}
              type="button"
              disabled={disabled}
              onClick={() => onAnswerSelect(index)}
              style={{
                border:
                  selectedOption !== null
                  && index === question.correctAnswerIndex
                    ? '4px solid green'
                    : selectedOption !== null && selectedOption === index
                      ? '4px solid red'
                      : 'none'
              }}>
              {singleOption}
            </button>
          ))}
        </div>
        <div className="next-button-section">
          <button className="next-button" type="button" onClick={onButtonClick}>Next</button>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
}

