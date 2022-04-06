import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const RestartButton = () => {
const dispatch = useDispatch()

const clickRestart = () => {
    dispatch(quiz.actions.restart())

}

    return(
        <button className='btn-restart' type='button' onClick={clickRestart}>
        Restart Quiz
      </button>
    )

}

export const AnswerButton = ({item, index, questionId}) => {
    const dispatch = useDispatch()
    const onAnswerSubmit = (id, index) => {
        dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
      };
      
    return (
        <button className=""type="submit" onClick={()=>onAnswerSubmit(questionId, index)} key={item}>{item}</button>
    )
}

export const NextQuestion = () => {
    const dispatch = useDispatch()
    const nextQuestion = () => {
        dispatch(quiz.actions.goToNextQuestion());
    }
    
    return (
    <button type="submit" onClick={()=>nextQuestion ()}>Next question</button>
    )
}
  