import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // useDispatch
import {quiz} from "../reducers/quiz"


const Summary = ()=>{
    const answers = useSelector((state) => state.quiz.answers)

console.log(answers)

  return(
    <>
    <h1>This is a test</h1>
    {answers.map((y) => (
        <>
        <p>{y.answer} </p>
        <p>{y.isCorrect}</p>
        </>
    ))}
    </>

  )
}

export default Summary