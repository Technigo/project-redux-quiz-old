import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import ProgressBar from 'components/ProgressBar'
import { Summary } from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answersArray = useSelector((state) => state.quiz.answers)
  console.log(wholeStore)
  console.log(question)

  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    setTimeout(displayNextQuestion, 1000);
  };

  const barChange = (question.id / 5) * 100;
  const barData = [
    { bgcolor: 'green', completed: `${barChange}` }
  ];

  return (
    <div>
      {quizOver ? (
        <Summary />
      ) : (
        <div>
          <h1>Question: {question.questionText}</h1>
          {question.options.map((option, index) => (
            <button
              onClick={() => onAnswerSubmit(question.id, index)}
              key={option}
              type="button"
              disabled={answersArray.length === question.id}>
              {option}
            </button>
          ))}
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
      )}
    </div>
  )
}
