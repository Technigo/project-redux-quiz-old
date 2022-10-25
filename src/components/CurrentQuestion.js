import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
/* import Options from 'components/Options' */

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  console.log(question);

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('Sorry, wrong answer')
    }
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return <button onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
      })}
    </div>
  )
}