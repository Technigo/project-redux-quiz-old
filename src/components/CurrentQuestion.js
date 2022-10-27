import React, { useState } from 'react'
import { useSelector/* , useDispatch */ } from 'react-redux'
import { Link } from 'react-router-dom'
/* import { quiz } from 'reducers/quiz' */
import RestartButton from './RestartButton'
import Summary from './Summary'
import { Background, QuestionContainer, Headers } from './Styling/GlobalStyles'
import ProgressBar from './Progressbar'
import Options from './Options'
import NextButton from './NextButton'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const wholeStore = useSelector((store) => store)
  /* const userAnswer = useSelector((store) => store.quiz.answer.find((a)
   => (a.questionId === question.id))) */
  console.log(wholeStore);
  console.log(question);

  const finalQuestion = useSelector((state) => state.quiz.quizOver);

  const [optionDisabled, setOptionDisabled] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [nextDisabled, setNextDisabled] = useState(true)

  /*   const dispatch = useDispatch(); */

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  /*   const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }));
    if (question.correctAnswerIndex === answerIndex) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      window.alert('Sorry, wrong answer')
    }
  } */

  if (finalQuestion === true) {
    return <Summary />;
  } else {
    return (
      <Background>
        <QuestionContainer>
          <Headers>Question: {question.questionText}</Headers>
          {question.options.map((option, answerIndex) => (
            <><Options
              key={option.id}
              option={option}
              answerIndex={answerIndex}
              setNextDisabled={setNextDisabled}
              optionDisable={optionDisabled}
              setOptionDisabled={setOptionDisabled} />
            {/*  <NextButton
              key={option.id}
              option={option}
              questionId={question.id}
              question={question}
              answer={userAnswer}
              setOptionDisabled={setOptionDisabled}
              optionDisabled={optionDisabled} /> */}
            </>

          ))}
          <NextButton setOptionDisabled={setOptionDisabled} />
          {/*  {
            return <button onClick={() => onAnswerSubmit(question.id, index)}
            key={option} type="button">{option}</button>
          })}  */}

          <Link to="/">
            <RestartButton />
          </Link>
          <ProgressBar />
        </QuestionContainer>
      </Background>
    )
  }
}