import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux' // useDispatch
import {quiz} from "../reducers/quiz"
import Summary from './Summary'

export const CurrentQuestion = () => {
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const answers = useSelector((state) => state.quiz.answers)
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]) // samma som att skriva state.quiz.questions[0] då currentquestion startar med 0
  const dispatch = useDispatch(); // we use this to update our redux store, like currentquestion to next question

  const [summary, setSummary ]= useState(false)
  
  console.log(currentQuestionIndex)

  const summaryContainer = ()=>{}
  if (summary){
     return(
     < Summary />
     )}
     else{

      if (!question) {
        return <h1>Oh no! I could not find the current question!</h1>
      }
      console.log(answers)

      
      return (
        <div>
          <h1>Question: {question.questionText}</h1>
    
          {
            question.options.map((options, index)=>{
              //console.log(question)
             
              return(
              <button onClick={()=> dispatch(quiz.actions.submitAnswer({questionId:question.id, answerIndex:index}))} disabled={answers.length === currentQuestionIndex +1}>{options}</button>
              
              )
            })
          }
          {currentQuestionIndex === 1? <button onClick={()=>setSummary(true)}>Submit</button> : <button onClick={()=> dispatch(quiz.actions.goToNextQuestion()) }>Next Q</button>}
        </div>
      )
     }

  
}


































