import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';
import './currentQuestion.css'

export const CurrentQuestion = () => {
  const [index, setIndex] = useState(null);
  const dispatch = useDispatch()
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOnChange = () => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <div className="question_container">
      <div className="question_title">Animal&apos;s quiz</div>
      <h1 className="question_text">Question: {question.questionText}</h1>
      <form className="form_radio" onSubmit={(event) => event.preventDefault()}>
        {question.options.map((option, i) => {
          return (
            <label
              className="form_radio_label"
              htmlFor="input_radio">
              <input
                className="form_radio_input"
                id="input_radio"
                required
                type="radio"
                value={option}
                name={question.id}
                onChange={() => setIndex(i)} />
              {option}
            </label>
          )
        })}
      </form>
      <button type="button" className="next_question_button" disabled={index} onClick={() => handleOnChange()}>Next Question</button>
    </div>
  )
}
