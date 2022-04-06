import React from 'react'
import {quiz} from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'
import { RestartButton } from './Button';

const Summary = () => {
    const userAnswer = useSelector((state) => state.quiz.answers);
    const dispatch = useDispatch()

   

    return (
      <div className='summary'>
        <h2>This is your summary</h2>
        {userAnswer.map((answer) => (
          <>
            <p>
              {' '}
              {answer.questionId}: Correct answer:
              {answer.question.options[answer.question.correctAnswerIndex]} 
              Your answer:
              {answer.answer}
            </p>
          </>
        ))}
     <RestartButton />
      </div>
    );
  };
  
  export default Summary;
  

