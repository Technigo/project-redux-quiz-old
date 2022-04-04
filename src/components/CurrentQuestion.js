import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Option } from './Option'
import { NextButton, SubmitButton } from './Buttons'

export const CurrentQuestion = () => {
  const dispatch = useDispatch()

  /* 
  
  // question could come from the previous selector in the last example
  const answer = useSelector((state) => state.quiz.answers.find((a) => ( a.questionId === question.id ))) 
  
  */
  
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questions = useSelector((state) => state.quiz.questions)
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const quizOver = useSelector((state) => state.quiz.quizOver)


  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, answerIndex) => (
        <Option key={answerIndex} option={option} answerIndex={answerIndex} isCorrectAnswer={isCorrectAnswer}
        setIsCorrectAnswer={setIsCorrectAnswer} />
      ))}
      {/* <NextButton /> */}
      {!quizOver && questionIndex === questions.length - 1 ? <SubmitButton /> : <NextButton setIsCorrectAnswer={setIsCorrectAnswer} />}

    </div>
  )
}

