import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import ProgressBar from 'components/ProgressBar'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore)
  console.log(question)

  const dispacth = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispacth(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispacth(quiz.actions.goToNextQuestion());
    } else {
      window.alert('you are an amateur!')
    }
  };

  const barChange = (question.id / 5) * 100;
  const barData = [
    { bgcolor: 'green', completed: `${barChange}` }
  ];

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option, index) => {
        return <button onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</button>
      })}
      <div className="progressbar">
        {barData.map((item) => (
          <ProgressBar
            key={item}
            changeOfBarProgress={barChange}
            bgcolor={item.bgcolor}
            completed={item.completed} />
        ))}
      </div>
    </div>
  )
}
