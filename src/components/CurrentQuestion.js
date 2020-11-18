import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Summary } from './Summary';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const [userAnswer, setUserAnswer] = useState("");
  const answer = useSelector((state) => state.quiz.answers.find((answer) => answer.questionId === question.id))

  console.log("userAnswer: " + userAnswer);
  console.log("answer: " + JSON.stringify(answer));

  const allAnswers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch();

  const submitAnswer = ( id, index ) => {
      if (parseInt(userAnswer) === question.correctAnswerIndex) {
        console.log("Rätt svar")
      } else {
        console.log("Fel svar")
      }
      dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
      
  }  
  
  const nextQuestion = () => { 
    dispatch(quiz.actions.goToNextQuestion())
    setUserAnswer("")
  };

  const options = question.options;

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>

  } else if (quizOver === true){
    return <Summary />
    
  } else {
    return (
      <div>
        <h1>{question.id}/7</h1>
        <legend>{question.id}. {question.questionText}</legend>
        {options.map((option, index) => (
          <label htmlFor={index} key={index}>
            <input 
              id={index} 
              type="radio" 
              name="answer"
              value={index}
              onChange={(event) => setUserAnswer(parseInt(event.target.value))}
              checked={userAnswer === index}
            />
            {option}
          </label>
        ))}
        
        <button disabled={userAnswer === ""} onClick={() => submitAnswer(question.id, userAnswer)}>Submit</button>
        <button disabled={answer === undefined} onClick={nextQuestion}>{question.id < 7 ? "Next question" : "Show result"}</button>
      </div>
    );
  };
};