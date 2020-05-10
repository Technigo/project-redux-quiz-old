import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { OptionButton, SmallButton, BigButton } from '../lib/Buttons'
import { ButtonContainer, QuestionContainer, QuestionPicture, OptionsContainer } from '../lib/Containers'
import { Timer } from '../components/Timer'

export const Quiz = () => {
  const disabled = useSelector((state) => state.quiz.disabled)
  const seconds = useSelector((state) => state.quiz.seconds)
  const optionDisabled = useSelector((state) => state.quiz.optionDisabled)
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questions = useSelector((state) => state.quiz.questions.length)
  const index = (useSelector((state) => state.quiz.questions)).indexOf(question)
  const { options } = question

  const showSummaryButton = useSelector((state) => state.quiz.showSummary)
  const answers = useSelector((state) => (state.quiz.answers))
  const correct = (answers.filter((answer) => answer.isCorrect)).length

  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <h1>Question {(index + 1)} of {questions}: {question.questionText}</h1>
      <QuestionContainer>
        <QuestionPicture src={question.image} alt="" />
        <OptionsContainer>
          {options.map((option, optionindex) => {
            return (
              <OptionButton
                disabled={optionDisabled || seconds === 0}
                onClick={() => {
                  dispatch(quiz.actions.submitAnswer({ questionId: index, answerIndex: optionindex }))
                }}>
                <li key={optionindex}>{option}</li>
              </OptionButton>
            )
          })}
        </OptionsContainer>
      </QuestionContainer>
      {showSummaryButton
        ? <NavLink to="/summary"><BigButton onClick={() => dispatch(quiz.actions.setSummary({ numberOfQuestions: questions, correctAnswers: correct }))}>Summary</BigButton></NavLink>
        :
        <>
          <ButtonContainer>
            <SmallButton disabled={(index === 0)} onClick={() => dispatch(quiz.actions.goToPreviousQuestion())}>Back</SmallButton>
            <SmallButton disabled={disabled} onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next</SmallButton>
            <NavLink to="/"><SmallButton onClick={() => dispatch(quiz.actions.restart())}>Restart</SmallButton></NavLink>
          </ButtonContainer>
          <Timer />
        </>
      }
    </>
  )
}
