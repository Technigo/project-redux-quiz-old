import React from 'react'
import { useSelector } from 'react-redux'
import { RestartBtn2 } from './RestartBtn2'
import { Counter } from './Counter'
import stripes from '../stripes.png'

export const Summary = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  const storeQuestion = useSelector((state) => state.quiz.questions)

  return (
    <>
    <div className='background-stripes' style={{ backgroundImage: `url(${stripes})` }}>
    <section className='summery-container'>
      <Counter />
      <section className='summary-section'>
        {/* map through each answer och display the question, */}
        {/* the user answers, and if the user answered incorrect -> display the right answer */}
        {/* Line 21: use the color values from the state to change background-color */}
        {storeAnswer.map((results, index) => (
          <div
            key={results.questionId}
            style={{ backgroundColor: storeQuestion[index].backgroundColor }}
            className='summary-answer'
          >
            <div className='text'>
              <h3 className='question-title'>{results.questionId}</h3>
              <div className='flex-container-answer'>
                <h4 className='question-text'>
                  {results.question.questionText}
                </h4>
                <div className='answer-container'>
                  <p className='your-answer'>{results.answer}</p>

                  {results.isCorrect ? (
                    <i className='fas fa-check' />
                  ) : (
                    <i className='fa fa-times' />
                  )}
                </div>
                {!results.isCorrect && (
                  <p className='correct-answer'>
                    (Next time answer -  
                    {
                      results.question.options[
                        results.question.correctAnswerIndex
                      ]
                    }
                    )</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
    <div className='restart-btn-container'>
        <RestartBtn2 />
      </div>
    </div>
    </>              
  )
}
