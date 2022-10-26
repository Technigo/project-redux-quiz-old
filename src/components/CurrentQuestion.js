import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import ProgressBar from 'components/ProgressBar'
import styled from 'styled-components'
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
    if (question.correctAnswerIndex === answerIndex) {
      window.alert('Yep, correct!')
      setTimeout(displayNextQuestion, 1000);
    } else {
      window.alert('You are an amateur!')
      setTimeout(displayNextQuestion, 1000);
    }
  };

  const barChange = (question.id / 5) * 100;
  const barData = [
    { bgcolor: 'green', completed: `${barChange}` }
  ];

  const QuestionText = styled.p`
    text-align: center;
    font-size: 1.5rem;
   `

  const ImgButton = styled.button`
    width: 100%;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    gap: 10px;
    `

  return (
    <div>
      {quizOver ? (
        <Summary />
      ) : (
        <div>
          <QuestionText>Question: {question.questionText}</QuestionText>
          {question.options.map((option, index) => (
            <ImgButton
              onClick={() => onAnswerSubmit(question.id, index)}
              key={option}
              type="button"
              disabled={answersArray.length === question.id}>
              {option}
            </ImgButton>
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

