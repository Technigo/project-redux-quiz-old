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
          <div className='text'>
            <h3 className='question-title'>{results.questionId}</h3>    
            <div>
              <h4 className='question-text'>{results.question.questionText}</h4>  
              <div className='answer-container'>
                <p className='your-answer'>{results.answer}</p>
                  {results.isCorrect ? (
                    <i className='fas fa-check' />
                  ) : (
                    <i className='fas fa-times' />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='restart-btn-container'>
        <RestartBtn />
      </div>
    </section>
  )
}
