import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { quiz } from "../reducers/quiz"

export const CurrentQuestion = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  )

  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  const onNextButtonClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <>
      <div>
        <h1>{question.questionText}</h1>
        {question.options.map((item, index) => (
          <button key={item} onClick={() => onAnswerSubmit(question.id, index)}>
            {item}
          </button>
        ))}
      </div>
      <div>
        <button
          disabled={quiz.answers ? true : false}
          onClick={() => onNextButtonClick()}
        >
          Next
        </button>
      </div>
    </>
  )
}

/*
buttonNext === false

if array.length !== 0 
ProgressBar +1 
<p>You're right!</p> else <p>Nope sorry, wrong answer</p> 

buttonNext === true

onClick -> state.currentQuestionIndex + 1

(skickar till nästa sida)


*/
