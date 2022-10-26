import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  console.log(question);

  // below fetches the answer to a question
  const answer = useSelector(
    (store) => store.quiz.answers.find((a) => a.questionId === question.id)
  )

  const dispatch = useDispatch();
  const [hasAnswered, setHasAnswered] = useState(false)
  const [userAnswerIndex, setUserAnswerIndex] = useState(99)

  /* A reset for each question */
  useEffect(() => {
    setHasAnswered(false)
    setUserAnswerIndex('')
  }, [question])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    if (answer) return
    else {
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
      return 'right-answer'
    } else if (index === userAnswerIndex) {
      return 'wrong-answer'
    }
  }

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