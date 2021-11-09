import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const dispatch = useDispatch()

  console.log('question', question)

  const store = useSelector((state) => state.quiz)
  console.log('store data:', store)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    // dispatch(quiz.actions.setButton())
  }

  return (
    <>
      <div className='color-container'>
        <div className='top-container'>
          <button
            className='restart-btn'
            type='button'
            onClick={() => {
              dispatch(quiz.actions.restart())
            }}
          >
            <span role='img' aria-label='arrow left emoji'>
              ⬅
            </span>
            &nbsp;&nbsp;Back to basic
          </button>
          <div>{question.id}/5</div>
        </div>
        <div>
          <h1>{question.questionText}</h1>
        </div>
      </div>

      <div className='options-container'>
        {question.options.map((option, index) => (
          <button
            type='button'
            // className={store.btnActive ? 'active-btn' : 'option-btn'}
            className='option-btn'
            key={option}
            onClick={() => onAnswerSubmit(question.id, index)}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        type='button'
        className='next-button'
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
      >
        Next question
      </button>
    </>
  )
}
