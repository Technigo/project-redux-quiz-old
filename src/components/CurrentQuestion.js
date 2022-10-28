import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import ProgressBar from 'components/ProgressBar'
import styled from 'styled-components'
import { Summary } from './Summary'
import Timer from './Timer'

const QuestionText = styled.p`
text-align: center;
font-size: 1.5rem;
`

const ImgButton = styled.button`
background-color: transparent;
border: none; 
padding: 0;
cursor: pointer;
-webkit-appearance: none;
-webkit-box-shadow: -4px 4px 20px 4px rgba(0,0,0,0.6);
box-shadow: -1px 1px 10px 1px rgba(0,0,0,0.6);
-moz-box-shadow: -1px 1px 10px 1px rgba(0,0,0,0.6);

& img {
  max-width: 100%;
  margin-bottom: -2%;
  margin-top: -1%;
}`

const ImageGrid = styled.div`
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
justify-content: space-between;
`

export const CurrentQuestion = ({ wasCorrectAnswerSelected }) => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const currentanswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
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
      setTimeout(displayNextQuestion, 1000);
    } else {
      setTimeout(displayNextQuestion, 1000);
    }
  };

  const answerButtonClass = (index) => {
    if (currentanswer) {
      if (currentanswer.answerIndex === index) {
        if (currentanswer.isCorrect) {
          return {
            border: '6px solid green'
          };
        }
        return { border: '6px solid red' };
      }
      return {};
    }
    return {};
  };

  const barChange = (question.id / 5) * 100;
  const barData = [
    { bgcolor: 'hotpink', completed: `${barChange}` }
  ];
  // const countDown = [{ color: 'hotpink' }];

  return (
    <>
      <QuestionText>Question: {question.questionText}</QuestionText>
      <Timer questionId={question.id} />
      <ImageGrid>
        {question.options.map((option, index) => (
          <ImgButton
            isCorrect={wasCorrectAnswerSelected}
            onClick={() => onAnswerSubmit(question.id, index)}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="button"
            disabled={answersArray.length === question.id}
            style={answerButtonClass(index)}>
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