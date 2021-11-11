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
      document.getElementById(`${index}`).style.background = '#66DE93'
      document.getElementById(`${index}`).style.opacity = '1'
    } else {
      document.getElementById(`${index}`).style.background = '#D83A56'
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
              <div>
                {question.id}/{store.questions.length}
              </div>
            </div>
            <div>
              <h1>{question.questionText}</h1>
            </div>
          </div>
          {/* className={answer ? 'disable-btn' : 'option-btn'} */}
          <div className='button-container'>
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
              disabled={!answer}
              type='button'
              className={!answer ? 'disable-next-btn' : 'next-button'}
              onClick={() => {
                dispatch(quiz.actions.goToNextQuestion())
                console.log('Right answer?:', store.answers[0].isCorrect)
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
