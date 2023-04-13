import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const dispatch = useDispatch()
  const userAnswers = useSelector((store) => store.quiz.answers)

  const onRestartClick = () => {
    dispatch(quiz.actions.restart())
  }

  const correctAnswer = userAnswers.filter((answers) => {
    return answers.isCorrect === true
  })

  return (
    <>
      <div>
        <h1>Quiz Summary</h1>
        <h2>Great job! You got {correctAnswer.length} out of 6!</h2>
        {userAnswers.map((singleAnswer) => {
          return (
            <div key={singleAnswer.questionId}>
              <h3>{singleAnswer.questionId}: {singleAnswer.question.questionText}</h3>
              <h3>Your answer was: {singleAnswer.answer}</h3>
              <h3>The correct answer was:
                {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}
              </h3>
            </div>
          )
        })}
      </div>
      <div>
        <button type="button" onClick={onRestartClick}>Restart quiz</button>
      </div>
    </>
  )
}