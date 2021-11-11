import React from 'react'
// import { quiz } from '../reducers/quiz'
import { useSelector } from 'react-redux'

import { RestartBtn } from './RestartBtn'
import { Counter } from './Counter'

export const Summary = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  console.log('summary:', storeAnswer)

  const storeQuestion = useSelector((state) => state.quiz.questions)
  console.log('question;', storeQuestion)

  return (
    <section className='summary-section'>
      <Counter />
      {storeAnswer.map((results, index) => (
        <div
          key={results.questionId}
          style={{ backgroundColor: storeQuestion[index].backgroundColor }}
          className='summary-answer'
        >
          <h3 className='question-title'>{results.questionId}</h3>
          <div className='text'>
            <p>{results.question.questionText}</p>
            <p className='your-answer'>Your answer: {results.answer}</p>
          </div>
          <div className='i-container'>
            {results.isCorrect ? (
              <i className='fas fa-check' />
            ) : (
              <i className='fas fa-times' />
            )}
          </div>
        </div>
      ))}
      <div className='restart-btn-container'>
        <RestartBtn />
      </div>
    </section>
  )
}
