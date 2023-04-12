
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((singleOption) => <label htmlFor="current-question" key={singleOption}>
        <input
          id="current-question"
          type="radio"
          value={singleOption}
          // onChange={(event) => set???(event.target.value)} need to set with real values
          // checked={singleOption === ???} need to set with real values
          aria-label={singleOption} />
        {singleOption}
      </label>)}
    </div>
  )
}