/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { HintButton } from './styled_components/buttons.js'
import { Progressbar } from './styled_components/progressbar.js';
import { QuizSummary } from './QuizSummary'
import Hint from './Hint.js';

const QuestionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color:#7f7f7f ;

  @media (min-width: 744px) {
    width: 100%;
  }
`;

const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(9px);
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
  height: 35vh;
  padding: 2rem;
  margin-bottom: 2rem;
  margin-top: 9rem;
  z-index: 2;
  border-radius: 5px;

  @media (min-width: 667px) {
    width: 50%;
  }
`;

const OptionsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
@media (min-width: 667px) {
    width: 50%;
  }
`
const OptionButton = styled.button`
width: 90%;
height: 4rem;
border-radius: 5px;
margin-bottom: 1rem;
background-color:black;
color: white;
font-family: "Space Mono";
font-size: 20px;
cursor: pointer;
${({ isCorrect }) => isCorrect && css`
    background-color: #b5cbce;
    color: black;
    border: 2px solid white;
    font-size: 23px;
    font-weight: bold;
    min-height: 4rem;
    height: fit-content;
  `}
  :disabled {
    ${({ isCorrect }) => !isCorrect && css`
    background-color: black;
    opacity: 0.5;
    `}
  }

  @media (min-width: 667px) {
    width: 100%;
  }
`

const ImgQuestion = styled.img`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30vh;
  z-index: 1;

  @media (min-width: 667px) {
    object-fit: cover;
    width:100%
  }
`;

const HintContainer = styled.div`
width: fit-content;
background-color: white;
padding: 1rem;
margin-top:20px;
`;

export const CurrentQuestion = ({ onRestart }) => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const dispatch = useDispatch();
  const [showHint, setShowHint] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerCorrect, setAnswerCorrect] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const quizOver = useSelector((state) => state.quiz.quizOver)

  useEffect(() => {
    setShowHint(false);
    setWasClicked(false);
    setSelectedAnswer(null);
    setAnswerCorrect(null);
    setShowCorrectAnswer(null);
  }, [question]); // Sets state to false or null every time the question changes

  const handleAnswerClick = (answerIndex) => {
    const isCorrect = question.correctAnswerIndex === answerIndex;
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex }));
    // Submit answer to the store
    setSelectedAnswer(answerIndex);
    setAnswerCorrect(isCorrect);
    setWasClicked(true);
    setShowCorrectAnswer(true);

    setTimeout(() => {
      dispatch(quiz.actions.goToNextQuestion());
    }, 1500); // Delays the rendering of the next question after a button has been clicked
  };

  if (quizOver) {
    return <QuizSummary onRestart={onRestart} />
  }

  const handleHintClick = () => {
    setShowHint(!showHint);
    dispatch(quiz.actions.useHint())
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <>
      <ImgQuestion src={question.imgUrl} />
      <QuestionWrapper>
        <QuestionContainer>
          <h1>{question.questionText}</h1>
        </QuestionContainer>
        <OptionsContainer>
          {question.options.map((optionText, optionIndex) => (
            <OptionButton
              key={optionText}
              onClick={() => handleAnswerClick(optionIndex)}
              disabled={wasClicked}
              isCorrect={(selectedAnswer === optionIndex && answerCorrect)
                || (optionIndex === question.correctAnswerIndex && showCorrectAnswer)}
              // Shows correct answer after any click, correct or not
              isIncorrect={selectedAnswer === optionIndex && !answerCorrect}>
              {optionText}
            </OptionButton>
          ))}
        </OptionsContainer>
        <HintContainer>
          <HintButton disabled={showHint} onClick={handleHintClick}>{showHint ? 'Time to make a guess ↑' : 'Would you like a hint?'}</HintButton>
          {showHint && <Hint question={question} />}
        </HintContainer>
        <Progressbar totalQuestions={5} />
      </QuestionWrapper>
    </>
  );
};
