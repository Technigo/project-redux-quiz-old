/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import './Summary.css';

export const Summary = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers) // asking store to give us anwers from quiz object
  const questionArray = useSelector((state) => state.quiz.questions);
  const correctAnswer = useSelector((state) => state.quiz.answers.filter((a) => a.isCorrect)) //filtering out correct answers


  return (
    <main className="summary-container">
      <section className="summary">
        <h2>Summary</h2>
        {answers.map((answer) => (
        <div className="" key={answer.question.questionText}>
          <p>
            {answer.question.questionText}
            <span>{answer.answer}</span>
            {answer.isCorrect ? "✅" : "❌"}
          </p>
            {!answer.isCorrect ? answer.question.options[answer.question.correctAnswerIndex]: ""}
          
        </div>
        
        ))}
        <div className="summary-bottom" >
          <p className="correct-answers">
            You answered {`${correctAnswer.length}`}/{questionArray.length} questions correct
          </p>
       
        <button className="restart-button" onClick={() => dispatch(quiz.actions.restart())}>RESTART</button>
        </div>
      </section>
    </main>
  )
}

export default Summary;

            
            
