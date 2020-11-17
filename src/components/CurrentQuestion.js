import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import { Summary } from './Summary';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch();

  const submitAnswer = ({ id, index }) => {
      dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  const nextQuestion = () => { 
    dispatch(quiz.actions.goToNextQuestion())
  };

  const options = question.options;

  const Radiobuttons = ({ answer, setAnswer });

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
          <label htmlFor={question.id} >
            <input 
              id={question.id} 
              type="radio" 
              name={option[index]} 
              value={question.id}
              onChange={(event) => setAnswer(event.target.value)}
              checked={answer === options} 
              required
            />
            {option}
          </label>
        ))}
        
        <button onClick={submitAnswer}>Submit</button>
        <button onClick={nextQuestion}>{question.id < 7 ? "Next question" : "Show result"}</button>
      </div>
    );
  };
};