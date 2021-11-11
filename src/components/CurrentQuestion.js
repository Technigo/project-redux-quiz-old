import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { quiz } from '../reducers/quiz'

const QuestionBackgroundImage = styled.div`
  background-image: url('https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80');
  background-color: rgb(205, 206, 201);
  background-size: cover;
  height: 600px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica Neue';
  font-size: 10px;
`

const QuestionText = styled.div`
  background-color: rgb(205, 206, 201);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AnswerButton = styled.button`
  width: 250px;
  height: 100px;
`

const QuestionImage = styled.img`
  height: 200px;
`

export const CurrentQuestion = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const questions = useSelector(state => state.quiz.questions)
  const question = useSelector(state => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answers = useSelector(state => state.quiz.answers)
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex)
  const quizOver = useSelector(state => state.quiz.quizOver)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onSubmitAnswer = index => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  }

  const onButtonClick = () => {
    // if not all questions are answered dispatch goToNextQuestion
    // if all questions are answered navigate to summary
    if (answers.length !== questions.length) {
      dispatch(quiz.actions.goToNextQuestion())
    } else {
      navigate('/summary')
    }
  }

  const isCorrect = index => {
    // check if answerIndex matches button index if ok => check if answer is correct
    // if correct style with correct otherwise incorrect classes
    if (answers[currentQuestionIndex]?.answerIndex === index) {
      return answers[currentQuestionIndex]?.isCorrect ? 'button correct' : 'button incorrect'
    } else {
      return 'button'
    }
  }
  // efter ett val så får man reda på om det var rätt/fel samt att knapparna blir disabled + det kommer en "next question" knapp

  return (
    <QuestionBackgroundImage>
      <div>
        <QuestionText>
          <h1> {question.questionText}</h1>
          {question.imgUrl !== '' && <QuestionImage src={question.imgUrl} alt='#' />}
          {/* Trying on line 77 to thet the image to show at the appropriate question */}
          {question.options.map((option, index) => (
            <button
              key={option}
              type='button'
              disabled={answers.length === question.id}
              className={isCorrect(index)}
              onClick={() => onSubmitAnswer(index)}>
              {option}
            </button>
          ))}
          {/* conditionally show button only when an option is selected then
              conditionally set the button text  based on if the quiz is still going or in the end
              maybe not the most elegant way.
              the click is handled in the onButtonClick function */}
          {answers.length === question.id && !quizOver && (
            <button type='button' onClick={() => onButtonClick()}>
              {answers.length !== questions.length ? 'Next Question' : 'Show results'}
            </button>
          )}
        </QuestionText>
        {answers.length === question.id && (
          <div>
            {answers[currentQuestionIndex]?.isCorrect && <p>{question.answerText}</p>}
            {!answers[currentQuestionIndex]?.isCorrect && <p>Sorry, not quite right!</p>}
          </div>
        )}
      </div>
    </QuestionBackgroundImage>
  )
}
