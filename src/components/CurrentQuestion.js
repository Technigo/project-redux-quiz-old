import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import ProgressBar from 'components/ProgressBar'
import styled from 'styled-components'
import { Summary } from './Summary'

const QuestionText = styled.p`
text-align: center;
font-size: 1.5rem;
`

const ImgButton = styled.button`
border: 1px red solid;
background-color: transparent;
justify-content: center;
padding: 0px;
cursor: pointer;

& img {
  max-width: 100%;
}
`

const ImageGrid = styled.div`
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
justify-content: space-between;
/* border: 1px red solid; */
`

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answersArray = useSelector((state) => state.quiz.answers)

  const dispatch = useDispatch();

  console.log(wholeStore)
  console.log(question)

  if (quizOver) {
    return <Summary />
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const displayNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      window.alert('You are a queen!')
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

  return (
    <>
      <QuestionText>Question: {question.questionText}</QuestionText>
      <ImageGrid>
        {question.options.map((option, index) => (
          <ImgButton
            onClick={() => onAnswerSubmit(question.id, index)}
            key={option}
            type="button"
            style={{ border: question.correctAnswerIndex ? '#de84b4' : '#eaeaea' }}
            disabled={answersArray.length === question.id}>
            {option}
          </ImgButton>
        ))}
      </ImageGrid>

      <div className="progressbar">
        {barData.map((item) => (
          <ProgressBar
            key={item}
            changeOfBarProgress={barChange}
            bgcolor={item.bgcolor}
            completed={item.completed} />
        ))}
      </div>
    </>
  )
}

/* const Alert = styled.div`
width: 100px;
height: 100px;
background-color: hotpink;
`; */