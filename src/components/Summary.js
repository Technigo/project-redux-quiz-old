import React from 'react'
import {quiz} from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'

const Summary = () => {
    const userAnswer = useSelector((state) => state.quiz.answers);
    const dispatch = useDispatch()

    const clickRestart = () => {
        dispatch(quiz.actions.restart())
    }

    return (
      <div className='summary'>
        <h2>This is your summary</h2>
        {userAnswer.map((answer) => (
          <>
            <p>
              {' '}
              {answer.questionId}: Correct answer:
              {answer.question.options[answer.question.correctAnswerIndex]} Your
              answer:
              {answer.answer}
            </p>
          </>
        ))}
        <button className='btn restart' type='button' onClick={clickRestart}>
          Restart Quiz
        </button>
      </div>
    );
  };
  
  export default Summary;
  

