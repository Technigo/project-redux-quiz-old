import React from 'react'
// import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { RestartBtn } from './RestartBtn'
import { Summary } from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  // console.log('question', question)
  const dispatch = useDispatch()

  const store = useSelector((state) => state.quiz)
  console.log('store data:', store)

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  )
  console.log('answer: ', answer)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    if (question.correctAnswerIndex === index) {
      console.log('correct answer')
      document.getElementById(`${index}`).style.background = 'green'
      // document
      //   .getElementByClassName('option-btn')
      //   .setAttribute('disabled', 'disabled')
    } else {
      console.log('not correct answer')
      document.getElementById(`${index}`).style.background = 'red'
    }
    // dispatch(quiz.actions.setButton())
    // const idAnswer = question.id - 1
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
              <div>{question.id}/5</div>
            </div>
            <div>
              <h1>{question.questionText}</h1>
            </div>
          </div>
          {/* className={answer ? 'disable-btn' : 'option-btn'} */}
          <div className='options-container'>
            {question.options.map((option, index) => (
              <button
                disabled={answer}
                type='button'
                className={answer ? 'disable-btn' : 'option-btn'}
                id={index}
                // styla knapparna så att backgrundsfärgen följer med
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
            type='button'
            className='next-button'
            onClick={() => {
              dispatch(quiz.actions.goToNextQuestion())
              console.log('Right answer?:', store.answers[0].isCorrect)
            }}
          >
            Next question
          </button>
        </>
      ) : (
        <>
          <Summary />
        </>
      )}
    </>
  )
}
