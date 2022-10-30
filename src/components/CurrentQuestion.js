/* eslint-disable indent */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { ProgBar } from './ProgressBar'
import Summary from './Summary'
import universe from '../images/universe.jpg'
import { StyledButton, Image } from './ReusableStyles.js'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const entireStore = useSelector((state) => state);
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer(
      { questionId, answerIndex }
    ))
    if (question.correctAnswerIndex === answerIndex) {
      swal({
        title: 'Good job!',
        text: 'You picked the right one!',
        icon: 'success',
        button: 'continue'

      });
    } else {
      swal({
        title: 'Wrong answer!',
        icon: 'error',
        button: 'continue'
      });
    }
    dispatch(quiz.actions.goToNextQuestion())
  }

  const allAnswers = question.options.map((option, index) => {
    return (
      <>
        {question.id === 5
          ? <ClonedImage
              src={option.img}
              alt={option.value}
              onClick={() => onAnswerSubmit(question.id, index)}
              key={option.value} />
          : <StyledButton
              onClick={() => onAnswerSubmit(question.id, index)}
              key={option.value}
              type="button">
                <p>{option.value}</p>
          </StyledButton>}
      </>)
  })

  return (
    <OuterWrapper>
      <Container>
        {entireStore.quiz.quizOver
          ? <Summary />
          : <>
            <ProgBar />
            <QuestionContainer>
              <h1>{question.questionText}</h1>
            </QuestionContainer>
            <ButtonContainer>
              {allAnswers}
            </ButtonContainer>
          </>}
      </Container>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  background: linear-gradient(rgba(7, 7, 7, 0.7), rgb(0, 0, 0, 0.3)),
  url(${universe});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  color: var(--lightPink-color);
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(rgba(7, 7, 7, 0.7), rgba(0, 0, 0, 0.5));
background-size: cover;
max-width: 50rem;
/* margin-top: 4vh;
margin-bottom: 4vh; */
border-radius: 8px;

`;

const QuestionContainer = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;

`

const ButtonContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 4rem;
margin-bottom: 4rem;
gap: 1rem;
width: 90%;
@media (min-width: 667px) {

}
`;

const ClonedImage = styled(Image)`
  transform: rotate(120deg);
  animation: rotate-planet 10s linear infinite;
    &:hover {
      transform: scale(1.1);
    }
    @keyframes rotate-planet
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
`