import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quiz } from '../reducers/quiz'

const Progressbar = ({ numberOfQuestions, question }) => {
  //   const question = useSelector(
  //     (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  //   );

  console.log(question.id)
  console.log(numberOfQuestions)

  return (
    <section className='main-container'>
      <label htmlFor='quiz'>Progress</label>
      <progress value={question.id} max={numberOfQuestions}></progress>
    </section>
  )
}

export default Progressbar
