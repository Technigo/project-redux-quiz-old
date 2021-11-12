import React from 'react'
import { useSelector } from 'react-redux'
import NextStepButton from '../components/NextStepButton'

import { CurrentQuestion } from 'components/CurrentQuestion'

import Progressbar from '../components/Progressbar'

const Questions = () => {
  const numberOfQuestions = useSelector((state) => state.quiz.questions.length)
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const usersAnswer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )

  document.getElementById('html').className = question.category.toLowerCase()
  const progress = ((question.id - 1) / numberOfQuestions) * 100

  return (
    <div className='question-container'>
      <CurrentQuestion question={question} usersAnswer={usersAnswer} />
      <NextStepButton usersAnswer={usersAnswer} />
      <Progressbar progress={progress} />
    </div>
  )
}

export default Questions
