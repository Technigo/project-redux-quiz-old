import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { OptionButton, SmallButton, SummaryButton } from '../lib/Buttons'
import { Question } from '../lib/Text'
import { ButtonContainer, QuestionContainer, QuestionPicture, OptionsContainer } from '../lib/Containers'
import { Timer } from '../components/Timer'
import { TimeIsUp } from '../components/TimeIsUp'

export const Quiz = () => {
  const disabled = useSelector((state) => state.quiz.disabled)
  const deciseconds = useSelector((state) => state.quiz.deciseconds)
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
    return <Question>Oh no! I could not find the current question!</Question>
  }

  return (
    <>
      <Question>Question {(index + 1)} of {questions}: <span>{question.questionText}</span></Question>
      <QuestionContainer>
        <QuestionPicture src={question.image} alt="" />
        <OptionsContainer>
          {options.map((option, optionindex) => {
            return (
              <OptionButton
                disabled={optionDisabled || deciseconds === 0}
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
        ? <NavLink to="/summary"><SummaryButton onClick={() => dispatch(quiz.actions.setSummary({ numberOfQuestions: questions, correctAnswers: correct }))}>See results</SummaryButton></NavLink>
        :
        <>
          {(deciseconds > 0) ? <TimeIsUp color="rgba(0, 0, 0, 0)" /> : <TimeIsUp color="rgba(0, 0, 0, 1)" />}
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
