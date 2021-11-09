import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { quiz } from "../reducers/quiz"
import { Summary } from "./Summary" // 👈 here is the import of Summary.js -> se line 33

export const CurrentQuestion = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  )

  const answer = useSelector(
    (store) => store.quiz.answers.find((a) => a.questionId === question.id) // 👈 this selector fetches the answer to a question (found it in the brief! maybe good for when you do the CheckQuestion function?)
  )
  const quizOver = useSelector((store) => store.quiz.quizOver) // 👈 This selector gets the functions that will be able to render the <Summary /> when all Qs are answered

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

  // 👇 Here is the selected quizOver that executes when al Qs are answered.
  if (quizOver === true) {
    return <Summary />
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
        <p>This is question {question.id} out of 5 questions</p>
      </div>
    </>
  )
}
/// ON LINE: 53 IS WHERE I PUT THE QUESTION COUNTER 👆

/*
buttonNext === false

if array.length !== 0 
ProgressBar +1 
<p>You're right!</p> else <p>Nope sorry, wrong answer</p> 

buttonNext === true

onClick -> state.currentQuestionIndex + 1

(skickar till nästa sida)


*/
