import React from 'react'
// import { quiz } from '../reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'

export const Summary = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  console.log('summary:', storeAnswer)

  const storeQuestion = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  console.log('question;', storeQuestion)

  const dispatch = useDispatch() ////användas för restart btn

  return (
    <>
    {storeAnswer.map((results) => (
    <div key={results.questionId} style={{ backgroundColor: storeQuestion.backgroundColor }}>
          <h3 className='question-title'>{results.questionId}</h3>
          <div className='text'>
            <p>{results.question.questionText}</p>
            <p className='your-answer'>Your answer {results.answer}</p>
          </div>
        { results.isCorrect ? <i className="fas fa-check"/>: <i className="fas fa-times"/>}
    </div>
      ))}
    </>
  )
}
