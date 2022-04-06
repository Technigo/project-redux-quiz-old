import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { quiz } from "reducers/quiz"

import { StyledButton1 } from "styles"

export const QuizQuestions = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const dispatch = useDispatch();
  // getting data from the store
  // useSelector is like binding a state, this will be binded and in the second dispath and only the index will change..
  // so it got another qustion from the store. 
  // every useSelector is listening to changes in the store, we don't need to say we have the data, this variable should..
  // listen to the data. it is all automatically handled 
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  // console logged the whole store, easier and better to use a more specific route you want to access in the store
  // const store = useSelector((state) => state)
  // getting data to the store / updating

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    setIsClicked(true)
    //proceed on with conditional rendering, so check if ... only then dispatch to next question
    // if (question.correctAnswerIndex === index) {
    if(question.correctAnswerIndex === index) {
      setIsCorrect(true)
      setIsWrong(false)
    } else {
      setIsWrong(true)
      setIsCorrect(false)
    }

    // }
  }

  const handleNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsClicked(false)
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <div>
        <h1>Question: {question.questionText}</h1>
        {question.options.map((item, index) => (
          <button
            key={item}
            disabled={isClicked}
            onClick={() => { onAnswerSubmit(question.id, index) }}
          >{item}
          </button>
        ))}
      </div>
      {question.id === 5
        ? <button onClick={handleNextQuestion}>Submit Quiz</button>
        : <button onClick={handleNextQuestion}>Next question</button>
      }
      <div>
        <StyledButton1 right={isCorrect} wrong={isWrong}></StyledButton1>
      </div>
    </>
  )
}
