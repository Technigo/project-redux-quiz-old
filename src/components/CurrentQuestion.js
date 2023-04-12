import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const [selectedOption, setSelectedOption] = useState(null);
  const isQuizOver = useSelector((store) => store.quiz.quizOver);
  useEffect(() => {
    console.log('from CurrentQuestion isQuizOver', isQuizOver);
  });

  const dispatch = useDispatch();
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const onButtonClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: selectedOption }))
    setSelectedOption(null);
  }

  return (
    <div>
      <button type="button" disabled={!selectedOption} onClick={onButtonClick}>Next</button>
      <h1>Question: {question.questionText}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label className="radio-buttons" htmlFor="options">
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)} />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
