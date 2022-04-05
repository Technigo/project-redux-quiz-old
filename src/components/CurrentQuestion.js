import React from 'react'
// import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const amountOfQuestions = useSelector((state) => state.quiz.questions.length)
  const amountOfAnswers = useSelector((state) => state.quiz.answers.length)
  // const renderButtons = useSelector((state) => state.currentQuestionIndex + 1 === state.questions.length)
  const dispatch = useDispatch()
  const isQuizOver = useSelector((state) => state.quiz.quizOver)
   console.log("store", isQuizOver)


  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({questionId:id, answerIndex:index}))
  }
  
  const clickNext = () => {

      dispatch(quiz.actions.goToNextQuestion())
  }

  if (!question) {
    return <h1>And just like that... I could not find the current question!</h1>
  }


  /*THERE ARE SOME PROBLEMS WITH THE BELOW, IT SHOWS TICK OR X FOR ALL BUTTONS */
  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => (
          <button
            key={item}
            onClick={() => onAnswerSubmit(question.id, index)}>
            {item} <span> {answer?.isCorrect ? "✔️" : answer?.isCorrect === false ? "✖️"  : ""} </span>
          </button>
      ))}

      {/*TEXT SHOWING IF THE ANSWER WAS RIGHT OR WRONG*/ }
      <p>{answer?.isCorrect && "Correct answer"}</p>
      <p>{answer?.isCorrect === false && "Wrong answer"}</p>

      {/*BUTTON TO GO TO NEXT QUESTION*/ }

      
      {/* { if (state.quizOver = false) { */}
         <button
            onClick={() => clickNext()}
            disabled={!answer}>
              Next
          </button> 
        
      {/* } else if (state.quizOver = true) {
        <Link to="/summary">
            <button>Finish</button>
        </Link>
        
      }} */}
      

      {/*PROGRESS BAR*/ }
      <label htmlFor='Progressbar'>{question.id} / {amountOfQuestions}</label>
      <progress id="Progressbar" value={amountOfAnswers} min="0" max="5"></progress>
    </div>
  )
}