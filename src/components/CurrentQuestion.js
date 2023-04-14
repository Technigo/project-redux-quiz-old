import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import '../index.css';
import { ProgressBar } from './ProgressBar';
import { QuizSummary } from './QuizSummary';

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
    dispatch(quiz.actions.submitAnswer({
      questionId: question.id,
      answerIndex: selectedOption
    }))
    setSelectedOption(null);
  }

  const onAnswerSelect = (index) => {
    // dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    setSelectedOption(index);
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (isQuizOver) {
    return <QuizSummary />;
  }

  return (
    <div className="question-section">
      <ProgressBar />
      <h1>Marvel movie-Quiz</h1>
      <h1>Question:
        <br />
        {question.questionText}
      </h1>
      <div className="options">
        {question.options.map((singleOption, index) => (
          <button
            className={selectedOption === index ? 'selected' : ''}
            type="button"
            onClick={() => onAnswerSelect(index)}>
            {singleOption}
          </button>
        ))}
      </div>
      <div className="next-button-section">
        <button className="next-button" type="button" onClick={onButtonClick}>Next</button>
      </div>
    </div>
  );
}

