import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { useState, useEffect } from 'react'


export const RestartButton = () => {
const dispatch = useDispatch()

const clickRestart = () => {
    dispatch(quiz.actions.restart())

}

    return (
      <button className='btn-restart' type='button' onClick={clickRestart}>
        Restart Quiz
      </button>
    )
}


export const AnswerButton = ({item, index, questionId, question, answer}) => {
    const [disable, setDisabled] = useState(false)
    const dispatch = useDispatch()
    const onAnswerSubmit = (id, index) => {
        dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
        setDisabled(true)
      };
      
    return (
        <button  className={!answer ? "defaultbtn" : index === question.correctAnswerIndex ? "correct" : "wrong"}
        type="submit" 
        disabled={disable}
        onClick={() => onAnswerSubmit(questionId, index)}
        key={item}>{item}</button>
    )
}

export const NextQuestion = () => {
    const dispatch = useDispatch()
    const nextQuestion = () => {
        dispatch(quiz.actions.goToNextQuestion());
    }
    
    return (
      <button 
        className='next'
        type="submit" 
        onClick={()=>nextQuestion ()}>
        Next question</button>
    )
}
  