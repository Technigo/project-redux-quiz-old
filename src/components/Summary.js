import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

const SummaryContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #e40010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SummaryTitle = styled.h2`
  font-size: 32px;
`

const Textbox = styled.div`
  width: 350px;
  font-size: 14px;
`
const RestartButton = styled.button`
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: #0B5E15; 
  border-radius: 10px;
`

const Gif = styled.image`
  width: 100px;
  height: 100px;
`

export const Summary = () => {

    /* This is what we need in here: 
    state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
      */

     //den här ska vi använda sen när submit button funkar:  
     //const answers = useSelector((state) => state.quiz.answers)
  const answers = [{questionId: 1, answerIndex: 2, question: 'Ungefär hur många askar av den mörka Aladdinchokladen säljs i genomsnitt varje december i Sverige?', answer: 'Blue blue ', isCorrect: true}, {questionId: 2, answerIndex: 0, question: 'Ungefär vad?', answer: 'Blue blue ', isCorrect: true},]
  
  const dispatch = useDispatch();

  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  };

  return (
    <SummaryContainer>
      <SummaryTitle>Summary of the answers:</SummaryTitle>
      <Textbox>
         <p>{answers.length} Denna ska bort sen när det fungerar</p>
      </Textbox>
      <Textbox>
        {answers.map((answer) => (
          <Textbox>
            <p>{answer.questionId}. {answer.question}</p>
            <p>{answer.answer}</p>
            <p>{answer.isCorrect}</p>
          </Textbox>
        ))}
        <p>You had {answers.isCorrect} LÄGGA TILL .length eller index correct answers of 7 SummaryPossible!</p>
        <p>{answers.isCorrect > 5 ? "Wow! Amazing work! You really must LOVE Christmas!" : "Better luck next time!"}</p> 
        <SummaryTitle>MERRY CHRISTMAS!</SummaryTitle>
          <Gif
            src='https://media2.giphy.com/media/HBMCmtsPEUShG/giphy.gif'
            alt='Gif of a guy dancing in a christmas sweater'
          />    
      </Textbox>
    <RestartButton onClick={restartQuiz}>Restart Quiz!</RestartButton>
    </SummaryContainer>
 );
};
