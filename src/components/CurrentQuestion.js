/* eslint-disable no-nested-ternary */
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';

import { Summary } from 'components/Summary'
import { ProgressBar } from 'components/ProgressBar'

import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapper } from 'styling/Wrappers';

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => (
    a.questionId === question.id)));
  const wholeStore = useSelector((store) => store)
  const isQuizOver = useSelector((state) => state.quiz.quizOver);

  console.log(wholeStore);
  console.log(question);

  const dispatch = useDispatch();

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
      <InnerWrapper>
        <QuizCard>
          <ImageWrapper>
            <QuestionImage src={question.backdropImg} alt={`Question${question.id}`} />
          </ImageWrapper>
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
            <button
              onClick={() => dispatch(quiz.actions.goToNextQuestion())}
              type="button"
              disabled={!answer}> NEXT Question
            </button>
          </AnswersWrapper>
          <ProgressBar />
        </QuizCard>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const Question = styled.h1`
  color: red;
`

const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  row-gap: 5vw;
`

const QuizCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5vh;
  height: auto;
  justify-content: center;
`

const ImageWrapper = styled.div`  
  display:flex;
  height: 30vh;
  width: 100%;
  margin: 0;
  position: absolute;
  top: 0;
`

const QuestionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  /* position: absolute; */
  /* top: 0; */  
`

const AnswerButton = styled.button`
    color: blue;
  .answerbutton {
    color: red;
  }
`