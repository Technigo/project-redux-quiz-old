/* eslint-disable no-nested-ternary */
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { quiz } from 'reducers/quiz';

import { Summary } from 'components/Summary'
import { ProgressBar } from 'components/ProgressBar'

import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapper } from 'styling/Wrappers';

// import nextBtn from 'assets/svg/arrow-next-right-icon.svg';
import restartBtn from 'assets/svg/undo-icon.svg';
// import nextBtn from 'assets/svg/';
import nextBtn from 'assets/svg/double-arrow-right-icon.svg';

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => (
    a.questionId === question.id)));
  const wholeStore = useSelector((store) => store)
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  console.log(wholeStore);
  console.log(question);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    navigate('/')
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (isQuizOver === true) {
    return (<Summary />)
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
  }
  return (
    <OuterWrapper>
      <ImageWrapper>
        <QuestionImage src={question.backdropImg} alt={`Question${question.id}`} />
      </ImageWrapper>
      <InnerWrapper>
        <QuizCard>
          <Question>{question.questionText}</Question>
          <AnswersWrapper>
            {question.options.map((option, index) => {
              return (
                <AnswerButton
                  onClick={() => onAnswerSubmit(question.id, index)}
                  className={!answer ? 'answerbutton' : index === question.correctAnswerIndex ? 'correct' : 'wrong'}
                  key={option}
                  disabled={answer}
                  type="button">{option}
                </AnswerButton>
              )
            })}
            <ButtonWrapper>
              <NextBtn
                onClick={handleRestart}
                type="button">
                <img
                  src={restartBtn}
                  width="40"
                  height="40"
                  alt="next question"
                  className="" />
              </NextBtn>
              <NextBtn
                onClick={() => dispatch(quiz.actions.goToNextQuestion())}
                type="button"
                disabled={!answer}>
                <img
                  src={nextBtn}
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="white"
                  alt="next question"
                  className="" />
              </NextBtn>
            </ButtonWrapper>
          </AnswersWrapper>
          <ProgressBar />
          <div>
            <iframe src={question.audio} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="hej" />
          </div>
        </QuizCard>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const Question = styled.h1`
  color: #ffffff;
  font-size: 20px;
`
export const NextBtn = styled.button`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  border: 0;
`

const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3vh;
  align-items: center;
`

const QuizCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  row-gap: 5vh;
  height: auto;
  margin: 5vh 0 5vh 0;
`

export const ImageWrapper = styled.div`  
  display:flex;
  height: 30vh;
  width: 100%;
  margin: 0;
  position: relative;
  top: 0;
`

export const QuestionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover ;
  /* position: absolute; */
  /* top: 0; */  
`

const AnswerButton = styled.button`
color: black;
width: 140px;
max-width: 800px;
border-radius: 5px;
/* border-color: pink; */
/* box-shadow: 5px 5px 10px orange; */
font-weight: 600;
`

const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
column-gap: 5vw;
margin-top: 20px;
width: 100%;
`