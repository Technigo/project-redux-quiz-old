import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';
import './currentQuestion.css'

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  const answers = useSelector((store) => store.quiz.answers);
  const currentQuestionIndex = useSelector((store) => store.quiz.currentQuestionIndex);
  const quizOver = useSelector((store) => store.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOnChange = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  }

  const handleOnClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    !quizOver && <div className="question_container">
      <div className="question_title">Animal&apos;s quiz</div>
      <h1 className="question_text">Question: {question.questionText}</h1>
      <form className="form_radio" onSubmit={(event) => event.preventDefault()}>
        {question.options.map((option, index) => {
          return (
            <label
              className="form_radio_label"
              htmlFor="input_radio"
              key={index + 1}>
              <input
                disabled={answers[currentQuestionIndex]}
                className="form_radio_input"
                id="input_radio"
                required
                type="radio"
                value={option}
                name={question.id}
                onChange={() => handleOnChange(index)} />
              {option}
            </label>
          )
        })}
      </form>
      <button type="button" disabled={!answers[currentQuestionIndex]} className={`next_question_button ${!answers[currentQuestionIndex] && 'disable'}`} onClick={() => handleOnClick()}>Next Question</button>
    </div>
  )
}
