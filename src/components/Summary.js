import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

const SummaryContainer = styled.section`
  background-color: #e40010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const SummaryTitle = styled.h2`
  font-size: 28px;
  color: #ffffff;
`

const Textbox = styled.div`
  width: 350px;
  font-size: 14px;
`

const Summarybox = styled.div`
  border: 3px solid #0B5E15;
  font-size: 16px;
  padding: 6px;
  margin: 10px;
`

const RestartButton = styled.button`
  padding: 10px;
  margin: 20px;
  background-color: #0B5E15; 
  border-radius: 10px;
  color: #ffffff;
`

const Messagebox = styled.div`
    width: 350px;
    font-size: 18px;
    color: #ffffff;
`

export const Summary = () => {

  // Pick up the array with answers
  const answers = useSelector((state) => state.quiz.answers)
    console.log(answers)
  // Restart quiz function 
  const dispatch = useDispatch();
  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  };

  // Filter out the correct answers 
  const correctAnswers = answers.filter(answer => answer.isCorrect)  

  return (
    <SummaryContainer>
      <SummaryTitle>Summary of the answers:</SummaryTitle>
      <Textbox>
        {answers.map((answer) => (
          <Summarybox key={answer.questionId}>
            <p>{answer.questionId}. {answer.question.questionText} </p>
            <p>Your answer: {answer.answer}</p> 
            <p>{answer.isCorrect ? "Right answer 🌟" : "Wrong answer 😞"}</p>
          </Summarybox>
        ))}
        <Messagebox>
            <p>You had {correctAnswers.length} correct answers of 7 possible!</p>
            <p>{correctAnswers.length > 5 ? "Wow! Amazing work! You really must LOVE Christmas!" : "Better luck next time!"}</p> 
        </Messagebox>
        <SummaryTitle><span role="img" aria-label="christmas tree">🎄</span>MERRY CHRISTMAS!<span role="img" aria-label="christmas tree">🎄</span> </SummaryTitle>
      </Textbox>
      <RestartButton onClick={restartQuiz}>Restart Quiz!</RestartButton>
    </SummaryContainer>
  );
};
