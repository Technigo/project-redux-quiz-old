import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'
import { ProgressBar } from './ProgressBar'
import { Header } from './Header'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch();
  const state = useSelector((store) => store.quiz)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onButtonClick = (id, index) => {
    dispatch(quiz.actions.goToNextQuestion())
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  const onRestartClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <>
      {!state.quizOver ? (
        <>
          <Header />
          <div className="questionContainer">
            <h1>{question.questionText}</h1>
            {question.options.map((singleOption, index) =>
            // eslint-disable-next-line implicit-arrow-linebreak
              <button
                className="optionBtn"
                type="button"
                onClick={() => onButtonClick(question.id, index)}
                // eslint-disable-next-line react/no-array-index-key
                key={index}>
                {singleOption}
              </button>)}
            <ProgressBar />
          </div>
        </>
      ) : (
        <div>
          <Summary />
        </div>
      )}
      {/* The restart button visible on all pages since it's out of the ternary expression */}
      <button className="restart-button" type="button" onClick={onRestartClick}>Restart quiz</button>
    </>
  )
}