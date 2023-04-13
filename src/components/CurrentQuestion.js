import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import '../index.css';
// import { QuizSummary } from './QuizSummary';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const [selectedOption, setSelectedOption] = useState(null);
  const isQuizOver = useSelector((state) => state.quiz.quizOver);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedOption(null);
  }, [question, isQuizOver]);

  const onButtonClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: selectedOption }))
    setSelectedOption(null);
  }

  const onAnswerSelect = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    setSelectedOption(index);
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((singleOption, index) => (
        <button
          className={selectedOption === index ? 'selected' : ''}
          type="button"
          onClick={() => onAnswerSelect(index)}>
          {singleOption}
        </button>
      ))}
      <div className="next-button-section">
        <button className="next-button" type="button" disabled={!selectedOption} onClick={onButtonClick}>Next</button>
      </div>
    </div>
  );
}

