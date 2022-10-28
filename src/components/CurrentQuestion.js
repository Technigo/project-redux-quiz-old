import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import RestartButton from './RestartButton'
import Summary from './Summary'
import { Background, QuestionContainer, Questions } from './Styling/GlobalStyles'
import ProgressBar from './Progressbar'
import Options from './Options'

export const OptionsContainer = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 767.98px){
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  }
`

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  console.log(wholeStore);
  console.log(question);

  const finalQuestion = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (finalQuestion === true) {
    return <Summary />;
  } else {
    return (
      <Background>
        <QuestionContainer>
          <Questions>{question.questionText}</Questions>
          <OptionsContainer>
            {question.options.map((option, answerIndex) => (
              <Options
                key={option.id}
                option={option}
                answerIndex={answerIndex} />
            ))}
          </OptionsContainer>
          <Link to="/">
            <RestartButton />
          </Link>
          <ProgressBar />
        </QuestionContainer>
      </Background>
    )
  }
}