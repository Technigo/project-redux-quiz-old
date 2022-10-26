/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react'
import { Container, QuestionWrapper } from 'Globalstyles'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from 'components/Summary'
import { Progressbar } from './ProgressBar'

export const CurrentQuestion = () => {
  /* const [correct, setCorrect] = useState(false) */
  const dispatch = useDispatch();
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const quizState = useSelector((store) => store.quiz.quizOver);
  const correctState = useSelector((store) => store.quiz.correctAnswer)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      // setCorrect(true)
      dispatch(quiz.actions.displayCorrectOrWrong({ questionId, answerIndex }))
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 800);
    } else {
      // setCorrect(false)
      dispatch(quiz.actions.displayCorrectOrWrong({ questionId, answerIndex }))
      setTimeout(() => dispatch(quiz.actions.goToNextQuestion()), 800);
    }
  }

  if (quizState === false) {
    return (
      <Container>
        <QuestionWrapper>
          <h1>{question.questionText}</h1>
          {question.options.map((option, index) => {
            return (
              <button id="optionBtn" key={option} type="button" onClick={() => onAnswerSubmit(question.id, index)}>{option}</button>
            )
          })}

          {/* correctState && (<span id="correct">&#9745;</span>)}
          {!correctState && (<span id="correct">&#9746;</span>) */}

          {(() => {
            switch (correctState) {
              case true:
                return <span id="correct">&#9745;</span>
              case false:
                return <span id="wrong">&#9746;</span>
              default:
                return <span id="wrong">hello</span>
            }
          })()}

          <Progressbar />

        </QuestionWrapper>
      </Container>
    )
  } else {
    return (
      <Summary />
    )
  }
}