import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Summary from "components/Summary"
import { Button } from "components/Button"

import { quiz } from "../reducers/quiz"

export const CurrentQuestion = () => {
  // const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex)
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  )
  const dispatch = useDispatch()
  const quizOver = useSelector((state) => state.quiz.quizOver)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion({}))
  }

  if (!quizOver)
    return (
      <div>
        <h1>Question: {question.questionText}</h1>
        {question.options.map((item, index) => (
          <Button
            questionId={question.id}
            correctAnswerIndex={question.correctAnswerIndex}
            key={index}
            answerIndex={question.answerIndex}
            disabled={!!answer}
            onClick={() => onAnswerSubmit(question.id, index)}
            type="button"
            item={item}
          >
            {" "}
          </Button>
        ))}
        {/* {question.options.map((item, index) => (
          <button
            key={index}
            disabled={!!answer}
            onClick={() => onAnswerSubmit(question.id, index)}
          >
            {item}
          </button>
        ))} */}
        <button onClick={handleClick} disabled={!answer}>
          NEXT QUESTION
        </button>
        <p>{question.id}/5</p>
      </div>
    )
  return <Summary />
}

// not submitting answer to store on "answer button" but save it and submit with Next question
