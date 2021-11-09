import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import NextQuestionButton from './NextQuestionButton'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answers = useSelector((state) => state.quiz.answers)
  const questions = useSelector((state) => state.quiz.questions)
  // console.log(answers)

  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  // console.log(currentQuestionIndex)

  const correctOrNot = answers[currentQuestionIndex] ? answers[currentQuestionIndex].isCorrect : ''
  console.log(correctOrNot)

  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  }
  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <div>
      <div>
        <h1>{question.questionText}</h1>
        {question.options.map((option, index) => (
          <button type="button"
            key={option}
            onClick={() => onAnswerSubmit(question.id, index)}
            disabled={answers[currentQuestionIndex]}>
            {option}
          </button>
        ))}
      </div>
      <NextQuestionButton answers={answers} currentQuestionIndex={currentQuestionIndex} onNextQuestion={onNextQuestion} />
      <h1>Your answer:
        {correctOrNot.toString()}
      </h1>
      <p>Progress bar: {currentQuestionIndex + 1}/{questions.length} </p>
    </div>
  )
}
