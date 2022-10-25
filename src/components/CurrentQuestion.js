/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react'
import { Container, QuestionWrapper } from 'Globalstyles'
import { useSelector, useDispatch } from 'react-redux'
import { Summary } from 'components/Summary'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const dispatch = useDispatch();

  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const quizState = useSelector((store) => store.quiz.quizOver);
  console.log(quizState)
  const answer = useSelector((state) => state.quiz.answers.find((a) => (a.questionId === question.id)))
  console.log(answer)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    console.log(questionId, answerIndex)
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else if (question.correctAnswerIndex !== answerIndex) {
      window.alert('wrong answer')
    }
  }

  if (quizState === false) {
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
  } else {
    return (
      <Summary />
    )
  }
}
