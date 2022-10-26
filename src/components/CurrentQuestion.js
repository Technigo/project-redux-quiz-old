import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';

import { Summary } from 'components/Summary'
import { ProgressBar } from 'components/ProgressBar'

import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapper } from 'styling/Wrappers';

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
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

  // const onAnswerSubmit = (id, index) => {
  //   dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  // }
  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('Sorry, wrong answer');
    }
  }
  return (
    <OuterWrapper>
      <InnerWrapper>
        <QuizCard>
          <img src={question.backdropImg} alt={`Question${question.id}`} />
          <Question>{question.questionText}</Question>
          <AnswersWrapper>
            {question.options.map((option, index) => {
              return (
                <button onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
              )
            })}
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
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 5vw;
`

const QuizCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5vh;
  height: auto;
  justify-content: center;
`