/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react'
import { Container, QuestionWrapper, LogoWrapper } from 'Globalstyles'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from 'components/Summary'
import { Progressbar } from './ProgressBar'
import FriendsLogo from '../Pictures/FriendsLogo.svg'

export const CurrentQuestion = ({ score, setScore }) => {
  const dispatch = useDispatch();
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  const quizState = useSelector((store) => store.quiz.quizOver);
  const correctState = useSelector((store) => store.quiz.correctAnswer);
  // const { score, setScore } = props;
  console.log('score', score)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.displayCorrectOrWrong({ questionId, answerIndex }))
      setScore(score + 1)
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 800);
    } else {
      dispatch(quiz.actions.displayCorrectOrWrong({ questionId, answerIndex }))
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 800);
    }
  }

  if (quizState === false) {
    return (
      <Container>
        <LogoWrapper>
          <img src={FriendsLogo} alt="logo" />
        </LogoWrapper>

        <QuestionWrapper>
          <h1>{question.questionText}</h1>
          {question.options.map((option, index) => {
            return (
              <button
                className={index === question.correctAnswerIndex ? 'correctBtn' : 'wrongBtn'}
                key={option}
                type="button"
                onClick={() => onAnswerSubmit(question.id, index)}>
                {option}
              </button>
            )
          })}

          {(() => {
            switch (correctState) {
              case true:
                return <span id="correctSymbol">&#9745;</span>
              case false:
                return <span id="wrongSymbol">&#9746;</span>
              default:
                return <span id="noSymbol">.</span>
            }
          })()}

          <Progressbar />

        </QuestionWrapper>
      </Container>
    )
  } else {
    return (
      <Summary score={score} />
    )
  }
}