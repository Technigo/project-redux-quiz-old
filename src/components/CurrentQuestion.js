import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'
import { RestartBtn } from './RestartBtn'
import { Summary } from './Summary'

export const CurrentQuestion = () => {
  const dispatch = useDispatch()

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const store = useSelector((state) => state.quiz)

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  )

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    // if user answered correct the option-button will change to green background and have opacity 1
    // if wrong answer -> background to red and opacity 1
    if (question.correctAnswerIndex === index) {
      document.getElementById(`${index}`).style.background = '#35A55F'
      document.getElementById(`${index}`).style.opacity = '1'
    } else {
      document.getElementById(`${index}`).style.background = '#C93650'
      document.getElementById(`${index}`).style.opacity = '1'
    }
  }

  return (
    <>
      {!store.quizOver ? (
        <>
          <div
            className='color-container'
            style={{ backgroundColor: question.backgroundColor }}
          >
            <div className='top-container'>
              <RestartBtn />
              <div className='counter'>
                {question.id}/{store.questions.length}
              </div>
            </div>
            <div className='questionandicon'>
              <h1>{question.questionText}</h1>
              <img className='question-icon' src={question.imgUrl} alt="pic"/>
            </div>
          </div>
          <div className='button-container'>
            <div className='options-container'>
              {question.options.map((option, index) => (
                <button
                  disabled={answer}
                  type='button'
                  className={answer ? 'disable-btn' : 'option-btn'}
                  id={index}
                  key={option}
                  onClick={() => {
                    onAnswerSubmit(question.id, index)
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              disabled={!answer}
              type='button'
              // have two different classnames (for styling)
              // depending on if user have answered or not
              className={!answer ? 'disable-next-btn' : 'next-button'}
              onClick={() => {
                dispatch(quiz.actions.goToNextQuestion())
              }}
            >
              Next question
            </button>
          </div>
        </>
      ) : (
        <>
          <Summary />
        </>
      )}
    </>
  )
}
