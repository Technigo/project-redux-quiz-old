import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';
import styled from 'styled-components'
import { ButtonStyling } from './Buttons';

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  console.log(question);

  /* A fetch of the answers to each question */
  const answer = useSelector(
    (store) => store.quiz.answers.find((a) => a.questionId === question.id)
  )

  const dispatch = useDispatch();
  const [hasAnswered, setHasAnswered] = useState(false)
  const [userAnswerIndex, setUserAnswerIndex] = useState('')

  /* A reset for each question */
  useEffect(() => {
    setHasAnswered(false)
    setUserAnswerIndex('')
  }, [question])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  // The line if (answer) return seems to make sure that it is only possible
  // to answe the question once.
  const onAnswerSubmit = (questionId, answerIndex) => {
    if (!answer) {
      setHasAnswered(true)
      setUserAnswerIndex(answerIndex)
      dispatch(quiz.actions.submitAnswer(
        { questionId, answerIndex }
      ));
    }
  }

  const classCheck = (index) => {
    if (!hasAnswered) {
      return ''
    }
    if (index === question.correctAnswerIndex) {
      return 'rightanswer'
    } else if (index === userAnswerIndex) {
      return 'wronganswer'
    }
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <ButtonContainer>
        {question.options.map((option, index) => {
          return (
            <ButtonStyling
              options
              onClick={() => onAnswerSubmit(question.id, index)}
              key={option}
              type="button"
              className={classCheck(index)}>
              {option}
            </ButtonStyling>
          )
        })}
      </ButtonContainer>
    </div>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

`
