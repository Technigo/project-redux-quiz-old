/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import './Summary.css';
import { Link } from 'react-router-dom';


export const Summary = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers) // asking store to give us anwers from quiz object
  const questionArray = useSelector((state) => state.quiz.questions);
  const correctAnswer = useSelector((state) => state.quiz.answers.filter((a) => a.isCorrect)) //filtering out correct answers


  return (
    <main className="summary-container">
      <div className="summary">
        <h1>Summary</h1>
        {answers.map((answer) => (
        <div className="" key={answer.question.questionText}>
          <p>
            {answer.question.questionText}
          </p>
          <p>
            <span> Your answer: {answer.answer}</span>
            {answer.isCorrect ? " ✔" : " ✖"}
          </p>
          <p>
            Correct answer: {!answer.isCorrect ? answer.question.options[answer.question.correctAnswerIndex]: ""}
          </p>
        </div>
        ))}
        <div className="summary-bottom" >
          <p className="correct-answers">
            You answered {`${correctAnswer.length}`}/{questionArray.length} questions correct
          </p>
        </div>  
      </div> 
      <div>
      <Link onClick={() => dispatch(quiz.actions.restart())} to="/">
          <button className="restart-button">RESTART QUIZ!</button>
      </Link>   
      </div>
    </main>
    
  )
}

export default Summary;

            
            
