import React from 'react'
import { useSelector} from 'react-redux'
import { RestartButton } from './Button'
import { Footer } from 'components/Footer'
import { Link } from 'react-router-dom'


const Summary = () => {
    const userAnswer = useSelector((state) => state.quiz.answers);
  
    const correctAnswers = userAnswer.filter(item => item.isCorrect)

      return (
        <>
      <div className='summary'>
        <h1>This is your summary</h1>
        {userAnswer.map((answer) => (
         <div className='summary-text' key={answer.questionId}>
              <h5>
              {' '}
              {answer.questionId}: Correct answer: {' '}
              {answer.question.options[answer.question.correctAnswerIndex]}
              </h5>
              <p>
               Your answer: {' '}
              {answer.answer}
              </p>
            </div>
          
        ))}
         <Link to="/"style={{ color: 'inherit', textDecoration: 'inherit'}}>
         <RestartButton />
         </Link>
        <p>Your score {correctAnswers.length}/{userAnswer.length}</p>
      </div>
      <Footer/>
      
      </>
    );
  };
  
  export default Summary;
  

