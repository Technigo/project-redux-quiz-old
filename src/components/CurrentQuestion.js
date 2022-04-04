import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {quiz} from 'reducers/quiz'

export const CurrentQuestion = () => {


  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch();
  const gameOver = useSelector((state) => state.quiz.quizOver);


  console.log(question, 'question')
  //console.log(gameOver, 'gameOver')

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }


  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({questionId: id, answerIndex: index}))
    
  }

  const onNextQuestionClick = () => {
   dispatch(quiz.actions.goToNextQuestion())

  }

  
    
    if (!gameOver) {

    return <div>
      <h1>Question: {question.questionText}</h1>
      <img src={question.img} alt='question 1'/>
      {question.options.map((item, index) => (
        <button type='submit' onClick={() => onAnswerSubmit(question.id, index)} key={item}> {item} </button> 
      ))}
      <button type='button' onClick={onNextQuestionClick}>Next question</button>
    </div>
    }

      return <p>Game over</p>
    
    

}
