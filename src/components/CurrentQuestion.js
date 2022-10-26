import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  console.log(question);

  const dispatch = useDispatch();
  const [hasAnswered, setHasAnswered] = useState(false)
  const [userAnswerIndex, setUserAnswerIndex] = useState(99)

  /* A reset for hasAnswered and answerIndex for each question */
  useEffect(() => {
    setHasAnswered(false)
    setUserAnswerIndex('')
  }, [question])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    setHasAnswered(true)
    setUserAnswerIndex(answerIndex)

    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ));
  }

  const classCheck = (index) => {
    if (!hasAnswered) {
      return ''
    }
    if (index === question.correctAnswerIndex) {
      return 'right-answer'
    } else if (index === userAnswerIndex) {
      return 'wrong-answer'
    }
  }

  // const ButtonAnswer = {
  //   border: `solid ${borderColor} 2px`
  // }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return (
          <button
            onClick={() => onAnswerSubmit(question.id, index)}
            key={option}
            type="button"
            className={classCheck(index)}>{option}
          </button>
        )
      })}
    </div>
  )
}