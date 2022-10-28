/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import { Container, Buttons } from 'Globalstyles'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from 'components/Summary/Summary'
import { Progressbar } from '../ProgressBar/ProgressBar'
import { QuestionWrapper, AnswerButtons } from './CurrentQuestion.styles'
import FriendsLogo from '../../assets/FriendsLogo.svg'

export const CurrentQuestion = ({ score, setScore }) => {
  const dispatch = useDispatch();
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  const quizState = useSelector((store) => store.quiz.quizOver);
  const correctState = useSelector((store) => store.quiz.correctAnswer);// set state of correct answer clicked or not

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.displayCorrectOrWrong({ questionId, answerIndex }))
      setScore(score + 1)
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 800); // question answer delay
    } else {
      dispatch(quiz.actions.displayCorrectOrWrong({ questionId, answerIndex }));
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 800);
    }
  }

  if (quizState === false) {
    return (
      <Container>
        <img className="logo" src={FriendsLogo} alt="logo" />
        <QuestionWrapper>
          <h1>{question.questionText}</h1>
          <AnswerButtons>
            {question.options.map((option, index) => {
              return (
                <Buttons
                  /* this adds a className to the button with correct answer  */
                  className={index === question.correctAnswerIndex ? 'correctBtn' : 'wrongBtn'}
                  key={option}
                  type="button"
                  onClick={() => onAnswerSubmit(question.id, index)}>
                  {option}
                </Buttons>
              )
            })}
          </AnswerButtons>

          {/* switch symbols when you answer correct or not */}
          {(() => {
            switch (correctState) {
              case true:
                return <span id="correctSymbol"><img src="images/right.svg" className="symbols" alt="right" /></span>
              case false:
                return <span id="wrongSymbol"><img src="images/wrong.svg" className="symbols" alt="wrong" /></span>
              default:
                return <span id="noSymbol">.</span> // default between symbols when going to new question
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