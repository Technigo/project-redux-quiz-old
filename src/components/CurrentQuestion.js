/* eslint-disable linebreak-style */
import React from 'react'
import { Container, QuestionWrapper } from 'Globalstyles'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const dispatch = useDispatch();

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('wrong answer')
    }
  }

  return (
    <Container>
      <QuestionWrapper>
        <h1>{question.questionText}</h1>
        {question.options.map((option, index) => {
          return (
            <button key={option} type="button" onClick={() => onAnswerSubmit(question.id, index)}>{option}</button>
          )
        })}
      </QuestionWrapper>
    </Container>
  )
}
